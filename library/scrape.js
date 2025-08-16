
require('./setting');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const axios = require('axios');
const os = require('os');
const cheerio = require('cheerio');
const ffmpeg =require('fluent-ffmpeg');
const crypto = require('crypto');
const fetch = require('node-fetch');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const util = require('util');
const FileType = require('file-type');
const archiver = require('archiver');
const BodyForm = require('form-data');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const { Client } = require('ssh2');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { spawn, exec, execSync } = require('child_process');
const { smsg, formatSize, fetchJson, getRandom, sleep, getBuffer, isUrl, clockstring, runtime, tanggal, parseMention, } = require('./lib/myfunction');
const { pinterest } = require('./lib/scrape');
const { loadDB, saveDB } = require('./lib/gamedb/lowdb')
const similarity = require('similarity')
function isSimilar(jawaban, input, threshold = 0.72) {
  return similarity(jawaban.toLowerCase(), input.toLowerCase()) >= threshold
}
const {
  makeWASocket,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  useSingleFileAuthState,
  fetchLatestBaileysVersion,
  fetchLatestBaileysVersionWithFallback,
  generateWAMessageFromContent,
  generateForwardMessageContent,
  generateMessageID,
  prepareWAMessageMedia,
  prepareWAMessageContent,
  downloadMediaMessage,
  downloadContentFromMessage,
  downloadAndSaveMediaMessage,
  getAggregateVotesInPollMessage,
  getDevice,
  getMessageContent,
  getContentType,
  normalizeMessageContent,
  extractMessageContent,
  extractImageThumb,
  generateWAMessage,
  generateWAMessageContent,
  generateWAMessageFromContentProto,
  relayMessage,
  areJidsSameUser,
  isJidBroadcast,
  isJidGroup,
  isJidUser,
  proto,
  Browsers,
  PHONENUMBER_MCC,
  jidDecode,
  jidEncode,
  useHttpClient,
  WA_DEFAULT_EPHEMERAL,
  makeWALegacySocket,
  PHONENUMBER_MCC_COUNTRY,
  getStream,
  jidNormalizedUser,
  processMessageStubType,
  getDeviceFromJid,
  downloadMediaMessageBuffer
} = require('@whiskeysockets/baileys');

module.exports = rullz = async (rullz, m, chatUpdate, store) => {
  try {
    const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '.';const budy = (typeof m.text == 'string' ? m.text : '.');
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.';
const from = m.key.remoteJid;
const isCmd = body.startsWith(prefix);
const isPc = m.chat.endsWith('@s.whatsapp.net');
const isGroup = m.chat.endsWith("@g.us");
const command = isCmd ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : body.trim().split(/ +/).shift().toLowerCase();
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid;
const sender2 = sender.replace(/(@s\.whatsapp\.net|@g\.us|@c\.us|@broadcast|@jid\.whatsapp\.net)/g, '');
const args = body.trim().split(/ +/).slice(1);
const senderNumber = sender.split('@')[0];
const pushname = m.pushName || "No Name";
const botNumber = await rullz.decodeJid(rullz.user.id);
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = /image/.test(mime)
const groupMetadata = m.isGroup ? await rullz.groupMetadata(m.chat).catch(e => {}) : '';
const groupMetadata2 = m.isGroup ? await rullz.groupMetadata(m.chat).catch(_ => null) : null;
const groupName = groupMetadata2?.subject || '';
const participants = m.isGroup ? await groupMetadata.participants : '';
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : '';
const groupOwner = m.isGroup ? groupMetadata.owner : '';
const groupMembers = m.isGroup ? groupMetadata.participants : '';
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const qtoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`,
...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: {
"productMessage": { "product": { "productImage": { "mimetype": "image/jpeg",
"jpegThumbnail": "", }, "title": `Fuqi - Botz`,
"description": null, "currencyCode": "IDR", "priceAmount1000": "10000000000",
"retailerId": `WhatsApp Bot By rullzFuqi`,
"productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}};
const fmatta = {
      key: {
        fromMe: false,
        participant: "13135550002@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        orderMessage: {
          orderId: "2009",
          thumbnail: global.reply,
          itemCount: "9741",
          status: "INQUIRY",
          surface: "CATALOG",
          message: "hI",
          token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
      },
      contextInfo: {
        mentionedJid: ["120363369514105242@s.whatsapp.net"],
        forwardingScore: 999,
        isForwarded: true
      }
    };
const ftroli = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast"
  }, message: { orderMessage: { orderId: "9999999", itemCount: "9999999", status: "INQUIRY", surface: "CATALOG", message: `Sender: ${sender2}\nCommand: .${command}`, token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" }, }, }
const fkontak = { key: { participant: `0@s.whatsapp.net`, ...(botNumber ? { remoteJid: `status@broadcast` 
} : {})}, message: { 'contactMessage': {image: global.menu, 'displayName': `${global.namaowner}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6283892787563:+62 8389 2787 563\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, sendEphemeral: true }}};
const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Powered By ${global.namaowner}`,jpegThumbnail: ""}}};
const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Powered By ${global.namaowner}`,jpegThumbnail: ""}}};
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":9999999,"ptt": "true"}} };
const runtime = (seconds) => {
  const pad = (s) => String(s).padStart(2, '0');
  const d = Math.floor(seconds / 86400);
  const h = Math.floor(seconds % 86400 / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 60);
  return `${d > 0 ? `${d} hari, ` : ''}${pad(h)}:${pad(m)}:${pad(s)}`;
};

const totalFitur = () => {
  let filePath = path.join(__dirname, './rullz.js');
  let content = fs.readFileSync(filePath, 'utf-8');
  let matches = content.match(/case ['"`][^'"`]+['"`]/g);
  return matches ? matches.length : 0;
};
function getRandom(ext = '') {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
}

const dbowner = fs.readFileSync('./lib/database/owner.json');
const dbpremium = fs.readFileSync('./lib/database/premium.json');
const dbmurbug = fs.readFileSync('./lib/database/murbug.json');
const dbseller = fs.readFileSync('./lib/database/seller.json');
const dbsellersubdo = fs.readFileSync('./lib/database/sellersubdo.json');

const isOwner = dbowner.includes(m.sender);
const isMurbug = dbmurbug.includes(m.sender); 
const isPrem = dbpremium.includes(m.sender);
const isSeller = dbseller.includes(m.sender);
const isSubdo = dbsellersubdo.includes(m.sender);

function msToTime(duration) {
  if (duration <= 0) return 'Waktu habis'
  let seconds = Math.floor((duration / 1000) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  let days = Math.floor(duration / (1000 * 60 * 60 * 24))
  let res = []
  if (days) res.push(`${days} hari`)
  if (hours) res.push(`${hours} jam`)
  if (minutes) res.push(`${minutes} menit`)
  if (seconds) res.push(`${seconds} detik`)
  return res.join(' ')
}

function status(sender) {
  var nomor = sender.replace(/[^0-9]/g, '')
  if (nomor === '6283892787563') return 'Creator'
  if (dbowner.includes(nomor)) return 'Owner'
  if (dbpremium.includes(nomor)) return 'Premium'
  if (dbmurbug.includes(nomor)) return 'Premium'
  if (dbseller.includes(nomor)) return 'Premium'
  return 'User Biasa'
}

const filePath = {
  owner: "./lib/database/owner.json",
  murbug: "./lib/database/murbug.json",
  premium: "./lib/database/premium.json",
  seller: "./lib/database/seller.json",
  sellersubdo: "./lib/database/sellersubdo.json",
};

/// ======== HANDLER GAME ARC ========
async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			let form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}
function webp2mp4File(path) {
	return new Promise((resolve, reject) => {
		 let form = new BodyForm()
		 form.append('new-image-url', '')
		 form.append('new-image', fs.createReadStream(path))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/webp-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  let bodyFormThen = new BodyForm()
			  let $ = cheerio.load(data)
			  let file = $('input[name="file"]').attr('value')
			  bodyFormThen.append('file', file)
			  bodyFormThen.append('convert', "Convert WebP to MP4!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/webp-to-mp4/' + file,
				   data: bodyFormThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
				   resolve({
						status: true,
						message: "Created By MRHRTZ",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}

function similarity(s1, s2) {
  const longer = s1.length > s2.length ? s1 : s2
  const shorter = s1.length > s2.length ? s2 : s1
  const longerLength = longer.length
  if (longerLength === 0) return 1.0
  return (longerLength - editDistance(longer, shorter)) / longerLength
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase()
  s2 = s2.toLowerCase()

  const costs = Array(s2.length + 1).fill(0)
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0)
        costs[j] = j
      else if (j > 0) {
        let newValue = costs[j - 1]
        if (s1[i - 1] !== s2[j - 1])
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1
        costs[j - 1] = lastValue
        lastValue = newValue
      }
    }
    if (i > 0) costs[s2.length] = lastValue
  }
  return costs[s2.length]
}


try {
  let db = loadDB()
  const gameDbs = [
    'tebakgambar', 'tebakkata', 'tebakbendera',
    'tebaktebakan', 'susunkata', 'tekateki', 'tebaklirik'
  ]
  gameDbs.forEach(namadb => {
    if (!db[namadb]) db[namadb] = []
  })
  let sesi = null
  for (const namadb of gameDbs) {
    sesi = db[namadb].find(v => v.id === m.chat)
    if (sesi) break
  }
  if (sesi && m.quoted && m.quoted.id && m.quoted.isBaileys === true) {
    let jawabanBenar = sesi.jawaban.toLowerCase().trim()
    let jawabanUser = m.body.toLowerCase().trim()
    if (jawabanUser === jawabanBenar || similarity(jawabanUser, jawabanBenar) >= 0.72) {
      for (const namadb of gameDbs) {
        db[namadb] = db[namadb].filter(v => v.id !== m.chat)
      }
      saveDB(db)
      await rullz.sendMessage(m.chat, {
        text: `✅ *Jawaban benar!*\n🧠 Dijawab oleh: @${m.sender.split('@')[0]}\n\nJawaban: *${jawabanBenar.toUpperCase()}*`,
        mentions: [m.sender],
      }, { quoted: qtoko })
    } else {
      await rullz.sendMessage(m.chat, {
        react: { text: '❌', key: m.key }
      })
    }

    return
  }
} catch (e) {
  console.log('❌ ERROR CATCH:', e)
}

/// AUTO TYPING
if (global.autotyping) {
  if (command) {
    rullz.sendPresenceUpdate("composing", from)
  }
}

/*
if (m.isGroup && global.antibot === true) {
  const fs = require('fs')
  const dbPath = './lib/database/group.json'
  
  if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify({ antibot: {} }, null, 2))

  let groupDb = JSON.parse(fs.readFileSync(dbPath))
  if (!groupDb.antibot[m.chat]) groupDb.antibot[m.chat] = {}
  if (!groupDb.antibot[m.chat][m.sender]) groupDb.antibot[m.chat][m.sender] = 0

  // Ciri pesan mencurigakan
  let isAdReply = m.message?.extendedTextMessage?.contextInfo?.externalAdReply != null
  let isButton = m.message?.buttonsMessage || m.message?.templateMessage || m.message?.buttonsResponseMessage
  let isQuoted = m.quoted || m.message?.extendedTextMessage?.contextInfo?.quotedMessage
  let remoteJid = m.message?.extendedTextMessage?.contextInfo?.remoteJid
  let isNonGroupRemote = remoteJid && remoteJid !== m.chat && !remoteJid.endsWith('@g.us') // misal: status@broadcast
  let participant = m.key?.participant || m.sender
  let isZeroParticipant = participant === '0@s.whatsapp.net'

  // Deteksi kecurigaan sebagai bot
  let isBotLike = isAdReply || isButton || isQuoted || isNonGroupRemote || isZeroParticipant

  // Hindari balas pesan sendiri atau user biasa
  if (m.key?.fromMe || !isBotLike) return

  groupDb.antibot[m.chat][m.sender] += 1
  let count = groupDb.antibot[m.chat][m.sender]
  fs.writeFileSync(dbPath, JSON.stringify(groupDb, null, 2))

  if (count === 1) {
    await rullz.sendMessage(m.chat, {
      text: `⚠️ *[1/3]* Matikan Bot-mu sebelum kamu di-kick!`
    }, { quoted: m })
  } else if (count === 2) {
    await rullz.sendMessage(m.chat, {
      text: `⚠️ *[2/3]* Kesempatan terakhir! Bot terdeteksi.`
    }, { quoted: m })
  } else if (count >= 3) {
    if (isBotAdmins) {
      await rullz.sendMessage(m.chat, {
        text: `⛔ *[3/3]* Bot terdeteksi dan telah dikeluarkan.`
      })
      await rullz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
      delete groupDb.antibot[m.chat][m.sender]
      fs.writeFileSync(dbPath, JSON.stringify(groupDb, null, 2))
    }
  }
*/

/// ===== ANTI PROMOSI =====
if (m.isGroup && global.antipromosi === true) {
  let katanya = [
    "sell", "buy", "jual", "beli", "panel", "pterodactyl", "vps", "ex", "mc", "pm", "minat",
    "funcbug", "scbug", "tawar", "hart", "nego", "jasa", "suntik", "rege", "hs", "market",
    "adminch", "wts", "stock", "dana", "gopay", "ovo", "qris", "trade", "mm", "dm", "harting",
    "offer", "pet", "store", "lv", "level", "fee", "stok", "ragu", "note", "php", "take", "skip",
    "sold", "need", "jashare", "bokep", "sensor", "uncheck", "gacor", "fruit", "pet", "queen", "bee", "qb", "dragon", "fly", "df", "fox", "kitsune", "yeti", "buddha", "joki", "meteor", "matel", "mamba", "vault", "sg", "gurun", "pasir", "laku", "scam", "pushkontak", "testi", "owl", "candy", "blossom", "polar", "moon", "snail", "grey", "fg", "max", "age", "isian", "square", "springkler", "godly", "ttk", "bounty", "sheckless"
  ]
  if (isOwner) return
  let teks = m.text.toLowerCase()
  let isAntipromosi = katanya.some(kata => teks.includes(kata))
  if (isAntipromosi && isBotAdmins && m.key?.id) {
    let deletTarget = m.key.participant || m.sender
    await sleep(1000)
    await rullz.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: deletTarget
      }
    })
  }
}

/// ===== ANTI TOXIC KHUSUS GRUP =====
if (m.isGroup && global.antitoxic === true && m.text) {
  let toksik = [
    "anjing", "babi", "monyet", "bangsat", "asu", "memek", "ajg", "anjng", "anji", "jing", "asw",
    "pler", "peler", "pepek", "ppk", "fuck", "ngentot", "ngentod", "ngen", "mmk", "bacot", "bct",
    "bgst", "dngo", "dongo", "ireng", "nigga", "nigger", "negro", "jembud", "jembut", "jmbud",
    "jmbut", "semvak", "kont", "kontol", "kntol", "kontl", "jomok", "homok", "tolol", "tlol", "bokep", "bkp", "bokef", "hytam"
  ]
  if (isOwner) return
  let teks = m.text.toLowerCase()
  let isToxic = toksik.some(kata => teks.includes(kata))
  if (isToxic && isBotAdmins && m.key?.id) {
    let deletTarget = m.key.participant || m.sender
    m.reply("*Gaboleh Toxic*")
    await sleep(1000)
    await rullz.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: deletTarget
      }
    })
  }
}
/// ===== ANTI LINK =====
if (m.isGroup && global.antilink === true) {
  if(isOwner) return
  const linkRegex = /(https?:\/\/[^\s]+)/gi;
  const isLink = linkRegex.test(m.text);
  const isBackWord = /back/i.test(m.text);
  if (isLink && !isBackWord && !isOwner && !isAdmins && isBotAdmins && !m.fromMe) {
    try {
      const gclink = `https://chat.whatsapp.com/` + await rullz.groupInviteCode(m.chat);
      const isLinkThisGc = new RegExp(gclink.replace(/\//g, "\\/"), 'i').test(m.text);
      if (isLinkThisGc) return;
      const delet = m.key.participant || m.sender;
      const bang = m.key.id;
      await rullz.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: bang,
          participant: delet
        }
      });
      await sleep(1000);
    } catch (e) {
      console.error("Antilink error:", e);
    }
  }
}

const xample = (teks) => {
  return `*Format Salah*\n${prefix + command} ${teks}`
}

const xreply = (teks) => {
rullz.sendMessage(m.chat, { 
  text: teks, 
  contextInfo: {
    mentionedJid: [m.sender],
   externalAdReply: {
     title: global.namabot,
     body: `© Powered By ${global.namaowner}`,
     thumbnail: global.reply,
     mediaType: 1,
     renderLargerThumbnail: false,
   }
 }
}, { quoted: ftroli })
};


