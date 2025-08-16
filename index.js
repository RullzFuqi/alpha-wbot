const chalk = require('chalk');
console.clear();
console.log(chalk.bgHex('#ff0000').white.bold('Terminal Has Been Cleared'));
require('./setting');
const {
  default: makeWASocket,
  makeInMemoryStore, 
  BufferJSON,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  Browsers,
  proto,
  makeCacheableSignalKeyStore,
  jidDecode,
  generateWAMessageFromContent,
  downloadContentFromMessage,
  delay,
  PHONENUMBER_MCC,
  getAggregateVotesInPollMessage,
  generateForwardMessageContent,
  generateMessageID,
  getContentType,
  prepareWAMessageMedia
} = require('@whiskeysockets/baileys');
const pino = require('pino');
const axios = require('axios');
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const FileType = require('file-type');
const BodyForm = require('form-data');
const { Boom } = require('@hapi/boom');
const { 
   imageToWebp,     
   videoToWebp, 
   writeExifImg, 
   writeExifVid,
   addExif
} = require('./lib/exif');
const { 
   smsg, 
   sleep, 
   getBuffer
} = require('./lib/myfunction');

const pairingCode = true;

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve);
    });
};


async function rullzstart() {
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState("./session");
    const rullz = makeWASocket({
        logger: pino({
            level: "fatal"
        }),
        printQRInTerminal: !pairingCode,
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });
    
    if (pairingCode && !rullz.authState.creds.registered) {
      console.log(chalk.cyanBright(`
             [ RullzFuqi Ganteng Parah ]
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠷⠛⠉⠉⣉⣉⡉⠉⠙⠛⠿⣾⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠟⢉⡤⣶⠺⣅⠎⠈⢧⡠⠊⢻⠀⣢⣄⡙⠻⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⢁⠐⣫⠗⠋⢀⡰⡀⠀⠀⠀⠀⠈⠊⠁⠹⠏⢑⡌⠻⣿⣿⣿
⣿⣿⣿⣿⣿⡟⢰⠇⢹⡏⠀⢠⠶⡵⠄⠀⠀⡄⢰⠀⢀⠀⢠⡏⠈⠻⣦⠈⢿⣿
⣿⣿⣿⣿⣿⢁⠇⢀⡿⡆⡲⢻⣽⡇⢀⠀⣠⡇⣸⠀⣺⢢⣼⢸⠀⠀⠙⣷⠘⣿
⣿⣿⣿⣿⡏⢸⠀⢸⠞⠉⠁⠈⠁⠁⠀⠀⠀⠈⠉⠒⠉⡏⢷⢸⠀⠀⠀⣹⡆⢹
⣿⣿⣿⣿⠃⡇⢃⣿⢀⣰⣚⣓⡀⠀⠀⠀⠀⠀⣐⣒⣦⠄⠀⠙⠀⠀⠀⢿⢡⢸
⣿⣿⣿⣿⡰⡸⢸⡿⠟⠛⠛⠛⢁⠀⠀⠀⠀⠀⠛⠛⠻⠿⣷⣾⢄⠃⢀⢸⠈⢰
⣿⣿⣿⣿⡷⢁⣿⡁⠀⠀⠀⠀⠈⠒⠒⠒⠒⠁⠀⠀⠀⠀⢀⢃⣾⠀⢸⣧⡇⣸
⣿⣿⣿⣿⣧⣸⠿⡘⢦⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⢟⣇⠀⣟⠜⢹⣿
⣿⣿⣿⣿⣿⣿⣆⢱⡘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⣿⢇⠾⡘⠸⢁⣰⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣆⢷⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⣵⢣⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣾⣿⣿⣿⣿⣿⣿⣿

${chalk.bgHex('#00008b').white.bold('【 Fuqi Multi - Device Botzz By RulzFuqi 】')}
`));
        const phoneNumber = await question(chalk.bgHex('#ff0000').white.bold('ཌ Please enter a number starting with 62 ད'));
        const code = await rullz.requestPairingCode(phoneNumber.trim());
        console.log(`[ Its Your Pairing Code ] : ${code}`);
    }
    store.bind(rullz.ev);
    rullz.ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            if (!rullz.public && mek.key.remoteJid !== global.owner + "@s.whatsapp.net" && !mek.key.fromMe && chatUpdate.type === 'notify') return;
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
            m = smsg(rullz, mek, store);
            require("./case")(rullz, m, chatUpdate, store);
        } catch (err) {
            console.log(err);
        }
    });
    rullz.public = !global.status;
    
    rullz.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };
    
    rullz.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = rullz.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            };
        }
    });
    
    rullz.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };
    
    rullz.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };
    
    rullz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
  const quoted = message.msg || message;
  const mime = quoted.mimetype || '';
  const messageType = (message.mtype || mime.split('/')[0]).replace(/Message/gi, '');
  const stream = await downloadContentFromMessage(quoted, messageType);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  const type = await FileType.fromBuffer(buffer); 
  if (!type) throw new Error('Gagal mendeteksi tipe file.');
  const trueFileName = attachExtension ? 
    `./lib/tmp/${filename ? filename : Date.now()}.${type.ext}` : 
    filename;
  await fs.promises.writeFile(trueFileName, buffer);
  return trueFileName;
};

    
    rullz.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionClosed || reason === DisconnectReason.connectionLost || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut) {
                rullzstart();
            } else if (reason === DisconnectReason.loggedOut) {} else {
                rullz.end(`Unknown Disconnect Error : ${reason}|${connection}`);
            }
        } else if (connection === 'open') {
rullz.sendMessage(global.creator+'@s.whatsapp.net', {text: "ʜɪ ᴅᴇᴠ, 👋\nʀᴜʟʟᴢ ʙᴏᴛ sᴜᴄᴄᴇs ᴄᴏɴɴᴇᴄᴛᴇᴅ\nᴅᴏɴᴛ ғᴏʀɢᴇᴛ ғᴏʟʟᴏᴡ ᴍʏ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ\nhttps://whatsapp.com/channel/0029Vb7gR6V8V0tjGjPGpk0j"});
console.log(chalk.bgHex('#fff000').white.bold('\n\nCr By : [ Fuqi - Team ]\n\n');
);
        }
    });
    



