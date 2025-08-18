import { loadPlug } from './library/connecting/engine/plugins.js'
import { config } from './config.js'
import db from './library/connecting/engine/database.js'
import { store, sleep, fetchJson, decodeJid, getBuffer } from './library/connecting/engine/machine.js'

export default async function handler(sock, m) {
  if (!m) return
  m.participant = m.participant || m.key?.participant || m.lid || m.sender
  m.isGroup = !!(m.chat || '').endsWith('@g.us')
  m.isPrivate = !m.isGroup
  const text = (m.text || '').trim()
  m.text = text
  const prefixes = ['.', '!', '/', '#']
  const prefix = prefixes.includes(text[0]) ? text[0] : ''
  m.isPrefix = !!prefix
  m.args = text ? text.split(/\s+/).slice(m.isPrefix ? 1 : 1) : []
  m.command = ''
  if (text) {
    if (m.isPrefix) m.command = text.slice(1).split(/\s+/)[0].toLowerCase()
    else m.command = text.split(/\s+/)[0].toLowerCase()
  }
  const mediaTypes = ['imageMessage','videoMessage','stickerMessage','documentMessage','audioMessage','contactMessage','locationMessage','image','video','audio','sticker','document']
  m.isMedia = mediaTypes.includes(m.type)
  m.quoted = m.quoted || (m.message?.extendedTextMessage?.contextInfo?.quotedMessage ? {
    id: m.message.extendedTextMessage.contextInfo.stanzaId,
    participant: m.message.extendedTextMessage.contextInfo.participant,
    text: m.message.extendedTextMessage.contextInfo.quotedMessage && Object.values(m.message.extendedTextMessage.contextInfo.quotedMessage)[0]?.conversation ? Object.values(m.message.extendedTextMessage.contextInfo.quotedMessage)[0].conversation : ''
  } : null)
  const me = sock.user?.id || ''
  const owners = Array.isArray(config?.owners) ? config.owners : (config?.owner ? [config.owner] : [])
  m.isOwner = owners.includes(m.sender) || owners.includes(m.participant) || owners.includes(me)
  m.isCreator = m.isOwner
  let premiums = []
  try { premiums = (db && typeof db.get === 'function') ? (db.get('premium') || []) : [] } catch {}
  m.isPremium = premiums.includes(m.sender)
  m.isMember = false
  m.isAdminsGroup = false
  if (m.isGroup) {
    const meta = await sock.groupMetadata(m.chat).catch(() => null)
    const participants = meta?.participants || []
    const p = participants.find(x => (x.id === m.sender || x.jid === m.sender || x === m.sender))
    m.isMember = !!p
    const adminFlag = p && (p.admin || p.isAdmin || p.isSuperAdmin || p.role === 'admin' || p.role === 'superadmin')
    m.isAdminsGroup = !!adminFlag
  }
  m.isSender = id => m.sender === id
  m.isUsername = name => (m.pushName || '').toLowerCase() === name.toLowerCase()
  if (m.isPrefix && m.command) console.log(`[COMMAND] ${m.sender} ${m.chat} ${m.command} ${m.args.join(' ')}`)
  const plugins = await loadPlug()
  for (const plugin of plugins) {
    try {
      const cmds = Array.isArray(plugin.cmd) ? plugin.cmd.map(v => v.toLowerCase()) : [String(plugin.cmd || '').toLowerCase()]
      if (plugin.prefix) {
        if (!m.isPrefix) continue
        if (cmds.includes(m.command)) {
          await plugin.run(sock, m)
        }
      } else {
        const bodyLower = (m.text || '').toLowerCase()
        for (const c of cmds) {
          if (!c) continue
          if (bodyLower === c || bodyLower.startsWith(c + ' ')) {
            await plugin.run(sock, m)
            break
          }
        }
      }
    } catch (e) {
      console.error(`Earror plugin ${plugin.name || 'unknown'}:`, e)
    }
  }
  if (!m.isPrefix || !m.command) return
  switch (m.command) {
    case 'ping':
      await sock.sendMessage(m.chat, { text: 'Pong' })
      break
    case 'menu':
      await sock.sendMessage(m.chat, { text: 'Test menu woelaj' })
      break
    default:
      break
  }
}