if (command) {
  console.log(`
${chalk.bgHex('#2b2d31').hex('#7289da').bold(`  Matta Crasher  `)} ${chalk.hex('#43b581')('◈')}
${chalk.hex('#ff73fa')('╭───────────────────────────────')}
${chalk.hex('#43b581').bold('│')} ${chalk.bgHex('#43b581').hex('#ffffff').bold(' 📩 NEW MESSAGE ')} 
${chalk.hex('#43b581').bold('│')} ${chalk.hex('#ffffff')(m.body || m.mtype)}
${chalk.hex('#43b581').bold('│')}
${chalk.hex('#43b581').bold('│')} ${chalk.bgHex('#7289da').hex('#ffffff').bold(' 👤 SENDER ')} 
${chalk.hex('#43b581').bold('│')} ${chalk.hex('#ffffff').bold(m.sender.split('@')[0])}
${chalk.hex('#43b581').bold('│')} ${chalk.hex('#99aab5')(m.sender)}
${chalk.hex('#43b581').bold('│')}
${chalk.hex('#43b581').bold('│')} ${chalk.bgHex('#f04747').hex('#ffffff').bold(` ${m.isGroup ? '👥 GROUP CHAT' : '👤 PRIVATE CHAT'} `)}
${chalk.hex('#43b581').bold('│')} ${chalk.hex('#99aab5')(m.chat)}
${chalk.hex('#43b581').bold('│')}
${chalk.hex('#43b581').bold('│')} ${chalk.bgHex('#ff73fa').hex('#ffffff').bold(' ⚡ COMMAND ')} 
${chalk.hex('#43b581').bold('│')} ${chalk.hex('#ffffff').bold(command)}
${chalk.hex('#ff73fa')('╰───────────────────────────────')}
`);
}

