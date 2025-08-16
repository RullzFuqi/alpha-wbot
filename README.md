# Alpha WhatsApp Bot

[![Alpha WhatsApp Bot](https://t1.pixhost.to/thumbs/7856/630663339_e17d9838-d48b-4853-a15f-8439a0e5f4ed.jpg)](https://pixhost.to/show/7856/630663339_e17d9838-d48b-4853-a15f-8439a0e5f4ed.jpg)

Bot WhatsApp berbasis Baileys yang bisa dijalankan di **Termux**, **Proot-Distro**, **Root**, maupun **Server Pterodactyl**.

---

## Persyaratan
- **Posisi folder** harus di **`$HOME`** untuk pengguna **non-root**  
  Jika perangkat **root** atau menggunakan **proot-distro**, sesuaikan lokasi folder sesuai kebutuhan.
- **Koneksi internet stabil**
- **Node.js**, **Git**, **FFmpeg** dan **Yarn** sudah terpasang

---

## Instalasi di Termux (Non-root / Root / Proot-Distro)
Buka **Termux** lalu jalankan perintah berikut:

```bash
apt update && apt upgrade -y
apt install nodejs -y
apt install ffmpeg -y
apt install git -y

# Clone repository
git clone https://github.com/RullzFuqi/alpha-base
cd alpha-wbot

# Install dependencies
npm install
# atau jika pakai yarn
yarn install

# Jalankan bot
npm start
# atau
yarn start
```

---

## Pilih Metode Login
Saat bot dijalankan, Anda bisa memilih **QR Code** atau **Pairing Code**.

### 1. QR Code
- Pilih opsi QR Code
- Scan QR Code yang muncul di Termux menggunakan aplikasi WhatsApp di menu **Perangkat Tertaut**
- Setelah scan, bot akan otomatis terhubung

### 2. Pairing Code (**Rekomendasi**)
- Tidak perlu 2 perangkat
- Masukkan nomor WhatsApp aktif beserta kode negara  
  Contoh untuk Indonesia:
  ```
  6287xxxxxxxx
  ```
- Tekan Enter
- Akan muncul kode pairing di Termux
- Masukkan kode tersebut di WhatsApp → **Perangkat Tertaut** → **Tautkan perangkat**
- Tunggu beberapa detik, bot siap digunakan

---

## Instalasi via Server Pterodactyl
1. **Upload File**
   - Login ke panel Pterodactyl
   - Masuk ke server yang sudah dibuat
   - Gunakan menu **Upload** untuk mengunggah semua file bot
   - Atau gunakan **SFTP** untuk upload dari komputer

2. **Instalasi Dependensi**
   - Buka **Console** di panel Pterodactyl
   - Jalankan:
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
   - Sama seperti di Termux, pilih metode **QR Code** atau **Pairing Code**
   - Pairing Code direkomendasikan karena lebih cepat dan tidak perlu scan QR

---

## ⚠️ Catatan
- Jangan jalankan bot di dua perangkat secara bersamaan dengan session yang sama
- Backup folder `session` untuk menghindari login ulang
- Gunakan bot sesuai kebijakan WhatsApp

---

💡 **Tips:** Jika ingin menjalankan bot otomatis saat server restart, gunakan fitur **Startup Command** di Pterodactyl.

# Credit Alpha WhatsApp Bot

[![Credit Alpha WhatsApp Bot](https://t1.pixhost.to/thumbs/7856/630663340_makanya-dibaca-dongo_.jpg)](https://pixhost.to/show/7856/630663340_makanya-dibaca-dongo_.jpg)
