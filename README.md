# 🌐 Alpha WhatsApp Bot

[![Alpha WhatsApp Bot](https://t1.pixhost.to/thumbs/7856/630663339_e17d9838-d48b-4853-a15f-8439a0e5f4ed.jpg)](https://pixhost.to/show/7856/630663339_e17d9838-d48b-4853-a15f-8439a0e5f4ed.jpg)

Bot WhatsApp berbasis **Baileys** yang bisa dijalankan di:
- Termux
- Proot-Distro
- Rooted Device
- Server Pterodactyl

---

## 📌 Persyaratan

| Komponen | Keterangan |
|----------|------------|
| Posisi folder | Untuk pengguna **non-root**, simpan di `$HOME` |
| Koneksi | Internet stabil |
| Software wajib | **Node.js**, **Git**, **FFmpeg**, **Yarn** (opsional) |

---

## 🚀 Instalasi di Termux / Proot-Distro / Root

Jalankan perintah berikut di Termux:

```bash
apt update && apt upgrade -y
apt install nodejs ffmpeg git -y

# Clone repository
git clone https://github.com/RullzFuqi/alpha-base
cd alpha-wbot

# Install dependencies
npm install
# atau
yarn install

# Jalankan bot
npm start
# atau
yarn start
```

---

## 🔑 Login ke WhatsApp

Saat bot dijalankan, Anda dapat memilih metode login:

### 1️⃣ QR Code
1. Pilih **QR Code** saat diminta.
2. Scan kode QR di Termux melalui WhatsApp → **Perangkat Tertaut**.
3. Bot otomatis terhubung.

### 2️⃣ Pairing Code (**Rekomendasi**)
1. Masukkan nomor WhatsApp aktif beserta kode negara.  
   Contoh:  
   ```
   6287xxxxxxxx
   ```
2. Tekan **Enter**.  
3. Pairing code muncul di Termux.  
4. Masukkan kode di WhatsApp → **Perangkat Tertaut** → **Tautkan perangkat**.  
5. Bot siap digunakan.

---

## 🖥️ Instalasi via Server Pterodactyl

1. **Upload File**
   - Login ke panel Pterodactyl → pilih server
   - Upload file bot melalui **Upload** atau **SFTP**

2. **Instalasi Dependensi**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan Bot**
   ```bash
   npm start
   # atau
   yarn start
   ```

4. **Login**
   - Pilih metode **QR Code** atau **Pairing Code** (disarankan Pairing Code)

---

## ⚠️ Catatan Penting

- Jangan gunakan **session yang sama** di lebih dari satu perangkat.
- Backup folder `session` untuk menghindari login ulang.
- Ikuti kebijakan penggunaan WhatsApp agar akun tetap aman.
- Untuk auto-start di Pterodactyl, gunakan **Startup Command**.

---

## 👨‍💻 Credits

[![Credit Alpha WhatsApp Bot](https://t1.pixhost.to/thumbs/7856/630663340_makanya-dibaca-dongo_.jpg)](https://pixhost.to/show/7856/630663340_makanya-dibaca-dongo_.jpg)

---

✨ **Alpha WhatsApp Bot** dibuat untuk memudahkan otomasi WhatsApp dengan setup fleksibel dan mudah dijalankan di berbagai platform.