switch (command) {
case 'mani': case 'fuqi': case 'menu': case 'rullz': {
  await rullz.sendMessage(from, {react: {text: "⚡", key: m.key}})
  let mani = `ʜᴀɪ 👋 @${m.sender.split("@")[0]}\nᴘᴇʀᴋᴇɴᴀʟᴋᴀɴ sᴀʏᴀ ᴀᴅᴀʟᴀʜ *ꊰ꒤ꆰ꒐ -ꂵ꒤꒒꓄꒐ ꒯ꏂ꒦꒐ꉔꏂ*. ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴀsᴀʟᴀʜ ᴀɴᴅᴀ ᴅᴇɴɢᴀɴ ғɪᴛᴜʀ - ғɪᴛᴜʀ ᴋᴇʀᴇɴ. sɪʟᴀʜᴋᴀɴ ᴋʟɪᴋ ᴛᴏᴍʙᴏʟ ᴅɪʙᴀᴡᴀʜ ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ғɪᴛᴜʀ - ғɪᴛᴜʀ ʙᴏᴛ

「 *ɪɴғᴏʀᴍᴀᴛɪᴏɴ* 」
「☓」 ʙᴏᴛ ɴᴀᴍᴇ : ${global.namabot}
「☓」 ᴠᴇʀsɪᴏɴ : ꒦2
「☓」 ᴄʀᴇᴀᴛᴏʀ : ꋪᴜʟʟᴢ
「☓」 ᴜsᴇʀɴᴀᴍᴇ : ${pushname}
「☓」 sᴛᴀᴛᴜs : ${status(m.sender)}`
rullz.sendMessage(m.chat, {
  image: global.menu,
  caption: mani,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
   externalAdReply: {
     title: `Hai Kak ${pushname}`,
     body: `${runtime(process.uptime())}`,
     thumbnail: global.menu,
     mediaType: 1,
     renderLargerThumbnail: true,
     showAdAttribution: true,
   },
  },
  buttons: [
    {
      buttonId: ".script",
      buttonText: { displayText: "𒈒 ɢᴇᴛ sᴄʀɪᴘᴛ" },
      type: 1,
    },
    {
      buttonId: ".developerr",
      buttonText: { displayText: "𒈒 ᴅᴇᴠᴇʟᴏᴘᴇʀ" },
      type:1,
    },
    {
      buttonId: ".tqto",
      buttonText: { displayText: "𒈒 ᴛʜᴀɴᴋs ᴛᴏ" },
      type: 1,
    },
    {
      buttonId: "action",
      buttonText: { displayText: "ini pesan interactive meta" },
      type: 4,
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "🔎 ʟɪsᴛ ᴍᴇɴᴜ",
          sections: [
            {
              title: "Select The Menu",
              highlight_label: "Recomended",
              rows: [
                {
                  header: "🌎 All Menu",
                  title: "Powered By ꋪᴜʟʟᴢ",
                  id: ".menuall",
                  description: "Menampilkan Semua Menu"
                },
                {
                  header: "↔️ Slide Menu",
                  title: "Powered By ꋪᴜʟʟᴢ",
                  id: ".slidemenu",
                  description: "Menampilkan Menu Slide"
                },
                {
                  header: "📣 Report Bug",
                  title: "Powered By ꋪᴜʟʟᴢ",
                  id: ".reportbug",
                  description: "Menampilkan Report Bug"
                },
                {
                  header: "🤖 Bot Information",
                  title: "Powered By ꋪᴜʟʟᴢ",
                  id: ".botinfo",
                  description: "Menampilkan Informasi Bot"
                  },
                 ],
               },
             ],
          }),
        },
      },
    ],
    headerType: 4,
    viewOnce: false
}, { quoted: fmatta });
}
break;
case 'botinfo': {
  let mani = `
【「 *ʙᴏᴛ ɪɴғᴏʀᴍᴀᴛɪᴏɴ* 」】
「☓」ʙᴏᴛ ɴᴀᴍᴇ : ${global.namabot}
「☓」ʙᴏᴛ ᴠᴇʀsɪᴏɴ : ꒦2
「☓」ʙᴏᴛ ᴄʀᴇᴀᴛᴏʀ : ꋪᴜʟʟᴢ
「☓」ʙᴏᴛ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
「☓」ᴛᴏᴛᴀʟʟʏ ғᴇᴀᴛᴜʀᴇ : ${totalFitur()}
「☓」ᴛʏᴘᴇ ᴄᴍᴅ : Case & Commonjs
「☓」ᴛʏᴘᴇ : JavaScript
「☓」sᴛᴀᴛᴜs : ${rullz.public ? 'Public' : 'Self'}

sᴄʀɪᴘᴛ ɪɴɪ ᴅɪʙᴜᴀᴛ ᴏʟᴇʜ ꋪᴜʟʟᴢ ᴅᴇᴠ ᴅᴇɴɢᴀɴ ᴄᴏɴᴛʀɪʙᴜᴛᴏʀ ʟᴀɪɴɴʏᴀ. ʜᴀʀᴀᴘ ᴊᴀɴɢᴀɴ ʀᴇɴᴀᴍᴇ ᴀᴛᴀᴜ ᴅᴇᴄᴏᴅᴇ sᴄʀɪᴘᴛ ɪɴɪ ᴛᴀɴᴘᴀ ɪᴢɪɴ. 

「 ᴛʜᴀɴᴋs ᴛᴏ 」
- Simple - ʙᴏᴛ
-> ᴍᴇᴍʙᴇʀɪ ᴋᴏᴅᴇ sᴇᴘᴇʀᴛɪ ғᴜɴᴄᴛɪᴏɴ ғᴜɴɢsɪ sᴇɴᴅᴍᴇssᴀɢᴇ sᴇɴᴅ sᴛɪᴄᴋᴇʀ sᴇɴᴅ ғɪʟᴇ ᴅʟʟ. ᴊᴜɢᴀ ᴍᴇᴍʙᴇʀɪ ᴘʀᴇғᴇʀᴇɴsɪ ᴜɴᴛᴜᴋ ʙᴏᴛ sᴀʏᴀ.`
  await rullz.sendMessage(m.chat, {
    caption: mani,
    image: global.menu,
    footer: "-> Thanks",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363390077756085@newsletter',
        newsletterName: global.namach,
        serverMessageId: -1
      },
     externalAdReply: {
       title: "=> Bot Information ⚙️",
       body: `${runtime(process.uptime())}`,
       thumbnail: global.reply,
       showAdAttribution: true
     },
    },
    mediaType: 1
  }, { quoted: qtoko })
}
break;
case 'developerr': {
  let name = 'ꋪᴜʟʟᴢ' // ubah sesuai nama yang kamu mau
  let number = '6283892787563'
  let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;type=CELL;type=VOICE;waid=${number}:${number}
END:VCARD
`.trim()
  let msg = {
    contacts: {
      displayName: name,
      contacts: [{
        displayName: name,
        vcard
      }]
    },
    contextInfo: {
      externalAdReply: {
        title: 'Contact Developer 🔎',
        body: '=> My Creator ꋪᴜʟʟᴢ',
        thumbnail: global.menu,
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true
      }
    }
  }
  rullz.sendMessage(m.chat, msg, { quoted: qtoko })
}
break;
case 'getsc': case 'sc': case 'script': case 'fuqimd': {
  let mani = `
「 *sᴄʀɪᴘᴛ ғᴜǫɪ - ᴍᴅ* 」

*ɪɴғᴏʀᴍᴀᴛɪᴏɴ*
- sᴇᴄᴜʀɪᴛʏ ᴅʙ ᴏɴ
- ᴘᴀssᴡᴏʀᴅ ᴏɴ

「 *sᴄʀɪᴘᴛ* 」
- 10K 
ɴᴏ ᴇɴᴄ ғᴜʟʟ ᴀᴄᴄᴇs ғʀᴇᴇ ᴍᴏᴅᴇ ᴇɴᴄʀʏᴘᴛ

ᴄʜᴀᴛ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴜɴᴛᴜᴋ ʙᴜʏ sᴄʀɪᴘᴛ`
 rullz.relayMessage(m.chat,{
   requestPaymentMessage: {
     currencyCodeIso4217: 'IDR',
     amount1000: 10000000,
     requestFrom: m.sender,
     noteMessage: {
       extendedTextMessage: {
         text: mani,
         contextInfo: {
           externalAdReply: {
             showAdAttribution: true
           }
         }
       }
     }
   }
 }, {})
await sleep(2000)}
break;
case 'fuqiall': case 'menuall': case 'allmenu': {
  await rullz.sendMessage(from, {react: {text: "⚡", key: m.key}})
  let mani = `
ʜᴀɪ 👋 @${m.sender.split("@")[0]}\nᴘᴇʀᴋᴇɴᴀʟᴋᴀɴ sᴀʏᴀ ᴀᴅᴀʟᴀʜ *ꊰ꒤ꆰ꒐ -ꂵ꒤꒒꓄꒐ ꒯ꏂ꒦꒐ꉔꏂ*. ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴀsᴀʟᴀʜ ᴀɴᴅᴀ ᴅᴇɴɢᴀɴ ғɪᴛᴜʀ - ғɪᴛᴜʀ ᴋᴇʀᴇɴ. sɪʟᴀʜᴋᴀɴ ᴋʟɪᴋ ᴛᴏᴍʙᴏʟ ᴅɪʙᴀᴡᴀʜ ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ғɪᴛᴜʀ - ғɪᴛᴜʀ ʙᴏᴛ

「 *ɪɴғᴏʀᴍᴀᴛɪᴏɴ* 」
「☓」 ʙᴏᴛ ɴᴀᴍᴇ : ${global.namabot}
「☓」 ᴠᴇʀsɪᴏɴ : ꒦2
「☓」 ᴄʀᴇᴀᴛᴏʀ : ꋪᴜʟʟᴢ
「☓」 ᴜsᴇʀɴᴀᴍᴇ : ${pushname}
「☓」 sᴛᴀᴛᴜs : ${status(m.sender)}


▣⏤⪨「 *ᴀɪ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」ɢᴘᴛ-40
「☓」ᴅᴇᴇᴘsᴇᴇᴋ
「☓」ʟʟᴀᴍᴀ-ᴀɪ
「☓」ᴀɪ
「☓」ᴍᴜsʟɪᴍ-ᴀɪ

▣⏤⪨「 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」ᴀᴅᴅᴏᴡɴᴇʀ
「☓」ᴀᴅᴅᴘʀᴇᴍɪᴜᴍ
「☓」ᴀᴅᴅsᴇʟʟᴇʀ
「☓」ᴀᴅᴅᴍᴜʀʙᴜɢ
「☓」ᴀᴅᴅsᴇʟʟsᴜʙᴅᴏ
「☓」ᴅᴇʟᴏᴡɴᴇʀ
「☓」ᴅᴇʟᴘʀᴇᴍɪᴜᴍ
「☓」ᴅᴇʟsᴇʟʟᴇʀ
「☓」ᴅᴇʟᴍᴜʀʙᴜɢ
「☓」ᴅᴇʟsᴇʟsᴜʙᴅᴏ
「☓」sᴇʟғ
「☓」ᴘᴜʙʟɪᴄ
「☓」ᴀɴᴛɪʟɪɴᴋ 
「☓」ᴀɴᴛɪᴘʀᴏᴍᴏsɪ
「☓」ᴀᴜᴛᴏʀᴇᴀᴅ
「☓」ᴀᴜᴛᴏᴛʏᴘɪɴɢ
「☓」ᴀᴅᴅᴄᴀsᴇ
「☓」ᴅᴇʟᴄᴀsᴇ
「☓」ʙᴀᴄᴋᴜᴘsᴇsɪ

▣⏤⪨「 *ᴛᴏᴏʟs ᴍᴇɴᴜ* 」⪩⏤▣
「☓」sᴍᴇᴍᴇ
「☓」ssᴡᴇʙ
「☓」ᴛᴏʜᴅ
「☓」ᴛᴏɪᴍɢ
「☓」ᴛᴏᴠɪᴅ
「☓」ᴛᴏᴜʀʟ
「☓」sᴛɪᴄᴋᴇʀ
「☓」ᴡᴀᴛᴇʀᴍᴀʀᴋ
「☓」ᴇɴᴄʀʏᴘᴛ
「☓」ʀᴠᴏ
「☓」ʙʀᴀᴛ
「☓」ǫᴄ
「☓」ʙʀᴀᴛᴠɪᴅ

▣⏤⪨「 *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」ʏᴏᴜᴛᴜʙᴇ
「☓」ᴛɪᴋᴛᴏᴋ
「☓」ɪɢ
「☓」ғʙ
「☓」ᴍᴇᴅɪᴀғɪʀᴇ
「☓」ɢɪᴛᴄʟᴏɴᴇ
「☓」sᴘᴏᴛɪғʏ
「☓」ɴᴇᴋᴏᴘᴏɪ

▣⏤⪨「 *ғᴜɴ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
「☓」ᴛᴇʙᴀᴋᴀɴɪᴍᴇ
「☓」ᴛᴇʙᴀᴋɢᴀᴍᴇ
「☓」ᴛᴇʙᴀᴋᴍʟ
「☓」ᴛᴇʙᴀᴋғғ
「☓」ᴛᴇʙᴀᴋʀᴏʙʟᴏx
「☓」ᴄᴇᴋᴋʜᴏᴅᴀᴍ
「☓」ᴄᴇᴋᴅᴏɴɢᴏ
「☓」ᴄᴇᴋsᴇᴘᴜʜ
「☓」ᴄᴇᴋᴡɪʙᴜ
「☓」ᴄᴇᴋɢɪʟᴀ
「☓」ᴄᴇᴋᴄᴀʙᴏᴇʟ
「☓」ᴄᴇᴋᴘɪɴᴛᴀʀ
「☓」ᴀᴘᴀᴋᴀʜ
「☓」ᴅɪᴍᴀɴᴀᴋᴀʜ
「☓」ᴋᴀᴘᴀɴᴋᴀʜ
「☓」sɪᴀᴘᴀᴋᴀʜ

▣⏤⪨「 *sᴛᴀʟᴋᴇʀ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
「☓」ʏᴛsᴛᴀʟᴋ
「☓」ɢɪᴛʜᴜʙsᴛᴀʟᴋ
「☓」ʀᴏʙʟᴏxsᴛᴀʟᴋ
「☓」ᴍʟsᴛᴀʟᴋ
「☓」ғғsᴛᴀʟᴋ
「☓」ɴᴘᴍsᴛᴀʟᴋ
「☓」ɪɢsᴛᴀʟᴋ
「☓」ғʙsᴛᴀʟᴋ

▣⏤⪨「 *sᴇᴀʀᴄʜ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」ᴘɪɴ
「☓」ᴘʟᴀʏ
「☓」ʏᴛsᴇᴀʀᴄʜ
「☓」ɢɪᴛʜᴜʙsᴇᴀʀᴄʜ
「☓」ɴᴘᴍsᴇᴀʀᴄʜ
「☓」ɢᴏᴏɢʟᴇsᴇᴀʀᴄʜ
「☓」ɴᴇᴋᴏᴘᴏɪsᴇᴀʀᴄʜ

▣⏤⪨「 *ɴsғᴡ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」ɴsғᴡ-ᴀᴄᴄᴇs
「☓」ɴsғᴡ

▣⏤⪨「 *ᴄᴘᴀɴᴇʟ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」1ɢʙ - 10ɢʙ & ᴜɴʟɪ  ꒦1
「☓」1ɢʙ - 10ɢʙ & ᴜɴʟɪ  ꒦2
「☓」ᴄᴀᴅᴍɪɴ ꒦1 / ꒦2
「☓」ʟɪsᴛsʀᴠʀ ꒦1 / ꒦2
「☓」ʟɪsᴛᴜsʀ ꒦1 / ꒦2
「☓」ᴅᴇʟᴀᴅᴍɪɴ ꒦1 / ꒦2
「☓」ᴅᴇʟsʀᴠʀ ꒦1 / ꒦2
「☓」ᴅᴇʟᴜsʀ ꒦1 / ꒦2

▣⏤⪨「 *ʜᴏsᴛɪɴɢ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」sᴜʙᴅᴏᴍᴀɪɴ
「☓」ɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
「☓」ɪɴsᴛᴀʟʟᴛʜᴇᴍᴀ
「☓」ʀᴇsᴛᴀʀᴛᴘᴀɴᴇʟ
「☓」ᴅᴇʟᴅʀᴏᴘʟᴇᴛ
「☓」ᴄᴠᴘs
「☓」ʟɪsᴛᴅʀᴏᴘʟᴇᴛ
「☓」sɪsᴀᴅʀᴏᴘʟᴇᴛ
「☓」ᴀᴅᴅᴀᴘɪᴅᴏ
「☓」ʀᴇʙᴜɪʟᴅ

▣⏤⪨「 *ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」ɢᴇᴛᴘᴘ
「☓」ʜɪᴛᴀᴍᴋᴀɴ
「☓」ɴᴏʀᴍᴀʟᴋᴀɴ
「☓」ʙᴏᴛᴀᴋᴋᴀɴ

▣⏤⪨「 *sᴛᴏʀᴇ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」ᴅᴏɴᴇ
「☓」ғᴀɪʟ
「☓」ʀᴇғғ
「☓」ᴘᴜsʜᴋᴏɴᴛᴀᴋ
「☓」sᴀᴠᴇᴋᴏɴᴛᴀᴋ
「☓」ᴊᴘᴍ
「☓」ᴊᴘᴍʜᴛ
「☓」ᴊᴘᴍᴄʜ
「☓」ᴜᴘᴄʜ
「☓」ʟɪsᴛɪᴅᴄʜ
「☓」ᴀᴅᴅɪᴅᴄʜ
「☓」ᴅᴇʟɪᴅᴄʜ
「☓」ᴘᴀʏᴍᴇɴᴛ

▣⏤⪨「 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* 」⪩⏤▣
「☓」ᴏᴘᴇɴɢᴄ
「☓」ᴄʟᴏsᴇɢᴄ
「☓」ʟɪɴᴋɢᴄ
「☓」ʀᴇsᴇᴛʟɪɴᴋɢᴄ
「☓」ᴀᴅᴅ
「☓」ᴋɪᴄᴋ
「☓」ᴇᴠᴇɴᴛ
「☓」ʜɪᴅᴇᴛᴀɢ
「☓」ᴇᴠᴇʀʏᴏɴᴇ
「☓」ᴛᴀɢᴀʟʟ
「☓」ᴘʀᴏᴍᴏᴛᴇ
「☓」ᴅᴇᴍᴏᴛᴇ
「☓」ʟᴇᴀᴠᴇ
「☓」ᴅᴇʟ`
  rullz.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mp4',
    ptt: true
  }, { quoted: ftroli });
  await sleep(2000)
 rullz.sendMessage(m.chat,{
  video: global.vid,
  gifPlayback: true,
  caption: mani,
  contextInfo: {
    mentionedJid: [m.sender],
    isForwarded: true,
    forwardingScore: 999,
  externalAdReply: {
    title: `Hai Kak ${pushname}`,
    body: `${runtime(process.uptime())}`,
    thumbnail: global.menu,
    mediaType: 1,
    renderLargerThumbnail: true,
    showAdAttribution: true,
   },
  },
}, { quoted: fkontak })
}
break;
case 'reportbug': {
  if (!args[0]) return xreply("*Contoh Report Bug*\n.reportbug Fitur Tiktok Downloader Error")
  let masalah = args.join(" ")
  let waktu = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
  let pengirim = m.sender
  let tex = `ʜᴀɪ ᴅᴇᴠᴇʟᴏᴘᴇʀ ɢᴀɴᴛᴇɴɢ ᴀᴅᴀ ʟᴀᴘᴏʀᴀɴ ɴɪʜ 🔧

*📣 [ BUG REPORT ]*
*Masalah:* ${masalah}
*Dari:* wa.me/${pengirim.split("@")[0]}
*Waktu:* ${waktu}

Silakan klik tombol di bawah untuk menanggapi.`
  await xreply(`Feed Back Anda Terkirim Ke Developer Silahkan Tunggu Developer Notice Feed Back Anda
  
*📣 [ BUG REPORT ]*
*Masalah:* ${masalah}
*Waktu:* ${waktu}`)
  await rullz.sendMessage("6283892787563@s.whatsapp.net", {
    text: tex,
    footer: "Report Bugging",
    contextInfo: {
      mentionedJid: [pengirim],
      forwardingScore: 999,
      isForwarded: true
    },
    buttons: [
      {
        buttonId: `accbug ${pengirim}`,
        buttonText: { displayText: "✅ Terima Feedback" },
        type: 1
      },
      {
        buttonId: `undbug ${pengirim}`,
        buttonText: { displayText: "❌ Tolak Feedback" },
        type: 1
      }
    ],
    headerType: 1
  }, { quoted: qtoko })
}
  break
case 'accbug':
case 'undbug': {
  if (!isCreator) return xreply("Lu siapa? Bukan developer gua");
  let target = args[0]
  if (!target) return xreply('ID pengirim tidak valid.')
  let jid = target.includes('@s.whatsapp.net') ? target : `${target}@s.whatsapp.net`
  let message = (command === 'accbug')
    ? `erima kasih atas feedback Anda *${target}*.\nFeedback Anda diterima oleh developer. Silakan tunggu developer memperbaiki masalah tersebut.`
    : `${target}*, Maaf. Developer sedang sibuk atau memiliki kendala lain.`
  await rullz.sendMessage(jid, {
    text: message
  }, { quoted: m })
  xreply(`Feedback berhasil *${command === 'accbug' ? 'diterima' : 'ditolak'}*.\nPesan telah dikirim ke @${target.split('@')[0]}`, {
    mentions: [jid]
  })
}
break;
case 'tqto': {
  await rullz.sendMessage(m.chat, { react: { text: '👀', key: m.key } });
  let imageBuffer = (await axios.get("https://files.catbox.moe/0ewcd3.jpg", { responseType: 'arraybuffer' })).data;
  let media = await prepareWAMessageMedia({ image: imageBuffer }, { upload: rullz.waUploadToServer });

 let cards = [
    {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: "*ꋪᴜʟʟᴢ*\nThis Is Developer For *Fuqi - Multi Device*",
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "Contact",
              url: "https://wa.me/6283892787563",
              merchant_url: "https://www..com"
            })
          }
        ]
      })
    },
    {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: "*Hokma*\nThis My Friend Support Me",
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "Contact",
              url: "https://wa.me//62882008250159",
              merchant_url: "https://www..com"
            })
          }
        ]
      })
    },
    {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: "*Kynz*\nThis My Friend Who Often Support Me",
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "Contact",
              url: "https://wa.me//6282123813519",
              merchant_url: "https://www..com"
            })
          }
        ]
      })
    },
    {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: "*Dennz*\nThis Contributor For Fuqi - MD Project",
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "Contact",
              url: "https://wa.me//62882005943043",
              merchant_url: "https://www..com"
            })
          }
        ]
      })
    }
  ];

  let msg = await generateWAMessageFromContent(m.chat, {
    ephemeralMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.fromObject({
            text: "*Contributor Fuqi - Multi Device*"
          }),
          contextInfo: {
            isForwarded: true,
            forwardingScore: 999
          },
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
        })
      }
    }
  }, { userJid: m.sender, quoted: m });

  await rullz.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
case 'slidemenu': {
  await rullz.sendMessage(m.chat, { react: { text: '📚', key: m.key } });
  let imageBuffer = (await axios.get("https://files.catbox.moe/cunsw7.jpg", { responseType: 'arraybuffer' })).data;
  let media = await prepareWAMessageMedia({ image: imageBuffer }, { upload: rullz.waUploadToServer });

  let cards = [
    {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: "▣⏤⪨「 *ᴀɪ ᴍᴇɴᴜ* 」⪩⏤▣\n「☓」ɢᴘᴛ-40\n「☓」ᴅᴇᴇᴘsᴇᴇᴋ\n「☓」ʟʟᴀᴍᴀ-ᴀɪ\n「☓」ᴀɪ\n「☓」ᴍᴜsʟɪᴍ-ᴀɪ",
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
    },
    {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: "▣⏤⪨「 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 」⪩⏤▣\n「☓」ᴀᴅᴅᴏᴡɴᴇʀ\n「☓」ᴅᴇʟᴏᴡɴᴇʀ\n「☓」sᴇʟғ\n「☓」ᴘᴜʙʟɪᴄ",
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
    },
    {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: "▣⏤⪨「 *ᴛᴏᴏʟs ᴍᴇɴᴜ* 」⪩⏤▣\n「☓」sᴍᴇᴍᴇ\n「☓」ssᴡᴇʙ\n「☓」ᴛᴏʜᴅ\n「☓」ᴛᴏɪᴍɢ\n「☓」ᴛᴏᴠɪᴅ",
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
    },
    {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: "▣⏤⪨「 *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ* 」⪩⏤▣\n「☓」ʏᴏᴜᴛᴜʙᴇ\n「☓」ᴛɪᴋᴛᴏᴋ\n「☓」ɪɢ\n「☓」ғʙ",
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
    },
    {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: "▣⏤⪨「 *ғᴜɴ ᴍᴇɴᴜ* 」⪩⏤▣\n「☓」ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ\n「☓」ᴛᴇʙᴀᴋᴀɴɪᴍᴇ\n「☓」ᴛᴇʙᴀᴋɢᴀᴍᴇ",
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
    },
    {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: "▣⏤⪨「 *sᴛᴏʀᴇ ᴍᴇɴᴜ* 」⪩⏤▣\n「☓」ᴅᴏɴᴇ\n「☓」ʀᴇғғ\n「☓」ᴘᴀʏᴍᴇɴᴛ\n「☓」sᴀᴠᴇᴋᴏɴᴛᴀᴋ",
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
    }
  ];

  let msg = await generateWAMessageFromContent(m.chat, {
    ephemeralMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.fromObject({
            text: "*ꋪᴜʟʟᴢ ᴍᴇɴᴜ - sʟɪᴅᴇᴄᴀʀᴅ ᴠᴇʀ*"
          }),
          contextInfo: {
            isForwarded: true,
            forwardingScore: 999
          },
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
        })
      }
    }
  }, { userJid: m.sender, quoted: m });

  await rullz.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
case 'backupscript': {
 if (!isOwner && !isCreator) return xreply('Khusus Owner!')
 if (!args[0] || !/^\d+$/.test(args[0])) return xreply('Masukkan nomor tujuan!\nContoh: .sendsc 628xxx')
 let targetJid = args[0] + '@s.whatsapp.net'
 let zipPath = './temp/script-backup.zip'
 let sourceDir = './'
 if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath)
 await new Promise((resolve, reject) => {
 let output = fs.createWriteStream(zipPath)
 let archive = archiver('zip', { zlib: { level: 9 } })
 output.on('close', resolve)
 archive.on('error', reject)
 archive.pipe(output)
 archive.glob('**/*', {
 ignore: [
 'node_modules/**',
 'temp/**',
 '*.zip',
 '.git/**',
 'sesi/**',
 'yarn.lock'
 ]
 })
 archive.finalize()
 })
 await rullz.sendMessage(targetJid, {
 document: fs.readFileSync(zipPath),
 fileName: 'script-backup.zip',
 mimetype: 'application/zip',
 caption: '*Paket Script Fuqi - MD*'
 }, { quoted: qtoko })
 xreply(`Backup berhasil dikirim ke @${args[0]}`, { mentions: [targetJid] })
 fs.unlinkSync(zipPath)
}
 break


case 'sendscript': {
 if (!isOwner && !isCreator) return xreply('Khusus Owner!')
 if (!args[0] || !/^\d+$/.test(args[0])) return xreply('Masukkan nomor tujuan!\nContoh: .sendsc 628xxx')
 let targetJid = args[0] + '@s.whatsapp.net'
 let zipPath = './src/tmp/script-backup.zip'
 let sourceDir = './'
 if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath)
 await new Promise((resolve, reject) => {
 let output = fs.createWriteStream(zipPath)
 let archive = archiver('zip', { zlib: { level: 9 } })
 output.on('close', resolve)
 archive.on('error', reject)
 archive.pipe(output)
 archive.glob('**/*', {
 ignore: [
 'node_modules/**',
 'temp/**',
 '*.zip',
 '.git/**',
 'sesi/**',
 'yarn.lock'
 ]
 })
 archive.finalize()
 })
 await rullz.sendMessage(targetJid, {
 document: fs.readFileSync(zipPath),
 fileName: 'Fuqi - MD.zip',
 mimetype: 'application/zip',
 caption: '*Paket Script Fuqi - MD*'
 }, { quoted: qtoko })
 xreply(`Backup berhasil dikirim ke @${args[0]}`, { mentions: [targetJid] })
 fs.unlinkSync(zipPath)
}
 break
case 'addcase': {
  if (!isCreator && !isOwner) return xreply(msg.owner)
  if (!text) return xreply('Casenya Mana?')
  let FileCase = path.join(__dirname, './rullz.js')
  let caseBaru = `${text}\n`
  fs.readFile(FileCase, 'utf8', (err, data) => {
    if (err) return xreply('Gagal membaca file case.')
    let posisiInsert = data.indexOf("case 'addcase':")
    if (posisiInsert === -1) return xreply("Tidak ditemukan posisi addcase.")
    let namaCaseBaru = caseBaru.match(/case\s+'(.+?)'/)?.[1]
    if (namaCaseBaru && data.includes(`case '${namaCaseBaru}':`)) return xxreply(`Case '${namaCaseBaru}' sudah ada.`)
    let hasilBaru = data.slice(0, posisiInsert) + '\n' + caseBaru + '\n' + data.slice(posisiInsert)
    fs.writeFile(FileCase, hasilBaru, 'utf8', (err) => {
      if (err) return xreply('Gagal menyimpan case.')
      xreply(`Case '${namaCaseBaru}' berhasil ditambahkan.`)
    })
  })
}
break
case 'delcase': {
  if (!isOwner && !isCreator) return xreply(nsg.owner)
  if (!text) return xreply('Nama Case')
  let namaFile = path.join(__dirname, './rullz.js')
  let namaCase = text.trim()
  fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) return reply('Gagal membaca file case.')
    let regexCase = new RegExp(`case '${namaCase}':\\s*{[\\s\\S]*?}\\s*break`, 'g')
    if (!regexCase.test(data)) return xreply(`Case '${namaCase}' tidak ditemukan.`)
    let hasilBaru = data.replace(regexCase, '')
    fs.writeFile(namaFile, hasilBaru, 'utf8', (err) => {
      if (err) return xreply('Gagal menyimpan file case.')
      xreply(`Case '${namaCase}' berhasil dihapus.`)
    })
  })
}
break
case 'listcase': {
  if (!isCreator && !isOwner) return (msg.owner)
  let filePath = path.join(__dirname, './rullz.js')
  if (!fs.existsSync(filePath)) return xreply('File case.js tidak ditemukan.')
  let data = fs.readFileSync(filePath, 'utf8')
  let match = [...data.matchAll(/case\s+['"`](.*?)['"`]\s*:/g)]
  if (match.length === 0) return xreply('Tidak ditemukan case apapun di file.')
  let daftar = match.map((v, i) => `${i + 1}. ${v[1]}`).join('\n')
  xreply(`List Case Yang Terdeteksi:\n\n${daftar}`)
}
break
case 'getcase': {
  if (!isCreator && !isOwner) return xreply(msg.owner)
  if (!text) return xreply('Nama Case nya?')
  let namaFile = path.join(__dirname, './rullz.js')
  let namaCase = text.trim()
  fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) return xreply('Gagal membaca file case.')
    let regexCase = new RegExp(`case '${namaCase}':\\s*{[\\s\\S]*?}\\s*break`, 'g')
    let hasil = data.match(regexCase)
    if (!hasil) return xreply(`Case '${namaCase}' tidak ditemukan.`)
    let kodeCase = hasil[0].trim()
    if (kodeCase.length > 1500) {
      xreply(kodeCase.slice(0, 1500) + '\n... (truncated)')
    } else {
      xreply(kodeCase)
    }
  })
}
break
/// ========== AI ARC ============
case 'ai': {
  await rullz.sendMessage(m.chat, {react: {text: '🤖', key: m.key}})	
  let teks = text || q || m.text || ''
  if (!teks.trim()) return xreply('Masukkan pertanyaan untuk AI.')

  let url = `https://www.api.im-rerezz.xyz/api/gptturbo?message=${encodeURIComponent(teks)}`
  let res = await fetch(url)
  let json = await res.json()

  if (!json || !json.data || !json.data.response) 
    return xreply('Gagal mendapatkan respon dari AI.')
  xreply(json.data.response.toString())
}
break
case 'gpt-40': {
  await rullz.sendMessage(m.chat, {react: {text: '🤖', key: m.key}})	
  let teks = text || q || m.text || ''
  if (!teks.trim()) return xreply('Masukkan pertanyaan untuk AI.')

  let url = `https://www.api.im-rerezz.xyz/api/gptturbo?message=${encodeURIComponent(teks)}`
  let res = await fetch(url)
  let json = await res.json()

  if (!json || !json.data || !json.data.response) 
    return xreply('Gagal mendapatkan respon dari AI.')
  xreply(json.data.response.toString())
}
break
case 'deepseek': {
  await rullz.sendMessage(m.chat, {react: {text: '🤖', key: m.key}})	
  let teks = text || q || m.text || ''
  if (!teks.trim()) return xreply('Masukkan pertanyaan untuk AI.')

  let url = `https://www.api.im-rerezz.xyz/api/gptturbo?message=${encodeURIComponent(teks)}`
  let res = await fetch(url)
  let json = await res.json()

  if (!json || !json.data || !json.data.response) 
    return xreply('Gagal mendapatkan respon dari AI.')
  xreply(json.data.response.toString())
}
break
case 'muslimai': {
  await rullz.sendMessage(m.chat, {react: {text: '🤖', key: m.key}})	
  let teks = text || q || m.text || ''
  if (!teks.trim()) return xreply('Masukkan pertanyaan untuk AI.')

  let url = `https://www.api.im-rerezz.xyz/api/gptturbo?message=${encodeURIComponent(teks)}`
  let res = await fetch(url)
  let json = await res.json()

  if (!json || !json.data || !json.data.response) 
    return xreply('Gagal mendapatkan respon dari AI.')
  xreply(json.data.response.toString())
}
break
case 'llamaai': {
  await rullz.sendMessage(m.chat, {react: {text: '🤖', key: m.key}})	
  let teks = text || q || m.text || ''
  if (!teks.trim()) return xreply('Masukkan pertanyaan untuk AI.')

  let url = `https://www.api.im-rerezz.xyz/api/gptturbo?message=${encodeURIComponent(teks)}`
  let res = await fetch(url)
  let json = await res.json()

  if (!json || !json.data || !json.data.response) 
    return xreply('Gagal mendapatkan respon dari AI.')
  xreply(json.data.response.toString())
}
break
/// ========== OWNER ARC ============
case 'autotyping': {
  if (!args[0]) return xreply("*Format Salah*\n.autotyping on/off")
  if (args[0].toLowerCase() === 'on') {
    global.autotyping = true
    xreply("*AutoTyping* Sekarang Aktif")
  } else if (args[0].toLowerCase() === 'off') {
    global.autotyping = false
    xreply("*AutoTyping* Sekarang Nonaktif")
  } else {
    xreply("*Format Salah*\n.autotyping on/off")
  }
}
break
case 'autoread': {
  if (!args[0]) return xreply("*Format Salah*\n.autoread on/off")
  if (args[0].toLowerCase() === 'on') {
    global.autoread = true
    xreply("*Autoread* Sekarang Aktif")
  } else if (args[0].toLowerCase() === 'off') {
    global.autoread = false
    xreply("*Autoread* Sekarang Nonaktif")
  } else {
    xreply("*Format Salah*\n.autoread on/off")
  }
}
break
case 'cleardb': {
  if (!isOwner) return xreply(msg.owner);
  let dbFolder = path.join(__dirname, './lib/database');
  let allowedKeep = ['6283892787563@s.whatsapp.net', '6287749960767@s.whatsapp.net'];
  let files = [
    'owner.json',
    'premium.json',
    'murbug.json',
    'seller.json',
    'sellersubdo.json',
    'giveaway.json',
    'testi.json'
  ];
  let cleaned = [];
  for (let file of files) {
    let fullPath = path.join(dbFolder, file);
    if (!fs.existsSync(fullPath)) continue;
    let data = [];
    try {
      let raw = fs.readFileSync(fullPath);
      data = JSON.parse(raw);
    } catch (e) {
      console.log(`Gagal membaca ${file}:`, e);
      continue;
    }
    if (file === 'giveaway.json') {
      fs.writeFileSync(fullPath, JSON.stringify([], null, 2));
    } else {
      let filtered = data.filter(x => allowedKeep.includes(x));
      fs.writeFileSync(fullPath, JSON.stringify(filtered, null, 2));
    }
    if (file === 'testi.json') {
      fs.writeFileSync(fullPath, JSON.stringify([], null, 2));
    } else {
      let filtered = data.filter(x => allowedKeep.includes(x));
      fs.writeFileSync(fullPath, JSON.stringify(filtered, null, 2));
    }
    cleaned.push(file);
  }
  let successMsg = `*Database Dibersihkan:*\n${cleaned.map(f => '• ' + f).join('\n')}`;
  xreply(successMsg);
}
break;
case 'addowner': {
  if (!isOwner && !isCreator) return xreply(msg.owner);
  if (!text) return xreply("Nomornya Mana?");
  let userr = m.mentionedJid[0] || (text ? text.replace(/\D/g, '') + "@s.whatsapp.net" : m.quoted?.sender);
  let cek = await rullz.onWhatsApp(userr.split("@")[0]);
  if (!cek || cek.length === 0) return xreply(`Nomor ${userr.split("@")[0]} tidak terdaftar di WhatsApp`);
  let db = JSON.parse(fs.readFileSync(filePath.owner));
  if (db.includes(userr)) return xreply(`Nomor sudah jadi owner`);
  db.push(userr);
  fs.writeFileSync(filePath.owner, JSON.stringify(db, null, 2));
  xreply(`*${userr.split("@")[0]}* sekarang adalah Owner`);
}
break;
case 'delowner': {
  if (!isOwner && !isCreator) return xreply(msg.owner);
  if (!text) return xreply("Nomornya Mana?");
  let userr = m.mentionedJid[0] || (text ? text.replace(/\D/g, '') + "@s.whatsapp.net" : m.quoted?.sender);
  let db = JSON.parse(fs.readFileSync(filePath.owner));
  let index = db.indexOf(userr);
  if (index === -1) return xreply(`Nomor tidak ditemukan di daftar owner`);
  db.splice(index, 1);
  fs.writeFileSync(filePath.owner, JSON.stringify(db, null, 2));
  xreply(`*${userr.split("@")[0]}* sudah dihapus dari daftar owner`);
}
break;
case 'addmurbug': {
  if (!isOwner && !isCreator) return xreply(msg.owner);
  if (!text) return xreply("Nomornya Mana?");
  let userr = m.mentionedJid[0] || (text ? text.replace(/\D/g, '') + "@s.whatsapp.net" : m.quoted?.sender);
  let cek = await rullz.onWhatsApp(userr.split("@")[0]);
  if (!cek || cek.length === 0) return xreply(`Nomor ${userr.split("@")[0]} tidak terdaftar di WhatsApp`);
  let db = JSON.parse(fs.readFileSync(filePath.murbug));
  if (db.includes(userr)) return xreply(`Nomor sudah jadi Murbug`);
  db.push(userr);
  fs.writeFileSync(filePath.murbug, JSON.stringify(db, null, 2));
  xreply(`*${userr.split("@")[0]}* sekarang adalah Murbug`);
}
break;
case 'delmurbug': {
  if (!isOwner && !isCreator) return xreply(msg.owner);
  if (!text) return xreply("Nomornya Mana?");
  let userr = m.mentionedJid[0] || (text ? text.replace(/\D/g, '') + "@s.whatsapp.net" : m.quoted?.sender);
  let db = JSON.parse(fs.readFileSync(filePath.murbug));
  let index = db.indexOf(userr);
  if (index === -1) return xreply(`Nomor tidak ditemukan di daftar Murbug`);
  db.splice(index, 1);
  fs.writeFileSync(filePath.murbug, JSON.stringify(db, null, 2));
  xreply(`*${userr.split("@")[0]}* sudah dihapus dari daftar Murbug`);
}
break;
case 'addseller': {
  if (!isOwner && !isCreator) return xreply(msg.owner);
  if (!text) return xreply("Nomornya Mana?");
  let userr = m.mentionedJid[0] || (text ? text.replace(/\D/g, '') + "@s.whatsapp.net" : m.quoted?.sender);
  let cek = await rullz.onWhatsApp(userr.split("@")[0]);
  if (!cek || cek.length === 0) return xreply(`Nomor ${userr.split("@")[0]} tidak terdaftar di WhatsApp`);
  let db = JSON.parse(fs.readFileSync(filePath.seller));
  if (db.includes(userr)) return xreply(`Nomor sudah jadi Reseller`);
  db.push(userr);
  fs.writeFileSync(filePath.seller, JSON.stringify(db, null, 2));
  xreply(`*${userr.split("@")[0]}* sekarang adalah Reseller`);
}
break;
case 'delseller': {
  if (!isOwner && !isCreator) return xreply(msg.owner);
  if (!text) return xreply("Nomornya Mana?");
  let userr = m.mentionedJid[0] || (text ? text.replace(/\D/g, '') + "@s.whatsapp.net" : m.quoted?.sender);
  let db = JSON.parse(fs.readFileSync(filePath.seller));
  let index = db.indexOf(userr);
  if (index === -1) return xreply(`Nomor tidak ditemukan di daftar Reseller`);
  db.splice(index, 1);
  fs.writeFileSync(filePath.seller, JSON.stringify(db, null, 2));
  xreply(`*${userr.split("@")[0]}* sudah dihapus dari daftar Reseller`);
}
break;
case 'addsellsubdo': {
  if (!isOwner && !isCreator) return xreply(msg.owner);
  if (!text) return xreply("Nomornya Mana?");
  let userr = m.mentionedJid[0] || (text ? text.replace(/\D/g, '') + "@s.whatsapp.net" : m.quoted?.sender);
  let cek = await rullz.onWhatsApp(userr.split("@")[0]);
  if (!cek || cek.length === 0) return xreply(`Nomor ${userr.split("@")[0]} tidak terdaftar di WhatsApp`);
  let db = JSON.parse(fs.readFileSync(filePath.sellersubdo));
  if (db.includes(userr)) return xreply(`Nomor sudah jadi Reseller Subdomain`);
  db.push(userr);
  fs.writeFileSync(filePath.sellersubdo, JSON.stringify(db, null, 2));
  xreply(`*${userr.split("@")[0]}* sekarang adalah Reseller Subdomain`);
}
break;
case 'delsellsubdo': {
  if (!isOwner && !isCreator) return xreply(msg.owner);
  if (!text) return xreply("Nomornya Mana?");
  let userr = m.mentionedJid[0] || (text ? text.replace(/\D/g, '') + "@s.whatsapp.net" : m.quoted?.sender);
  let db = JSON.parse(fs.readFileSync(filePath.sellersubdo));
  let index = db.indexOf(userr);
  if (index === -1) return xreply(`Nomor tidak ditemukan di daftar Reseller Subdomain`);
  db.splice(index, 1);
  fs.writeFileSync(filePath.sellersubdo, JSON.stringify(db, null, 2));
  xreply(`*${userr.split("@")[0]}* sudah dihapus dari daftar Reseller Subdomain`);
}
break;
case 'addpremium':
case 'addprem': {
  if (!isOwner && !isCreator) return xreply(msg.owner);
  if (!text) return xreply("Nomornya Mana?");
  let userr = m.mentionedJid[0] || (text ? text.replace(/\D/g, '') + "@s.whatsapp.net" : m.quoted?.sender);
  let cek = await rullz.onWhatsApp(userr.split("@")[0]);
  if (!cek || cek.length === 0) return xreply(`Nomor ${userr.split("@")[0]} tidak terdaftar di WhatsApp`);
  let db = JSON.parse(fs.readFileSync(filePath.premium));
  if (db.includes(userr)) return xreply(`Nomor sudah jadi premium`);
  db.push(userr);
  fs.writeFileSync(filePath.premium, JSON.stringify(db, null, 2));
  xreply(`*${userr.split("@")[0]}* sekarang adalah user premium`);
}
break;
case 'delpremium':
case 'delprem': {
  if (!isOwner && !isCreator) return xreply(msg.owner);
  if (!text) return xreply("Nomornya Mana?");
  let userr = m.mentionedJid[0] || (text ? text.replace(/\D/g, '') + "@s.whatsapp.net" : m.quoted?.sender);
  let db = JSON.parse(fs.readFileSync(filePath.premium));
  let index = db.indexOf(userr);
  if (index === -1) return xreply(`Nomor tidak ditemukan di daftar premium`);
  db.splice(index, 1);
  fs.writeFileSync(filePath.premium, JSON.stringify(db, null, 2));
  xreply(`*${userr.split("@")[0]}* sudah dihapus dari daftar premium`);
}
break;
case "self": {
  if (!isOwner && !isCreator) return xreply(msg.owner)
  rullz.public = false
  xreply("Sukses Mengganti Ke Mode Self")
}
break;
case "public": {
  if (!isOwner && !isCreator) return xreply(msg.owner)
  rullz.public = true
  xreply("Sukses Mengganti Ke Mode Public")
}
break;
case 'backupsesi': {
  if (!isCreator) return xreply('*Khusus rullzFuqi Developer Gw*')
  let folderPath = path.join(__dirname, './sesi')
  let outputPath = path.join(__dirname, './src/tmp/session.zip')
  let output = fs.createWriteStream(outputPath)
  let archive = archiver('zip', { zlib: { level: 9 } })
  output.on('close', async () => {
    await rullz.sendMessage(global.owner + "@s.whatsapp.net", {
      document: fs.readFileSync(outputPath),
      fileName: 'Fuqi MD Session.zip',
      mimetype: 'application/zip'
    }, { quoted: qtoko })
    fs.unlinkSync(outputPath)
  })
  archive.pipe(output)
  archive.directory(folderPath, false)
  archive.finalize()
  await xreply("Sukses Backup Session Bot")
}
break
/// ========= SEARCH ARC ============
case 'ytsearch':
case 'yts': {
  if (!text) return xreply('*Format Salah*\n.yts sc bot wa');
  await rullz.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
  let search = await yts(text);
  let videos = search.videos.slice(0, 7);
  if (!videos.length) return xreply("Tidak ditemukan hasil dari pencarian!");
  let cards = await Promise.all(videos.map(async (v) => {
    let image = (await axios.get(v.thumbnail, { responseType: 'arraybuffer' })).data;
    let media = await prepareWAMessageMedia({ image }, { upload: rullz.waUploadToServer });
    return {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: v.title,
        hasMediaAttachment: true,
        ...media
      }),
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `👤 ${v.author.name}\n⏱ ${v.timestamp} | 📺 ${v.views} | ⏳ ${v.ago}\n\n${(v.description.length > 200 ? v.description.slice(0, 200) + '...' : v.description)}`
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: 'cta_copy',
            buttonParamsJson: JSON.stringify({
              display_text: 'Copy Url',
              id: v.url
            })
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: 'View Video',
              url: v.url
            })
          }
        ]
      })
    };
  }));
  let msg = await generateWAMessageFromContent(m.chat, {
    ephemeralMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.fromObject({
            text: `*YouTube Search*\n*Query:* ${text}`
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
        })
      }
    }
  }, { userJid: m.sender });
  await rullz.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
  case 'pin': {
  await rullz.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })
  let query = text || m.quoted?.text || ''
  if (!query) return xreply("*Format Salah*\n.pin query")
  let res
  try {
    res = await axios.get(`https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(query)}`)
  } catch (e) {
    return rullz.sendMessage(m.chat, { text: `Error API: ${e.message}` }, { quoted: m })
  }
  let items = (res.data.status && Array.isArray(res.data.data))
    ? res.data.data.slice(0, 5)
    : []
  if (!items.length) {
    return xreply(`Tidak Menemukan Hasil Dari ${query}`)
  }
  let cards = []
  for (let i = 0; i < items.length; i++) {
    let it = items[i]
    let buffer
    try {
      buffer = (await axios.get(it.images_url, { responseType: 'arraybuffer' })).data
    } catch {
      continue
    }
    let media = await prepareWAMessageMedia({ image: buffer }, { upload: rullz.waUploadToServer })
    cards.push({
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: it.grid_title || `Pinterest #${i + 1}`,
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "Copy Link Image",
              copy_code: it.pin
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "View Image",
              url: it.pin,
              merchant_url: it.pin
            })
          }
        ]
      })
    })
  }

  if (!cards.length) {
    return xreply("Gagal Meload Gambar")
  }
  let msg = await generateWAMessageFromContent(
    m.chat,
    {
      ephemeralMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: `*Pinterest Search*\n*Query* : *${query}*`
            }),
            contextInfo: {
              isForwarded: true,
              forwardingScore: 999
            },
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
          })
        }
      }
    },
    { userJid: m.sender, quoted: m }
  )
  await rullz.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break;
