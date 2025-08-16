import * as baileys from '@whiskeysockets/baileys';

function smsg(conn, m) {
  const { messageTimestamp, key, message } = m;
  const type = message && Object.keys(message)[0];
  const content = type && message[type];

  const msg = {
    key: {
      remoteJid: key.remoteJid,
      fromMe: key.fromMe,
      id: key.id,
      participant: key.participant
    },
    messageTimestamp,
    type,
    message,
    isGroup: (key.remoteJid || '').endsWith('@g.us'),
    sender: key.fromMe ? (conn.user?.id || '') : (key.participant || key.remoteJid),
    chat: key.remoteJid,
    text:
      content?.conversation ||
      content?.extendedTextMessage?.text ||
      content?.buttonResponseMessage?.selectedButtonId ||
      content?.listResponseMessage?.singleSelectReply?.selectedRowId ||
      '',
    mentionedJid: Array.isArray(content?.extendedTextMessage?.contextInfo?.mentionedJid)
      ? content.extendedTextMessage.contextInfo.mentionedJid
      : [],
    quoted: content?.extendedTextMessage?.contextInfo?.quotedMessage
      ? (() => {
          const q = content.extendedTextMessage.contextInfo;
          const qm = q.quotedMessage;
          const qtype = Object.keys(qm)[0];
          return {
            key: {
              remoteJid: key.remoteJid,
              fromMe: false,
              id: q.stanzaId,
              participant: q.participant
            },
            message: qm,
            type: qtype,
            text:
              qm[qtype]?.conversation ||
              qm[qtype]?.extendedTextMessage?.text ||
              ''
          };
        })()
      : null
  };

  return msg;
}

export { smsg };