sock.ev.on('group-participant-update', async (update) => {
if (!global.welcome) = return;

async function sendGroupUpdate(sock, groupId, text, mentionedJids = []) {
  const msg = generateWAMessageFromContent(
    groupId,
    {
      extendedTextMessage: {
        text: text,
        contextInfo: {
          mentionedJid: mentionedJids,
          externalAdReply: {
            title: "Powered By RullzFuqi",
            body: "Klik Untuk Gabung Marga Fuqi",
            thumbnailUrl: "https://files.catbox.moe/s58hf9.jpg", 
            mediaType: 1,
            sourceUrl: "https://chat.whatsapp.com/J71XBzKbrUM4v6sSlrUzE1",
            renderLargerThumbnail = true
          }
        }
      }
    },
    { quoted: null }
  );
  await sock.relayMessage(groupId, msg.message, { messageId: msg.key.id });
}
  const { id: groupId, participants, action, author } = update;
  const groupMetadata = await sock.groupMetadata(groupId);
  const groupName = groupMetadata.subject;

  for (const participant of participants) {
    const targetJid = participant;
    const targetNumber = targetJid.split('@')[0];
    const targetName = (await sock.onWhatsApp(targetJid))[0]?.pushname || targetNumber;

    const adminJid = author || update.admin;
    const adminNumber = adminJid?.split('@')[0] || 'System';
    const adminName = adminJid ? (await sock.onWhatsApp(adminJid))[0]?.pushname || adminNumber : 'System';

    let message = "";
    let mentionedJids = [targetJid];

    switch (action) {
      case 'add':
        message = `*${targetName}* (@${targetNumber}) ditambahkan ke *${groupName}*.\nSelamat datang!`;
        break;

      case 'remove':
        message = `${targetName}* (@${targetNumber}) dikeluarkan dari *${groupName}*.\n${adminName ? `Oleh: @${adminNumber}` : ''}`;
        if (adminJid) mentionedJids.push(adminJid);
        break;

      case 'promote':
        message = `*${targetName}* (@${targetNumber}) sekarang **ADMIN** di *${groupName}*.\nDipromosikan oleh: @${adminNumber}`;
        mentionedJids.push(adminJid);
        break;

      case 'demote':
        message = `*${targetName}* (@${targetNumber}) diturunkan dari **ADMIN** di *${groupName}*.\nOleh: @${adminNumber}`;
        mentionedJids.push(adminJid);
        break;
    }

    if (message) await sendGroupUpdate(sock, groupId, message, mentionedJids);
  }
});

  rullz.ev.on('creds.update', saveCreds)
    rullz.sendText = async (jid, text, quoted = 'rullz', options) => {
        rullz.sendMessage(jid, {
            text: text,
            ...options
        },{ quoted });
    }
    return rullz
}
rullzstart();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`File ${_filename} has been changed`));
    delete require.cache[file];
    require(file);
});