case 'play':
case 'playaudio': {
    if (!text) return xreply("*Format Salah*\n.play [judul lagu / query]")
    await rullz.sendMessage(m.chat, {
        react: { text: '🔎', key: m.key }
    })
    let search = await yts(text)
    let video = search.videos[0]
    if (!video) return xreply("Tidak Dapat Menemukan Lagu Berdasarkan Query.")
    let api = await axios.get(`https://cloudkutube.eu/api/yta?url=${encodeURIComponent(video.url)}`)
    let res = api.data.result
    let info = `*🎵 AUDIO PLAY YT*\n
• *Title:* ${video.title}
• *Channel:* ${video.author.name}
• *Duration:* ${video.timestamp}
• *Link:* ${video.url}`
    await rullz.sendMessage(m.chat, {
        image: { url: video.thumbnail },
        caption: info,
        audio: { url: res.url },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                title: res.title || video.title,
                body: 'Audio dari YouTube',
                thumbnailUrl: res.thumbnail || video.thumbnail,
                sourceUrl: video.url,
                renderLargerThumbnail: true,
                showAdAttribution: true
            }
        }
    }, { quoted: m })
}
break
case 'githubsearch': {
  let query = text || m.quoted?.text || ''
  if (!query) return xreply("*Format Salah*\n.githubsearch query")
  await rullz.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })
  let res = await axios.get('https://api.github.com/search/repositories', {
    params: { q: query, per_page: 5 }
  })
  let items = res.data.items || []
  if (items.length === 0) {
    return xreply(`Tidak Menemukan Repo Bernama ${query} satupun`)
  }
  let cards = []
  for (let i = 0; i < items.length; i++) {
    let repo = items[i]
    let title = repo.full_name
    let description = repo.description || 'Tidak ada deskripsi'
    let url = repo.html_url
    let stars = repo.stargazers_count
    let forks = repo.forks_count
    let language = repo.language || '-'
    let buffer = null
    try {
      buffer = (await axios.get(repo.owner.avatar_url, { responseType: 'arraybuffer' })).data
    } catch {}
    let media = buffer ? await prepareWAMessageMedia({ image: buffer }, { upload: rullz.waUploadToServer }) : {}
    cards.push({
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: title,
        subtitle: `Stars: ${stars} | Forks: ${forks} | Language: ${language}`,
        hasMediaAttachment: !!buffer,
        ...media
      }),
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: description.length > 80 ? description.slice(0, 77) + '...' : description
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "Copy Link",
              copy_code: url
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "View Repo",
              url: url,
              merchant_url: url
            })
          }
        ]
      })
    })
  }
  let msg = await generateWAMessageFromContent(
    m.chat,
    {
      ephemeralMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: `*Github Search*\n*Query* : ${query}`
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
          })
        }
      }
    },
    { userJid: m.sender, quoted: m }
  )
  return rullz.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break
