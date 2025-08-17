import { handler } from '../..//message.js'
import { smsg } from './engine/smsg.js'
import baileys from '@whiskeysockets/baileys'
import qrcode from 'qrcode-terminal'
import chalk from 'chalk'
import pino from 'pino'
import fs from 'fs'
import readline from 'readline'

const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion
} = baileys

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const delay = (ms) => new Promise((res) => setTimeout(res, ms))

async function startConnect(mode) {
  const { state, saveCreds } = await useMultiFileAuthState('./session')
  const { version } = await fetchLatestBaileysVersion()

  console.log(chalk.greenBright('Mengecek Versi Tunggu Sebentar..'))
  await delay(3000)
  console.log(chalk.blueBright(`Versi Saat Ini ${version}`))

  const sock = makeWASocket({
  logger: pino({ level: 'fatal' }),
  version,
  auth: state,
  generateHighQualityLinkPreview: true,
  syncFullHistory: true,
  markOnlineOnConnect: true,
  browser: ["Ubuntu", "Chrome", "20.0.04"],
  getMessage: async (key) => {
    if (store) {
      const msg = await store.loadMessage(key.remoteJid, key.id)
      return msg?.message || undefined
    }
    return { conversation: "Pesan tidak ditemukan" }
  }
})

  sock.ev.on('connection.update', ({ qr }) => {
    if (mode === 'qrcode' && qr) {
      qrcode.generate(qr, { small: true })
    }
  })

  if (mode === 'pairing') {
    console.log(chalk.yellowBright("Jika Belum Paham Silahkan Baca README.md"))
    const phoneNumber = await question(chalk.redBright("Masukkan Nomor WhatsApp Aktif Anda: "))
    const code = await sock.requestPairingCode(phoneNumber)
    console.log(chalk.greenBright(`Kode Pairing: ${code}`))
  }

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('messages.upsert', async ({ messages }) => {
  const m = smsg(sock, messages[0])
  if (!m.text) return

  try {
    await handler(sock, m)
  } catch (err) {
    console.error(`Error di Message: ${err}`)
  }
})
}

if (!fs.existsSync('./session')) {
  const mode = await question(
    chalk.yellowBright("Silahkan Pilih Metode Koneksi") + "\n" +
    chalk.redBright("Ketik pairing untuk Pairing Code, ketik qrcode untuk QR Code") +
    `\n${chalk.greenBright("Menunggu pilihan: ")}`
  )
  await startConnect(mode.trim().toLowerCase())
  rl.close()
} else {
  await startConnect()
  rl.close()
}
