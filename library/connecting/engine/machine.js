import baileys from '@whiskeysockets/baileys'
import { makeInMemoryStore, jidDecode } from baileys
import Pino from 'pino'
import fetch from 'node-fetch'

export const fetchJson = async (url, options) => {
  const res = await fetch(url, options)
  return await res.json()
}

export const getBuffer = async (url, options) => {
  const res = await fetch(url, options)
  const buffer = await res.arrayBuffer()
  return Buffer.from(buffer)
}

export const store = makeInMemoryStore({
  logger: Pino({ level: 'fatal' }).child({ level: 'fatal' })
})

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const decodeJid = jid => {
  if (!jid) return jid
  if (/:\d+@/gi.test(jid)) {
    const decode = jidDecode(jid) || {}
    return decode.user && decode.server ? decode.user + '@' + decode.server : jid
  } else {
    return jid
  }
}