case 'npmsearch': {
  await rullz.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })
  let query = text || m.quoted?.text || ''
  if (!query) return xreply("*Format Salah*\n.npmsearch query")
  let res
  try {
    res = await axios.get(`https://registry.npmjs.org/-/v1/search`, {
      params: { text: query, size: 5 }
    })
  } catch (e) {
    return xreply(`Gagal mengambil data: ${e.message}`)
  }
  let items = res.data.objects || []
  if (!items.length) {
    return xreply(`Tidak Menemukan Package Berdasarkan *${query}*`)
  }
  let cards = []
  for (let i = 0; i < items.length; i++) {
    let pkg = items[i].package
    let title = pkg.name
    let description = pkg.description || 'Tidak ada deskripsi'
    let version = pkg.version || '-'
    let date = pkg.date ? new Date(pkg.date).toLocaleDateString() : '-'
    let url = pkg.links.npm || `https://www.npmjs.com/package/${pkg.name}`
    let imageURL = 'https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png'
    let buffer
    try {
      buffer = (await axios.get(imageURL, { responseType: 'arraybuffer' })).data
    } catch {
      continue
    }
    let media = await prepareWAMessageMedia({ image: buffer }, { upload: rullz.waUploadToServer })
    cards.push({
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: title,
        hasMediaAttachment: true,
        ...media
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "Copy Link",
              copy_code: url
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "Preview Package",
              url: url,
              merchant_url: url
            })
          }
        ]
      })
    })
  }
  if (!cards.length) return xreply("Gagal membuat card preview")
  let msg = await generateWAMessageFromContent(
    m.chat,
    {
      ephemeralMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: `*NPMJS Search*\n*Query* : *${query}*`
            }),
            contextInfo: {
              isForwarded: true,
              forwardingScore: 999
            },
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
          })
        }
      }
    },
    { userJid: m.sender, quoted: m }
  )
  await rullz.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break
case 'search': case 'google': {
  if (!text) return xreply('*Format Salah*\n.google hentong viral no sensor');
  await rullz.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
  let res = await axios.get(`https://api.vreden.my.id/api/google?query=${encodeURIComponent(text)}`);
  let data = res.data;

  if (data.status !== 200 || !data.result?.items) return xreply('Tidak ditemukan hasil dari pencarian!');

  let cards = await Promise.all(data.result.items.slice(0, 5).map(async (v) => {
    let thumb = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    let image = (await axios.get(thumb, { responseType: 'arraybuffer' })).data;
    let media = await prepareWAMessageMedia({ image }, { upload: rullz.waUploadToServer });
    return {
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: v.title,
        hasMediaAttachment: true,
        ...media
      }),
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: (v.snippet.length > 200 ? v.snippet.slice(0, 200) + '...' : v.snippet)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: 'cta_copy',
            buttonParamsJson: JSON.stringify({
              display_text: 'Copy URL',
              id: v.link
            })
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: 'Go To Situs',
              url: v.link
            })
          }
        ]
      })
    };
  }));

  const msg = await generateWAMessageFromContent(m.chat, {
    ephemeralMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.fromObject({
            text: `*Google Search*\n*Query:* ${text}`
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
        })
      }
    }
  }, { userJid: m.sender });

  await rullz.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
