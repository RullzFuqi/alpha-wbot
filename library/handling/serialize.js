import baileys from '@whiskeysockets/baileys'
const {
  prepareWAMessageMedia,
  makeCacheableSignalKeyStore,
  jidDecode,
  downloadContentFromMessage,
  generateWAMessageFromContent,
  generateForwardMessageContent,
  generateWAMessage,
  getAggregateVotesInPollMessage,
  delay,
  BufferJSON,
  getContentType,
  proto
} = baileys;


/*
 * Message & User Handling
 * Credit RullzFuqi
*/

export default (m) => {
  const msg = m?.message;
  if (!msg) return '.';

  if (typeof m.text === 'string') return m.text;
  if (msg.conversation) return msg.conversation;
  if (msg.extendedTextMessage?.text) return msg.extendedTextMessage.text;
  if (msg.imageMessage?.caption) return msg.imageMessage.caption;
  if (msg.videoMessage?.caption) return msg.videoMessage.caption;
  if (msg.documentMessage?.caption) return msg.documentMessage.caption;
  if (msg.audioMessage?.caption) return msg.audioMessage.caption;

  return '.';
};

export const isValidPrefix = (text) => /^[./$]/.test(text);
export const isCommand = (budy) => isValidPrefix(budy);
export const getUser = (m) => m.key.remoteJid;
export const isGroup = (m) => m.key?.remoteJid?.endsWith("@g.us");
export const getSender = (m) => 
  isGroup(m) 
    ? (m.key.participant || m.participant) 
    : getUser(m);
export const args = (budy) => budy.trim().split(/ +/).slice(1);
export const pushname = (m) => m.pushName || "Someone";
export const text = (args) => args.join(" ");
export const quoted = (m) => 
  m.quoted 
    ? m.quoted 
    : m.message?.extendedTextMessage?.contextInfo?.quotedMessage || null;