/// ========== DL ARC ===========
case 'gitclone': {
  if (!text) return m.reply('Contoh:\n.gitclone https://github.com/user/repo')
  let link = text.trim()
  if (!/^https:\/\/github\.com\/[^\/]+\/[^\/]+$/i.test(link)) return xreply('Link tidak valid.\nFormat harus seperti:\nhttps://github.com/user/repo')
  let repo = link.replace('https://github.com/', '')
  let zipUrl = `https://github.com/${repo}/archive/refs/heads/main.zip`
  let res = await axios.get(zipUrl, { responseType: 'arraybuffer' }).catch(() => null)
  if (!res || !res.data) return xreply('Gagal mengunduh file repo. Pastikan repo ada dan branch-nya *main*.')
  let fileName = `${repo.split('/')[1]}.zip`
  let filePath = path.join(__dirname, './src/tmp/', fileName)
  fs.writeFileSync(filePath, res.data)
  await rullz.sendMessage(m.chat, {
    document: fs.readFileSync(filePath),
    fileName: fileName,
    mimetype: 'application/zip'
  }, { quoted: ftroli })
  fs.unlinkSync(filePath)
}
break;
case 'yt': case 'youtube': {
  if (!text) return (xample("url"))
  let url = text.toLowerCase() || text.trim().split(/\s+/)
  await rullz.sendMessage(from, {react: {text: "📥", key: m.key}})
  await rullz.sendMessage(m.chat, {
    text: "Pilih Tipe Media Yang Ingin Di Download",
    footer: `YTDL ${url}`,
    buttons: [
      { 
        buttonId: `ytmp4 ${url}`,
        buttonText: { displayText: "MP4" },
        type: 1
      },
      {
        buttonId: `ytmp3 ${url}`,
        buttonText: { displayText: "MP3" },
        type: 1
      }
     ]
  }, { quoted: ftroli })
}
break;
case 'mediafiredl':
case 'mediafire': {
  if (!text) return xreply('*Format Salah*\n.mediafire url');
  await rullz.sendMessage(from, {react: {text: "📥", key: m.key}})
  let url = `https://api.vreden.my.id/api/mediafiredl?url=${encodeURIComponent(text)}`;
  axios.get(url)
    .then(response => {
      let result = response.data;
      if (result.status === 200 && result.result && result.result[0].status) {
        let file = result.result[0];
        let link = file.link;
        let nama = file.nama;
        let mime = file.mime;
        let size = file.size;
        let sizeB = file.sizeB;
        if (sizeB > 524288000) return xreply(`Ukuran file ${size} terlalu besar. Maksimal 500MB.`);
        axios.get(link, { responseType: 'arraybuffer' })
          .then(response => {
            let buffer = Buffer.from(response.data, 'binary');
            rullz.sendMessage(m.chat, {
              document: buffer,
              fileName: "Fuqi Downloader",
              mimetype: `application/${mime}`,
              caption: `*MediaFire Downloader*\n\nNama: ${nama}\nUkuran: ${size}\nMime: ${mime}`
            }, { quoted: ftroli });
          })
          .catch(error => {
            xreply('Error saat mengunduh file: ' + error.message);
          });
      } else {
        xreply('Gagal mengunduh file MediaFire');
      }
    })
    .catch(error => {
      xreply('Error saat mengakses API: ' + error.message);
    });
}
break;
case 'tt': {
  if (!text) return xreply("Format Salah*\n.mediafire url")
await rullz.sendMessage(from, {react: {text: "📥", key: m.key}})
  let args = text.trim().split(/\s+/)
  if (args.length === 1) {
    let link = args[0]
    if (!/^https?:\/\//.test(link)) return xreply("Link Url Tidak Valid")

    let buttons = [
      { buttonId: `.tt mp4 ${link}`, buttonText: { displayText: 'MP4' }, type: 1 },
      { buttonId: `.tt mp3 ${link}`, buttonText: { displayText: 'MP3' }, type: 1 },
      { buttonId: `.ttimg ${link}`, buttonText: {
        displayText: 'IMAGE' }, type: 1 },
    ]
    let buttonMessage = {
      footer: `Tiktok Downloader ${link}`,
      text: 'Pilih format yang ingin didownload:',
      buttons: buttons,
      headerType: 1
    }
    await rullz.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
    break
  }

  let sub = args.shift().toLowerCase()
  let link = args.join(' ')
  if (!/^https?:\/\//.test(link)) return xreply(`Url Tiktok *${link}* Tidak Valid`) 

  let apiUrl = sub === 'mp4' 
    ? `https://vapis.my.id/api/ttdl?url=${encodeURIComponent(link)}`
    : sub === 'mp3'
    ? `https://api.vreden.my.id/api/tikmusic?url=${encodeURIComponent(link)}`
    : null

  if (!apiUrl) return xreply("Pilih Salah Satu MP4 Atau MP3")

  let res = await fetch(apiUrl)
  let json = await res.json()

  if (!json.status) return xreply(`Terjadi Kesalahan Saat Mengambil Api ${json.error}`) 

  let mediaUrl = {
  id_video: json.data?.id,
  title: json.data?.title,
  duration_text: json.data?.duration,
  duration_sec: json.data?.durations,
  size_nowm: json.data?.size_nowm,
  size_nowm_hd: json.data?.size_nowm_hd,
  url_nowm: json.data?.data?.[0]?.url,
  url_nowm_hd: json.data?.data?.[1]?.url,
  views: json.data?.stats?.views,
  likes: json.data?.stats?.likes,
  comments: json.data?.stats?.comment,
  shares: json.data?.stats?.share,
  downloads: json.data?.stats?.download,
  author_id: json.data?.author?.id,
  author_name: json.data?.author?.nickname,
  author_fullname: json.data?.author?.fullname,
  author_avatar: json.data?.author?.avatar,
  mediaUrl: sub === 'mp4'
    ? (json.data?.data?.[1]?.url || json.data?.data?.[0]?.url)
    : json.data?.music_info?.url
};
  if (!mediaUrl) return xreply("Gagal Akses Media Url")
  
let caption = `
_-〆 ᴀᴜᴛʜᴏʀ : ${mediaUrl.author_name}
_-〆 ᴅᴜʀᴀᴛɪᴏɴ : ${mediaUrl.duration_text}
_-〆 sɪᴢᴇ ᴠɪᴅᴇᴏ : ${mediaUrl.size_nowm_hd}
_-〆 ᴛᴏᴛᴀʟʟʏ ᴠɪᴇᴡs : ${mediaUrl.views}
_-〆 ᴛᴏᴛᴀʟʟʏ ʟɪᴋᴇs : ${mediaUrl.likes}
_-〆 ᴛᴏᴛᴀʟʟʏ ᴄᴏᴍᴍᴇɴᴛ : ${mediaUrl.comments}
_-〆 ᴛᴏᴛᴀʟʟʏ sʜᴀʀᴇ : ${mediaUrl.shares}
_-〆 ᴛᴏᴛᴀʟʟʏ ᴅᴏᴡɴʟᴏᴀᴅ : ${mediaUrl.downloads}
_-〆 ᴠɪᴅᴇᴏ ᴜɪᴅ : ${mediaUrl.id_video}
`

  if (sub === 'mp4') {
    await rullz.sendMessage(m.chat, { video: { url: mediaUrl.url_nowm_hd || mediaUrl.url_nowm }, caption: caption }, { quoted: m })
  } else {
    await rullz.sendMessage(m.chat, { audio: { url: mediaUrl }, mimetype: 'audio/mpeg', ptt: false }, { quoted: m })
  }
}
break
case 'tiktokimg':
case 'ttimg':
case 'tiktok image': {
  if (!text) return xreply('Masukkan URL TikTok Photomode!\nContoh: .tiktokimg https://vt.tiktok.com/ZSkaGmaLV/')

  try {
    let res = await axios.get(`https://vapis.my.id/api/ttdl?url=${encodeURIComponent(text)}`)
    if (!res.data.status || !res.data.data || !res.data.data.data) return xreply('Gagal mengambil data dari API.')

    let result = res.data.data
    let cards = []

    for (let i = 0; i < result.data.length; i++) {
      let urlimg = result.data[i].url
      try {
        let buffer = (await axios.get(urlimg, { responseType: 'arraybuffer' })).data
        let media = await prepareWAMessageMedia({ image: buffer }, { upload: rullz.waUploadToServer })
        
        cards.push({
          header: proto.Message.InteractiveMessage.Header.fromObject({
            hasMediaAttachment: true,
            title: `Slide ${i + 1}`,
            ...media
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Lihat Video",
                  url: text,
                  merchant_url: text
                })
              }
            ]
          })
        })
      } catch (e) {
        continue
      }
    }

    if (!cards.length) return xreply('Gagal menampilkan gambar.')

    let msg = await generateWAMessageFromContent(
      m.chat,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Tiktok Photo Mode*\n👤 *${result.author.nickname}*\n🎵 *${result.music_info.title}*`
              }),
              contextInfo: {
                isForwarded: true,
                forwardingScore: 999
              },
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })
            })
          }
        }
      },
      { userJid: m.sender, quoted: m }
    )

    await rullz.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

  } catch (err) {
    console.error(err)
    return xreply('Terjadi kesalahan saat mengambil data.')
  }
}
break;
/// ========== TOOLS ARC ============
case 'reactch': {
    if (!isOwner && !isPrem) return xreply(msg.owner)
    if (!text) return xreply("*Format Salah*\n.reactch https://whatsapp.com/channel/xxx/123 ❤️rullz\n.reactch https://whatsapp.com/channel/xxx/123 ❤️rullz|5")
    let hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    }
    let [mainText, offsetStr] = text.split('|')
    let args = mainText.trim().split(" ")
    let link = args[0]
    if (!link.includes("https://whatsapp.com/channel/")) {
        return xreply("Link tidak valid!\nContoh: .reactch https://whatsapp.com/channel/xxx/idpesan 🔮rullz|2")
    }
    let channelId = link.split('/')[4]
    let rawMessageId = parseInt(link.split('/')[5])
    if (!channelId || isNaN(rawMessageId)) return xreply("Link tidak lengkap!")
    let offset = parseInt(offsetStr?.trim()) || 1
    let teksNormal = args.slice(1).join(' ')
    let teksTanpaLink = teksNormal.replace(link, '').trim()
    if (!teksTanpaLink) return xreply("Masukkan teks/emoji untuk direaksikan.")
    let emoji = teksTanpaLink.toLowerCase().split('').map(c => {
        if (c === ' ') return '―'
        return hurufGaya[c] || c
    }).join('')
    try {
        let metadata = await rullz.newsletterMetadata("invite", channelId)
        let success = 0, failed = 0
        for (let i = 0; i < offset; i++) {
            let msgId = (rawMessageId - i).toString()
            try {
                await rullz.newsletterReactMessage(metadata.id, msgId, emoji)
                success++
            } catch (e) {
                failed++
            }
        }
        xreply(`Berhasil Kirim Reaction *${emoji}* Ke ${success} Pesan Di Channel *${metadata.name}*\nGagal di ${failed} pesan`)
    } catch (err) {
        xreply("Gagal memproses permintaan!")
    }
}
break;
case 'smeme':
case 'stickermeme':
case 'stickmeme': {
    if (!/webp/.test(mime) && /image/.test(mime)) {
        if (!text) return xreply(`*Format Salah*\n${prefix + command} text1|text2`)
        let atas = text.split('|')[0] ? text.split('|')[0] : '-'
        let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
        let mee = await rullz.downloadAndSaveMediaMessage(quoted)
        let mem = await UploadFileUgu(mee)
        let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
        let memek = await rullz.sendImageAsSticker(m.chat, meme, m, {
            packname: global.packname,
            author: global.wm
        })
    } else {
        xreply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} text1|text2`)
    }
}
break
case 'brat': {
  if (!text) return xreply("*Format Salah*\n.brat teks")
  if (text.length > 200) return xreply("Karakter huruf melebihi batas (maks 200)")

  let apiUrl = `https://berak.vercel.app/tools/brat?text=${encodeURIComponent(text)}`
  let res = await axios.get(apiUrl, { responseType: 'arraybuffer' })
  let buffer = res.data

  if (!buffer || buffer.length === 0) return xreply("Gagal mendapatkan stiker dari API.")

  await rullz.sendAsSticker(m.chat, buffer, m, {
    packname: global.packname || "StickerBot",
    author: global.wm || "Bot rullz"
  })
}
break;
case "bratvid":
case 'bratvideo': {
    if (!text) return xreply(`*Format Salah*\n${prefix + command} text`)
    if (text.length > 250) return xreply(`Karakter terbatas, max 250!`)
    let words = text.split(" ")
    let tempDir = path.join(process.cwd(), 'src')
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
    let framePaths = []
    try {
        for (let i = 0; i < words.length; i++) {
            let currentText = words.slice(0, i + 1).join(" ")
            let res = await axios.get(
                `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`,
                { responseType: "arraybuffer" }
            ).catch((e) => e.response)
            let framePath = path.join(tempDir, `frame${i}.mp4`)
            fs.writeFileSync(framePath, res.data)
            framePaths.push(framePath)
        }
        let fileListPath = path.join(tempDir, "filelist.txt")
        let fileListContent = ""
        for (let i = 0; i < framePaths.length; i++) {
            fileListContent += `file '${framePaths[i]}'\n`
            fileListContent += `duration 0.7\n`
        }
        fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
        fileListContent += `duration 2\n`

        fs.writeFileSync(fileListPath, fileListContent)

        let outputVideoPath = path.join(tempDir, "output.mp4")
        execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`)

        await rullz.sendVideoAsSticker(m.chat, outputVideoPath, m, {
            packname: global.packname,
            author: global.wm
        })
        framePaths.forEach((frame) => {
            if (fs.existsSync(frame)) fs.unlinkSync(frame)
        })
        if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
        if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
    } catch (e) {
        console.error(e)
        xreply('Terjadi kesalahan')
    }
}
break;
case "qc": case 'quotedchat': {
  if (!text) return xreply('*Format Salah*\n.qc teks')
  let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
  let ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
  let urlpp = await rullz.profilePictureUrl(m.sender, 'image').catch(() => {})
  if (urlpp) ppuser = urlpp
  let json = {
    type: "quote",
    format: "png",
    backgroundColor: "#000000",
    width: 812,
    height: 968,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: m.pushName,
          photo: {
            url: ppuser
          }
        },
        text: text,
        replyMessage: {}
      }
    ]
  }
  let response = axios.post('https://bot.lyo.su/quote/generate', json, {
    headers: { 'Content-Type': 'application/json' }
  }).then(async (res) => {
    let buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./src/tmp/" + m.sender + ".png"
    await fs.writeFile(tempnya, buffer, async (err) => {
      if (err) return m.reply("Error")
      await rullz.sendAsSticker(m.chat, tempnya, m, { packname: global.packname || "StickerBot",
        author: global.wm || "Bot rullz"
      })
      await fs.unlinkSync(tempnya)
    })
  })
}
break;
case "wm": {
if (!text) return xreply("namamu dengan kirim media")
if (!/image|video/gi.test(mime)) return xreply("Reply Sticker dengan caption .wm namawm")
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
let qmsg = (quoted.msg || quoted)
var image = await rullz.downloadAndSaveMediaMessage(qmsg)
await rullz.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break;
case "s": case "sticker": case "stiker": {
let qmsg = (quoted.msg || quoted)
if (!/image|video/gi.test(mime)) return xreply("Kirim atau Reply image / video dengan caption .sticker")
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await rullz.downloadAndSaveMediaMessage(qmsg)
await rullz.sendAsSticker(m.chat, image, m, {
  author: global.packname || "Fuqi - Botzz",
  packname: global.wm || "By rullzFuqi"
})
await fs.unlinkSync(image)
}
break;
case "tohd": case "hd": case "remini": {
if (!/image/.test(mime)) return xreply("Reply Foto / Kirim Dengan Caption .hd")
let foto = await rullz.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await rullz.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break
case 'tourl': {
  if (!quoted && !/image|video/.test(mime)) return xreply("*Format Salah*\nReply Atau Kirim Media Dengan Caption .tourl");
  try {
    let axios = require('axios');
    let FormData = require('form-data');
    let FileType = require('file-type');
    async function uploadToCatbox(buffer, filename = 'file') {
      let type = await FileType.fromBuffer(buffer);
      if (!type) throw new Error('File-type tidak dikenali');

      let form = new FormData();
      form.append('reqtype', 'fileupload');
      form.append('fileToUpload', buffer, {
        filename: `${filename}.${type.ext}`,
        contentType: type.mime
      });

      let res = await axios.post('https://catbox.moe/user/api.php', form, {
        headers: form.getHeaders()
      });

      if (typeof res.data !== 'string' || !res.data.startsWith('https://')) {
        throw new Error('Gagal upload ke Catbox: ' + res.data);
      }
      return res.data;
    }
    let msgMedia = quoted ? quoted : m;
    let mimetype = msgMedia.mimetype || '';
    if (!/image|video/.test(mimetype)) return xreply("Media harus berupa *gambar* atau *video*");

    let media = await rullz.downloadMediaMessage(msgMedia);
    if (!media) return xreply("Gagal mendownload media!");

    let url = await uploadToCatbox(media);
    let size = (media.length / 1024).toFixed(2);
    let caption = `> 📍 Ukuran File Yang di Upload ${size} KB`;

    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `CatBox Uploader Success Request By : ${pushname}`
              },
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
                      ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/znij9a.jpg' } }, { upload: rullz.waUploadToServer })),
                      title: '',
                      subtitle: global.ownername,
                      hasMediaAttachment: false
                    }),
                    body: { text: caption },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_copy",
                          buttonParamsJson: JSON.stringify({
                            display_text: "Copy Url",
                            id: "btn-copy-catbox",
                            copy_code: url
                          })
                        },
                        {
                          name: "cta_url",
                          buttonParamsJson: JSON.stringify({
                            display_text: "View Image",
                            id: "btn-view-catbox",
                            copy_code: url
                          })
                        }
                      ]
                    }
                  }
                ],
                messageVersion: 1
              }
            }
          }
        }
      },
      { quoted: m }
    );

    await rullz.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

  } catch (err) {
    console.log(err);
    xreply(`Gagal upload: ${err.message}`);
  }
}
break;
case "toimg": {
  if (!/webp/.test(mime)) return xreply("Reply stiker yang ingin diubah ke gambar!");
  try {
    let qmsg = quoted?.msg || quoted;
    let media = await rullz.downloadAndSaveMediaMessage(qmsg);
    let ran = getRandom('.png');
    exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
      fs.unlinkSync(media);
      if (err) {
        console.error(err);
        return xreply("Gagal mengubah stiker ke gambar!");
      }
      let buffer = fs.readFileSync(ran);
      await rullz.sendMessage(m.chat, { image: buffer }, { quoted: m });
      fs.unlinkSync(ran);
    });
  } catch (e) {
    console.error(e);
    xreply("Terjadi error saat mengonversi stiker!");
  }
}
break;
case 'rvo': {
  if (!m.quoted) return xreply("Reply pesan *View Once* (gambar/video/audio)")

  try {
    let quoted = m.quoted
    let type = quoted.mtype

    if (!['imageMessage', 'videoMessage', 'audioMessage'].includes(type)) {
      return xreply("Tipe media tidak didukung.")
    }

    let media = await quoted.download()
    if (!media) return xreply("Gagal mendownload media. Mungkin sudah kadaluarsa atau tidak tersedia.")

    let opt = { quoted: m }

    if (type === 'imageMessage') {
      await rullz.sendMessage(m.chat, {
        image: media,
        caption: quoted.text || 'View Once Image',
      }, opt)
    } else if (type === 'videoMessage') {
      await rullz.sendMessage(m.chat, {
        video: media,
        caption: quoted.text || 'View Once Video',
      }, opt)
    } else if (type === 'audioMessage') {
      await rullz.sendMessage(m.chat, {
        audio: media,
        mimetype: quoted.mimetype || 'audio/mp4',
        ptt: false
      }, opt)
    }
  } catch (err) {
    console.error('[RVO ERROR]', err)
    xreply("Terjadi kesalahan saat mengambil media View Once.")
  }
}
break;
/// ========== GROUP ARC ============
case 'everyone': {
  if (!isGroup) return xreply(msg.group)
  if (!isOwner && !isAdmins) return xreply(msg.owner)
  let mem = isGroup ? await groupMetadata.participants.map(a => a.id) : ""
    rullz.sendMessage(m.chat, {
    text: `@${m.chat}\n${text}`,
    contextInfo: {
      mentionedJid: mem, 
      groupMentions: [
   {
     groupSubject: `Everyone Fuqi - MD ⚡`,
     groupJid: m.chat,
    },
   ],
  },
});
}
break;
case 'del': {
  if (!isGroup) return xreply(msg.group)
  if (!(isOwner && isAdmins)) return xreply(msg.owner)
  if (!m.quoted) return xreply('Reply pesan yang mau dihapus pakai perintah ini!')
  await rullz.sendMessage(m.chat, { delete: m.quoted.key })
  return
}
break;
case 'groupevent': {
  if (!isGroup) return xreply(msg.group)
  if (!isOwner && !isAdmins) return xreply(msg.owner)
 rullz.sendMessage(m.chat, {
    text: "*Group Event On / Off?*",
    footer: "Pilih tombol di bawah",
    buttons: [
      {
        buttonId: '.groupeventon',
        buttonText: { displayText: 'On' },
        type: 1
      },
      {
        buttonId: '.groupeventoff',
        buttonText: { displayText: 'Off' },
        type: 1
      }
    ],
    headerType: 1,
    contextInfo: {
      mentionedJid: [m.sender]
    }
  }, { quoted: qtoko })
}
break;
case 'groupeventon': {
  if (!isGroup) return xreply(msg.group)
  if (!isOwner && !isAdmins) return xreply(msg.owner)
  global.welcome = true
  xreply("Group Event Di Group Ini Sudah Aktif")
}
break;
case 'groupeventoff': {
  if (!isGroup) return xreply(msg.group)
  if (!isOwner && !isAdmins) return xreply(msg.owner)
  global.welcome = false
  xreply("Group Event Di Group Ini Nonaktif")
}
break;
case 'opengc': {
  if (!isGroup) return
  if (!isOwner && !isAdmins) return
  await rullz.groupSettingUpdate(m.chat, 'not_announcement')
}
break;
case 'closegc': {
  if (!isGroup) return
  if (!isOwner && !isAdmins) return
  await rullz.groupSettingUpdate(m.chat, 'announcement')
}
break;
case 'linkgc': {
  if (!isGroup) return xreply(msg.group)
  let response = await rullz.groupInviteCode(m.chat)
  let groupLink = `https://chat.whatsapp.com/${response}`
  xreply(`*Link Grup Ini:*\n${groupLink}`)
}
break;
case 'resetlinkgc': {
  if (!isGroup) return xreply(msg.group)
  if (!isAdmins && !isOwner) return xreply(msg.owner)
  await rullz.groupRevokeInvite(m.chat)
  let newCode = await rullz.groupInviteCode(m.chat)
  let newLink = `https://chat.whatsapp.com/${newCode}`
  xreply(`*Link grup berhasil di-reset!*\nLink baru: ${newLink}`)
}
break;
case 'kick': {
  if (!isGroup) return xreply(msg.group)
  if (!isAdmins && !isOwner) return xreply(msg.owner)
  if (!isBotAdmins) return xreply("Bot bukan admin grup.")
  let target
  if (m.mentionedJid.length > 0) {
    target = m.mentionedJid
  } else if (m.quoted) {
    target = [m.quoted.sender]
  } else if (args[0]) {
    let num = args[0].replace(/[^0-9]/g, '')
    target = [`${num}@s.whatsapp.net`]
  } else {
    return xreply("Tag, reply, atau ketik nomornya!\n\nContoh:\n.kick @user\n.kick 628xxxxxx\n.kick (reply pesan)")
  }
  for (let jid of target) {
    if (!groupMetadata.participants.some(p => p.id === jid)) continue
    try {
      await rullz.groupParticipantsUpdate(m.chat, [jid], 'remove')
      await xreply(`Berhasil mengeluarkan @${jid.split('@')[0]}`, { mentions: [jid] })
    } catch (e) {
      await xreply(`Gagal mengeluarkan @${jid.split('@')[0]}`, { mentions: [jid] })
    }
  }
}
break;
case 'add': {
  if (!isGroup) return xreply(msg.group)
  if (!isAdmins && !isOwner) return xreply(msg.owner)
  if (!isBotAdmins) return xreply("Bot bukan admin grup.")
  let target
  if (m.mentionedJid.length > 0) {
    target = m.mentionedJid
  } else if (m.quoted) {
    target = [m.quoted.sender]
  } else if (args[0]) {
    let num = args[0].replace(/[^0-9]/g, '')
    target = [`${num}@s.whatsapp.net`]
  } else {
    return xreply("Tag, reply, atau tulis nomor untuk menambahkan!\n\nContoh:\n.add @user\n.add 628xxxxxx\n.add (reply pesan)")
  }
  for (let jid of target) {
    if (groupMetadata.participants.some(p => p.id === jid)) {
      await xreply(` @${jid.split('@')[0]} sudah anggota grup.`, { mentions: [jid] })
      continue
    }
    try {
      await rullz.groupParticipantsUpdate(m.chat, [jid], 'add')
     await xreply(`Berhasil menambahkan @${jid.split('@')[0]}`, { mentions: [jid] })
    } catch (e) {
      await xreply(`Gagal menambahkan @${jid.split('@')[0]}`, { mentions: [jid] })
    }
  }
}
break;
case 'promote': {
  if (!isGroup) return xreply(msg.group)
  if (!isOwner && !isAdmins) return xreply(msg.owner)
  if (!isBotAdmins) return xreply("Bot harus jadi admin untuk mempromote member.")
  let target
  if (m.mentionedJid.length > 0) {
    target = m.mentionedJid
  } else if (m.quoted) {
    target = [m.quoted.sender]
  } else if (args[0]) {
    let num = args[0].replace(/[^0-9]/g, '')
    target = [`${num}@s.whatsapp.net`]
  } else {
    return xreply("Tag, reply, atau ketik nomornya!\n\nContoh:\n.promote @user\n.promote 628xxxxxx\n.promote (reply pesan)")
  }
  for (let jid of target) {
    if (!groupMetadata.participants.some(p => p.id === jid)) continue
    try {
      await rullz.groupParticipantsUpdate(m.chat, [jid], 'promote')
      await xreply(`Berhasil mempromote @${jid.split('@')[0]}`, { mentions: [jid] })
    } catch (e) {
      await xreply(`Gagal mempromote @${jid.split('@')[0]}`, { mentions: [jid] })
    }
  }
}
break;
case 'demote': {
  if (!isGroup) return xreply(msg.group)
  if (!isOwner && !isAdmins) return xreply(msg.owner)
  if (!isBotAdmins) return xreply("Bot harus jadi admin untuk mendemote admin.")
  let target
  if (m.mentionedJid.length > 0) {
    target = m.mentionedJid
  } else if (m.quoted) {
    target = [m.quoted.sender]
  } else if (args[0]) {
    let num = args[0].replace(/[^0-9]/g, '')
    target = [`${num}@s.whatsapp.net`]
  } else {
    return xreply("Tag, reply, atau ketik nomornya!\n\nContoh:\n.demote @user\n.demote 628xxxxxx\n.demote (reply pesan)")
  }
  for (let jid of target) {
    if (!groupMetadata.participants.some(p => p.id === jid)) continue
    try {
      await rullz.groupParticipantsUpdate(m.chat, [jid], 'demote')
     await xreply(`Berhasil mendemote @${jid.split('@')[0]}`, { mentions: [jid] })
    } catch (e) {
      await xreply(`Gagal mendemote @${jid.split('@')[0]}`, { mentions: [jid] })
    }
  }
}
break;
case 'ht': case 'h': case 'hidetag': {
  if (!isGroup) return m.reply(msg.group)
  if (!isOwner && !isCreator) return xreply(msg.owner)
  let mentionAll = participants.map(v => v.id)
  let qmsg = m.quoted ? m.quoted : m

  if (/image|video|audio|sticker/.test(qmsg.mtype)) {
    let media = await qmsg.download()
    let options = {
      mentions: mentionAll,
      caption: text || '',
    }

    if (qmsg.mtype === 'imageMessage') {
      await rullz.sendMessage(m.chat, { image: media, ...options }, { quoted: m })
    } else if (qmsg.mtype === 'videoMessage') {
      await rullz.sendMessage(m.chat, { video: media, ...options }, { quoted: m })
    } else if (qmsg.mtype === 'audioMessage') {
      await rullz.sendMessage(m.chat, { audio: media, mimetype: 'audio/mp4', ...options }, { quoted: m })
    } else if (qmsg.mtype === 'stickerMessage') {
      await rullz.sendMessage(m.chat, { sticker: media, ...options }, { quoted: m })
    }

  } else {
    if (!text) return xreply(`Contoh: ${prefix}hidetag Halo semua`)
    await rullz.sendMessage(m.chat, {
      text: text,
      mentions: mentionAll
    }, { quoted: m })
  }
}
break;
case 'antilink': {
  if (!isGroup) return xreply(msg.group)
  if (!isOwner && !isAdmins) return xreply(msg.owner)
  if (!text) return xreply("*Format Salah*\n.antilink on/off")
  if (text.toLowerCase() === 'on') {
    global.antilink = true
    xreply("Anti Link *aktif*")
  } else if (text.toLowerCase() === 'off') {
    global.antilink = false
    xreply("Anti Link *nonaktif*")
  } else {
    xreply("*Format Salah*\nGunakan: .antilink on/off")
  }
}
break;
case 'antitoxic': {
  if (!isGroup) return xreply(msg.group)
  if (!isOwner && !isAdmins) return xreply(msg.owner)
  if (!text) return xreply("*Format Salah*\n.antitoxic on/off")
  if (text.toLowerCase() === 'on') {
    global.antitoxic = true
    xreply("Anti Toxic *aktif*")
  } else if (text.toLowerCase() === 'off') {
    global.antitoxic = false
    xreply("Anti Toxic *nonaktif*")
  } else {
    xreply("*Format Salah*\nGunakan: .antitoxic on/off")
  }
}
break;
case 'antipromosi': {
  if (!isGroup) return xreply(msg.group)
  if (!isOwner && !isAdmins) return xreply(msg.owner)
  if (!text) return xreply("*Format Salah*\n.antipromosi on/off")
  if (text.toLowerCase() === 'on') {
    global.antipromosi = true
    xreply("Anti Promosi *aktif*")
  } else if (text.toLowerCase() === 'off') {
    global.antipromosi = false
    xreply("Anti Promosi *nonaktif*")
  } else {
    xreply("*Format Salah*\nGunakan: .antipromosi on/off")
  }
}
break;
/// ========== STORE ARC ===========
case "idgc": case "cekidgc": {
  if (!isGroup) return xreply(msg.group)
  xreply(m.chat)
}
break
case 'done': {
  if (!text.includes(',')) return xreply("*Format Salah!*\nKirim Gambar dengan caption .done akunml,1000,dana,rullz");
  if (!isImage) return xreply("Kirim *gambar* bersama perintah ini!\nContoh:\n.done akunml,1000,dana,rullz (dengan gambar)");
  let [name, value, pay, direct] = text.split(',').map(v => v.trim());
  if (!name || !value || !pay || !direct) {
    return xreply("*Semua Harus Di Isi Dengan Benar!*\nContoh: .done akunml,1000,dana,rullz");
  }
  let media = await downloadMediaMessage(m, 'buffer');
  let done = `*⧽═══════【 TRX DONE 】═══════⧼*
📢 Transaksi Done By
🛍 ◉ *BARANG*
     ➥ ${name}
     
💵 ◉ *HARGA*
      ➥ ${value}
      
💳 ◉ *PAYMENT*
      ➥ ${pay}
      
⚙️ ◉ *DIRECT BY*
      ➥ ${direct}
      
🗓 ◉ *DATE*
      ➥ $${new Date().toLocaleString("id-ID")}
*⧽═════════════════════════⧼*
📍 ▣ *MARKETPLACE*
https://chat.whatsapp.com/Dv6k47O8k5k6u9Z9s5CI2N
📍 ▣ *WHATSAPP CHANNEL*
https://whatsapp.com/channel/0029Vayfz8u1NCrSZQu9n73i
*⧽═════════════════════════⧼*
- Thanks For Buyying Item / Service`;
  await rullz.sendMessage(m.chat, {
    image: media,
    caption: done
  }, { quoted: qtoko });
  let testiFile = './lib/database/testi.json';
  let testiData = JSON.parse(fs.readFileSync(testiFile));
  testiData.push({
    name,
    value,
    pay,
    direct,
    image: m.key.id,
    from: m.sender,
    date: new Date().toLocaleString("id-ID")
  });
  fs.writeFileSync(testiFile, JSON.stringify(testiData, null, 2));
}
break;
case 'addidch': {
  if (!text) return xreply('*Format Salah*\n.addidch 12345@newsletter\n.addidch https://whatsapp.com/channel/xxxx');
  let idch;
  if (text.includes('https://whatsapp.com/channel/')) {
    let id = text.split('https://whatsapp.com/channel/')[1];
    let res = await await rullz.newsletterMetadata("invite", id)
    if (!res || !res.id) return xreply('Gagal mendapatkan ID dari link tersebut!');
    idch = res.id;
  } else if (text.endsWith('@newsletter')) {
    idch = text;
  } else {
    return xreply('Format salah! Harus berupa ID newsletter atau link channel WhatsApp.');
  }
  let filePath = './lib/database/idch.json';
  let db = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : [];
  if (db.includes(idch)) return xreply('ID tersebut sudah terdaftar di database.');
  db.push(idch);
  fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
  xreply(`✅ Berhasil menambahkan ID channel:\n➥ ${idch}`);
}
break;
case 'cekidch': {
  if (!text) return xreply('*Format Salah*\n.cekidch https://whatsapp.com/channel/ID')
  if (!text.toLowerCase().includes('whatsapp.com/channel/')) return xreply('Link tidak valid.')
  let id = text.split('https://whatsapp.com/channel/')[1]
  let res = await rullz.newsletterMetadata("invite", id)
  let nama = res.name || '-'
  let deskripsi = res.description || '-'
  let dibuat = new Date(res.creationTimestamp * 1000).toLocaleDateString('id-ID')
  let subs = res.subscribers || 0
  let link = `https://whatsapp.com/channel/${res.id}`

  let msg = await generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `*Informasi Channel WhatsApp*\n\n• *Nama:* \`${nama}\`\n• *ID:* \`${res.id}\`\n• *Subscribers:* \`${subs}\`\n• *Dibuat:* \`${dibuat}\``
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/y6eorr.jpg' } }, { upload: rullz.waUploadToServer })),
                    title: '',
                    subtitle: '',
                    hasMediaAttachment: false
                  }),
                  body: { text: 'Salin ID Channel ini.' },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Salin ID",
                          id: "btn-copy-idchannel",
                          copy_code: res.id
                        })
                      }
                    ]
                  }
                },
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/y6eorr.jpg' } }, { upload: rullz.waUploadToServer })),
                    title: '',
                    subtitle: '',
                    hasMediaAttachment: false
                  }),
                  body: { text: 'Salin Deskripsi Channel ini.' },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Salin Deskripsi",
                          id: "btn-copy-deskripsi",
                          copy_code: deskripsi
                        })
                      }
                    ]
                  }
                },
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/y6eorr.jpg' } }, { upload: rullz.waUploadToServer })),
                    title: '',
                    subtitle: '',
                    hasMediaAttachment: false
                  }),
                  body: { text: 'Salin Link Channel ini.' },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Salin Link",
                          id: "btn-copy-linkchannel",
                          copy_code: link
                        })
                      }
                    ]
                  }
                }
              ],
              messageVersion: 1
            }
          }
        }
      }
    },
    { quoted: m }
  )

  await rullz.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
break;
case 'jpm': {
  if (!isOwner && !isCreator) return xreply(msg.owner)
  let caption = text || ''
  if (!caption && !msg.quoted?.mimetype?.includes('image'))
    return xreply(xample("Pesan Bisa Juga Dengan Image"))
  let allGroup = await rullz.groupFetchAllParticipating()
  let grups = Object.entries(allGroup).map(([id, data]) => id)
  let totalGrup = grups.length
  let media
  if (msg.quoted && msg.quoted.mimetype && msg.quoted.mimetype.includes("image")) {
    media = await rullz.downloadMediaMessage(msg.quoted)
  }
  for (let id of grups) {
    try {
      if (media && caption) {
        await rullz.sendMessage(id, {
          image: media,
          caption: caption
        }, { quoted: qlocJpm })
      } else if (media && !caption) {
        await rullz.sendMessage(id, {
          image: media
        }, { quoted: qlocJpm })
      } else {
        await rullz.sendMessage(id, {
          text: caption
        }, { quoted: qlocJpm })
      }
      await sleep(global.delayJpm)
    } catch (e) {
      console.log(`[ERROR JPM] ${id} =>`, e)
    }
  }
  xreply(`*Mengirim Pesan Ke Total ${totalGrup} Grub*`)
}
break;
/// ========== FUN ARC ============

case 'hitamkan': {
 if (!/image/.test(mime)) return xreply("Reply gambar yang mau dihitamin dengan caption *hitamkan*");
 let mediaPath = await rullz.downloadAndSaveMediaMessage(qmsg);
 let buffer = fs.readFileSync(mediaPath);
 let base64Image = buffer.toString("base64");
  try {
   let axios = require('axios');
   let response = await axios({
     url: "https://negro.consulting/api/process-image",
     method: "POST",
     data: {
       filter: "hitam",
       imageData: "data:image/png;base64," + base64Image }});
  let resultBuffer = Buffer.from(response.data.processedImageUrl.replace("data:image/png;base64,", ""), "base64");
  await rullz.sendMessage(m.chat, { image: resultBuffer, caption: `Selesai, pake filter *hitam*` }, { quoted: m });
   fs.unlinkSync(mediaPath);
   } catch (err) {
console.log(err);
xreply("Gagal memproses gambar.")}}
break;
case 'cekkhodam': {
  if (!text) return xreply("Nama Yang Mau Di Cek?");
  let khodam = [
    "Mewing Macan",
    "Sigma Serigala",
    "Rizz Elang",
    "Gyat Gorila",
    "Cobra Chad",
    "Kelinci Memeer",
    "Bajing Toxic",
    "Ular Vibe Positif",
    "Cheetah Clout",
    "Rubah Flexer",
    "Meerkat Memeing"
  ];
  let randomIndex = Math.floor(Math.random() * khodam.length);
  let nama = khodam[randomIndex];
  xreply(`Khodam mu adalah ${nama}`);
}
break;
case 'cekdongo': {
  let persen = Math.floor(Math.random() * 101)
  xreply(`Kedongoan Kamu ${persen}`)
}
break;
case 'cekwibu': {
  let persen = Math.floor(Math.random() * 101)
  xreply(`Kewibuan Kamu ${persen}`)
}
break;
case 'ceksepuh': {
  let persen = Math.floor(Math.random() * 101)
  xreply(`Ke Sepuhan Kamu ${persen}`)
}
break;
case 'cekgila': {
  let persen = Math.floor(Math.random() * 101)
  xreply(`Kegilaan Kamu ${persen}`)
}
break;
case 'cekpintar': {
  let persen = Math.floor(Math.random() * 101)
  xreply(`Kepintaran Kamu Kamu ${persen}`)
}
break;
case 'cekcaboel': {
  let kombo = "Pedo".repeat(100) + "Karbit".repeat(100) + "Mesum".repeat(100)
  xreply(`PARAH FIX SIH KAMU INI\n${kombo}`)
}
break
case 'apakah': {
  let jwb = ["Iya", "Tidak", "Mungkin", "Tidak Mungkin!", "Mungkin Tidak", "Mungkin Iya"]
  let res = Math.floor(Math.random() * jwb.length)
  xreply(`Sepertinya ${jwb[res]}`)
}
break
case 'kapankah': {
  let jwb = ["Besok", "Minggu Depan", "Besok Lusa", "Tahun Depan", "Bulan Depan"]
  let res = Math.floor(Math.random() * jwb.length)
  xreply(`Mungkin ${jwb[res]}`)
}
break
case 'tebakgambar': {
  if (!m.isGroup) return xreply('❗ Fitur ini hanya untuk grup.')
  let soal = require('./lib/gamedb/tebakgambar.json')
  let db = loadDB()
  if (!db.tebakgambar) db.tebakgambar = []
  if (db.tebakgambar.find(v => v.id === m.chat)) {
    return xreply('❗ Masih ada soal yang belum dijawab!')
  }
  let random = soal[Math.floor(Math.random() * soal.length)]
  db.tebakgambar.push({
    id: m.chat,
    jawaban: random.jawaban.toLowerCase(),
    waktu: Date.now()
  })

  saveDB(db)
  await rullz.sendMessage(m.chat, {
    image: { url: random.img },
    caption: `🧠 *Tebak Gambar*\n\n${random.deskripsi}\n\n⏳ Waktu: 1 menit\n\n*Jawab dengan mereply gambar ini!*`
  }, { quoted: ftroli })
  setTimeout(() => {
    let latest = loadDB()
    let sesi = latest.tebakgambar.find(v => v.id === m.chat)
    if (sesi) {
      latest.tebakgambar = latest.tebakgambar.filter(v => v.id !== m.chat)
      saveDB(latest)
      rullz.sendMessage(m.chat, {
        text: `⏰ *Waktu habis!*\n❌ Jawaban: *${sesi.jawaban.toUpperCase()}*`,
        mentions: [m.sender]
      })
    }
  }, 60000)
}
break
case 'getpp': {
  let targetJid = m.mentionedJid?.[0] || m.msg?.contextInfo?.mentionedJid?.[0] || m.sender;
  const ppUrl = await rullz.profilePictureUrl(targetJid, 'image');
  await rullz.sendMessage(
    m.chat,
    { image: { url: ppUrl }, caption: `Foto profil dari @${targetJid.split('@')[0]}` },
    { quoted: m, mentions: [targetJid] }
  );
}
break;
/// ========= CPANEL ARC =========
case "1gbv1": case "2gbv1": case "3gbv1": case "4gbv1":
case "5gbv1": case "6gbv1": case "7gbv1": case "8gbv1":
case "9gbv1": case "10gbv1": case "unliv1": {
  if (!isSeller && !isCreator) return xreply("*[ 𝙰𝙲𝙲𝙴𝚂 𝙳𝙴𝙽𝙸𝙴𝙳 ]* ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ғᴏʀ ᴏɴʟʏ ʀᴇsᴇʟʟᴇʀ")
  let argsSplit = args.join(" ").split(",");
  if (argsSplit.length < 1 || !argsSplit[0]) return xreply("*Format Salah*\n.1gbv1 servername,target")
  let namaServer = argsSplit[0].trim();
  let buyer = argsSplit[1] ? argsSplit[1].replace(/[^0-9]/g, "") : m.sender.replace("@s.whatsapp.net", "");
  const panelList = {
    "1gbv1": { ram: 1000, disk: 1000, cpu: 40 },
    "2gbv1": { ram: 2000, disk: 1000, cpu: 60 },
    "3gbv1": { ram: 3000, disk: 2000, cpu: 80 },
    "4gbv1": { ram: 4000, disk: 2000, cpu: 100 },
    "5gbv1": { ram: 5000, disk: 3000, cpu: 120 },
    "6gbv1": { ram: 6000, disk: 3000, cpu: 140 },
    "7gbv1": { ram: 7000, disk: 4000, cpu: 160 },
    "8gbv1": { ram: 8000, disk: 4000, cpu: 180 },
    "9gbv1": { ram: 9000, disk: 5000, cpu: 200 },
    "10gbv1": { ram: 10000, disk: 5000, cpu: 220 },
    "unliv1": { ram: 0, disk: 0, cpu: 0 }
  };
  let { ram, disk, cpu } = panelList[command];
  let panelname = namaServer;
  let srvrmail = `${panelname}@fuqi.team`;
  let srvrpw = panelname + crypto.randomBytes(2).toString('hex');
  let egg = global.egg;
  let loc = global.loc;
  let memo = ram.toString();
  let disksrvr = disk.toString();
  let conn = await fetch(global.domain + "/api/application/users", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + global.apikey
    },
    body: JSON.stringify({
      email: srvrmail,
      username: panelname,
      first_name: panelname,
      last_name: panelname,
      language: "en",
      password: srvrpw
    })
  });
  let data = await conn.json();
  if (!conn.ok) return xreply("Terjadi Kesalahan Saat Membuat User: " + JSON.stringify(data.errors?.[0] || data, null, 2));
  let user = data.attributes;
  let conn2 = await fetch(global.domain + "/api/application/servers", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + global.apikey
    },
    body: JSON.stringify({
      name: panelname,
      description: "",
      user: user.id,
      egg: parseInt(egg),
      docker_image: "ghcr.io/parkervcp/yolks:nodejs_21",
      startup: "npm start",
      environment: {
        INST: "npm",
        USER_UPLOAD: "0",
        AUTO_UPDATE: "0",
        CMD_RUN: "npm start"
      },
      limits: {
        memory: ram,
        swap: 0,
        disk: disk,
        io: 500,
        cpu: cpu
      },
      feature_limits: {
        databases: 5,
        backups: 5,
        allocations: 1
      },
      deploy: {
        locations: [parseInt(loc)],
        dedicated_ip: false,
        port_range: []
      }
    })
  });
  let res = await conn2.json();
  if (!conn2.ok) return xreply("Terjadi Kesalahan Saat Membuat Server: " + JSON.stringify(res.errors?.[0] || res, null, 2));
  let srvr = res.attributes;
  await xreply(`*Sukses Create Panel*\n\n*Server Name:* ${panelname}\n*User UID:* ${user.id}\n*Server UID:* ${srvr.id}\n\n*Informasi Panel Dikirim ke:* @${buyer}`, { mentions: [buyer + "@s.whatsapp.net"] });
  let txt = `*Informasi Panel Anda:*\nServer Name: ${panelname}\nUser ID: ${user.id}\nServer ID: ${srvr.id}`;
  let msg = generateWAMessageFromContent(
    buyer + "@s.whatsapp.net",
    {
      viewOnceMessage: {
        message: {
          messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
          interactiveMessage: {
            body: {
              text: `Informasi Panel Created By ${m.pushName || m.sender.split("@")[0]}`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/znij9a.jpg' } }, { upload: rullz.waUploadToServer })),
                    title: '',
                    subtitle: "Silahkan Ambil Data Panel Anda Di Bawah",
                    hasMediaAttachment: false
                  }),
                  body: { text: txt },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Get Login",
                          id: `btn-copy-login`,
                          copy_code: global.domain
                        })
                      },
                      {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Get User",
                          id: `btn-copy-user`,
                          copy_code: panelname
                        })
                      },
                      {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Get Password",
                          id: `btn-copy-pass`,
                          copy_code: srvrpw
                        })
                      }
                    ]
                  }
                }
              ],
              messageVersion: 1
            }
          }
        }
      }
    },
    { quoted: m }
  );
  await rullz.relayMessage(buyer + "@s.whatsapp.net", msg.message, { messageId: msg.key.id });
}
break;
case "cadmimv1": {
  if (!isOwner && !isCreator) return xreply(msg.owner)
  let koma = q.split(',')
  if (koma.length < 3) return xreply("*Format Salah*\n.cadmimv1 name,target,password")
  let username = koma[0]
  let nomor = koma[1]
  let password = koma[2]
  let user = username.toString()
  let pw = password.toString()
  let buyer = nomor ? nomor.replace(/[^0-9]/g, "") : m.sender.replace("@s.whatsapp.net", "")
  let f = await fetch(domain + "/api/application/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + apikey
    },
    body: JSON.stringify({
      email: user + "@fuqi.mem",
      username: user,
      first_name: user,
      last_name: user,
      language: "en",
      root_admin: true,
      password: pw
    })
  })
  let data = await f.json()
  if (data.errors) return xreply(JSON.stringify(data.errors[0], null, 2))
  let users = data.attributes
  let txt = `TYPE: USER
ID: ${users.id}
USERNAME: ${users.username}
EMAIL: ${users.email}
NAME: ${users.first_name} ${users.last_name}
CREATED AT: ${users.created_at}`
  await rullz.sendMessage(m.chat, { text: txt })
  const msg = generateWAMessageFromContent(
    buyer + "@s.whatsapp.net",
    {
      viewOnceMessage: {
        message: {
          messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
          interactiveMessage: {
            body: {
              text: `Informasi Panel Created By ${m.pushName || m.sender.split("@")[0]}`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/znij9a.jpg' } }, { upload: rullz.waUploadToServer })),
                    title: '',
                    subtitle: "Silahkan Ambil Data Admin Panel Anda Di Bawah",
                    hasMediaAttachment: false
                  }),
                  body: { text: txt },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Get Login",
                          id: `btn-copy-login`,
                          copy_code: global.domain
                        })
                      },
                      {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Get User",
                          id: `btn-copy-user`,
                          copy_code: user
                        })
                      },
                      {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                          display_text: "Get Password",
                          id: `btn-copy-pass`,
                          copy_code: pw
                        })
                      }
                    ]
                  }
                }
              ],
              messageVersion: 1
            }
          }
        }
      }
    },
    { quoted: m }
  )
  await rullz.relayMessage(buyer + "@s.whatsapp.net", msg.message, { messageId: msg.key.id })
}
break;
case 'listsrvr': {
  if (!isOwner && !isCreator) return xreply(msg.owner)
  try {
    let res = await fetch(domain + "/api/application/servers", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + apikey
      }
    })
    let json = await res.json()
    if (!json.data || json.data.length === 0) return xreply("*Tidak ada server ditemukan di panel.*")
    let teks = `*~~ [ LIST SERVER V1 ] ~~*\nTotal: ${json.data.length} server\n\n`
    for (let i of json.data) {
      let srv = i.attributes
      teks += `╭─────────────\n`
      teks += `│ *Nama:* ${srv.name}\n`
      teks += `│ *ID:* ${srv.id}\n`
      teks += `│ *UUID:* ${srv.uuid.slice(0, 8)}...\n`
      teks += `│ *Node:* ${srv.node}\n`
      teks += `│ *User ID:* ${srv.user}\n`
      teks += `╰─────────────\n\n`
    }
    await rullz.sendMessage(m.chat, { text: teks.trim() }, { quoted: m })
  } catch (e) {
    xreply("*Gagal mengambil daftar server.*")
    console.log(e)
  }
}
break
case 'delsrvr': {
  if (!isOwner && !isCreator) return xreply(msg.owner)
  let text = args.join(" ");
  if (!text) return xreply(xample("ID Server"))
  let serverID = text.trim();
    let del = await fetch(`${domain}/api/application/servers/${serverID}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apikey
      }
    });
    if (del.status === 204) {
      xreply(`*Berhasil menghapus server dengan ID:* ${serverID}`);
    } else {
      let err = await del.json();
      xreply(`*Gagal menghapus server.*\n\n${JSON.stringify(err, null, 2)}`);
    }
}
break;
// Path: utils/case.js (atau sesuaikan)

case 'buatgiveaway': {
  if (!m.isGroup) return m.reply('Fitur hanya untuk grup!')
  if (!isAdmins && !isOwner) return m.reply('Hanya admin yang bisa menggunakan perintah ini!')

  let [nama, maks] = text.split('|')
  if (!nama || !maks) return m.reply(`Format salah!\nContoh: ${prefix + command} Hadiah Lebaran|5`)

  let dbPath = './lib/database/giveaway.json'
  if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify({}), 'utf-8')

  let db = JSON.parse(fs.readFileSync(dbPath))
  db[m.chat] = db[m.chat] || {}
  db[m.chat][nama.toLowerCase()] = {
    nama,
    maks: parseInt(maks),
    peserta: []
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))

  rullz.sendMessage(m.chat, {
    text: `🎉 *Nama Giveaway:* ${nama}\n👥 *Peserta Maksimal:* ${maks}\n\nSilakan kirim bukti untuk join (jika diminta) atau ketik *joinga Nama|Nomor Giveaway*`,
  }, { quoted: m })
}
break

case 'joinga': {
  const fs = require('fs')
  const dbPath = './lib/database/giveaway.json'
  const verifPath = './lib/database/verif.json'

  if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify({}))
  if (!fs.existsSync(verifPath)) fs.writeFileSync(verifPath, JSON.stringify({}))

  let db = JSON.parse(fs.readFileSync(dbPath))
  let verif = JSON.parse(fs.readFileSync(verifPath))

  // 🔍 Deteksi image dari private chat
  if (!m.isGroup && m.type === 'imageMessage') {
    verif[m.sender] = (verif[m.sender] || 0) + 1
    fs.writeFileSync(verifPath, JSON.stringify(verif, null, 2))

    if (verif[m.sender] >= 5) {
      await rullz.sendMessage(m.chat, {
        text: `✅ Kamu telah mengirim *${verif[m.sender]}* gambar.\nSilakan ketik *joinga Nama|No* untuk join giveaway.`,
      }, { quoted: m })
    } else {
      await rullz.sendMessage(m.chat, {
        text: `🖼️ Gambar diterima (${verif[m.sender]}/5)...`,
      }, { quoted: m })
    }
    return
  }

  // ⛔ Jika image dari grup, abaikan
  if (m.isGroup && m.type === 'imageMessage') return

  // 🔁 Proses perintah join
  if (!text.includes('|')) return m.reply(`Format salah!\nContoh: ${prefix + command} Rullz|1`)
  let [nama, nomor] = text.split('|')
  nama = nama.toLowerCase()

  let targetGroup = Object.keys(db).find(gid => db[gid][nama])
  if (!targetGroup) return m.reply('Giveaway tidak ditemukan.')

  let sesi = db[targetGroup][nama]

  if (sesi.peserta.find(p => p.id === m.sender)) return m.reply('Kamu sudah ikut giveaway ini.')

  if (sesi.peserta.length >= sesi.maks) return m.reply('Slot peserta sudah penuh.')

  if (!verif[m.sender] || verif[m.sender] < 5) {
    return m.reply(`Kamu belum mengirim bukti gambar yang cukup!\nSilakan kirim minimal 5 gambar di private chat.`)
  }

  sesi.peserta.push({
    id: m.sender,
    nama: nama,
    waktu: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
  })

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))

  await m.reply('✅ Kamu berhasil join giveaway!')

  await rullz.sendMessage(targetGroup, {
    text: `🎊 *Peserta Baru!*\n👤 *Nama:* ${pushname}\n🎁 *Giveaway:* ${sesi.nama}`,
    mentions: [m.sender]
  }, { quoted: m })
}
break

case 'listpeserta': {
  if (!text) return m.reply('Contoh: listpeserta 1')

  let dbPath = './lib/database/giveaway.json'
  if (!fs.existsSync(dbPath)) return m.reply('Belum ada giveaway.')

  let db = JSON.parse(fs.readFileSync(dbPath))
  let sesi = Object.values(db[m.chat] || {})[parseInt(text) - 1]

  if (!sesi) return m.reply('Giveaway tidak ditemukan.')

  let teks = `📋 *List Peserta Giveaway: ${sesi.nama}*\n\n`
  sesi.peserta.forEach((p, i) => {
    teks += `${i + 1}. @${p.id.split('@')[0]}\n`
  })

  rullz.sendMessage(m.chat, {
    text: teks,
    mentions: sesi.peserta.map(v => v.id)
  }, { quoted: m })
}
break
case 'resetga': {
  if (!isAdmins && !isOwner) return m.reply('Khusus admin!')
  let dbPath = './lib/database/giveaway.json'
  if (!fs.existsSync(dbPath)) return m.reply('Tidak ada data.')

  let db = JSON.parse(fs.readFileSync(dbPath))
  delete db[m.chat]
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))

  m.reply('✅ Semua giveaway grup ini telah direset.')
}
break
default:
// ============
if (budy.startsWith('=>')) {
  if (!isOwner && !isCreator) return
  try {
    const xreply = async (teks) => {
      return await rullz.sendMessage(m.chat, { text: teks }, { quoted: m });
    };
    await eval(`(async () => { ${budy.slice(2)} })()`);
  } catch (e) {
    await rullz.sendMessage(m.chat, { text: String(e) }, { quoted: fkontak });
  }
}

// ============
if (budy.startsWith('>')) {
  if (!isOwner && !isCreator) return
  try {
    let evaled = await eval(`(async () => { return ${budy.slice(1)} })()`);
    if (typeof evaled !== 'string') evaled = util.inspect(evaled);
    await rullz.sendMessage(m.chat, { text: evaled }, { quoted: m });
  } catch (err) {
    await rullz.sendMessage(m.chat, { text: String(err) }, { quoted: ftroli });
  }
}

// ============
if (budy.startsWith('$')) {
  if (!isOwner && !isCreator) return
  exec(budy.slice(1), (err, stdout, stderr) => {
    if (err) return rullz.sendMessage(m.chat, { text: String(err) }, { quoted: m });
    if (stderr) return rullz.sendMessage(m.chat, { text: String(stderr) }, { quoted: m });
    rullz.sendMessage(m.chat, { text: stdout }, { quoted: qtoko });
  });
}
// ============
if (budy.startsWith("rullz" || "Rull")) {
  xreply("Developer Gw Tuh")
}
    }
  } catch (err) {
    console.log("Terjadi Kesalahan Di Case", err)
    /*
    let indexPath = path.join(__dirname, './index.js')
    console.log(chalk.redBright("[SYSTEM] Menjalankan ulang index.js karena error di case..."))
    spawn('node', [indexPath], {
        stdio: 'inherit',
        shell: true
    });
    process.exit();
    */
 }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log('\x1b[1m\x1b[42m\x1b[30m [ INFO ] \x1b[0m\x1b[32m File %s telah diperbarui!\x1b[0m', file)
})
