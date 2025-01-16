# **Saipul-AI**

## **Deskripsi Proyek**
Saipul-AI adalah aplikasi web sederhana yang memungkinkan pengguna untuk mengajukan pertanyaan dan mendapatkan jawaban dari sebuah database JSON yang berisi pasangan pertanyaan dan jawaban. Aplikasi ini dilengkapi dengan berbagai fitur, seperti pencocokan fuzzy, kategori jawaban, suara, dark mode, dan feedback pengguna untuk meningkatkan kualitas interaksi.

Proyek ini dibangun menggunakan HTML, CSS, JavaScript, dan JSON sebagai database. Tujuan utama aplikasi ini adalah untuk memberikan jawaban yang cepat dan relevan terhadap pertanyaan pengguna dengan antarmuka yang sederhana dan responsif.

---

## **Fitur Utama**

1. **Pencocokan Fuzzy (Fuzzy Matching)**
   - Aplikasi menggunakan pustaka Fuse.js untuk mencocokkan pertanyaan dengan jawaban dalam database, meskipun terdapat variasi dalam ejaan atau kata-kata yang digunakan oleh pengguna.
   
2. **Kategori Jawaban**
   - Pengguna dapat memilih kategori (misalnya, "Teknologi" atau "Sejarah") untuk mempersempit pencarian jawaban sesuai dengan topik yang relevan.

3. **Suara Jawaban**
   - Aplikasi dapat mengucapkan jawaban secara otomatis menggunakan API Web Speech, memberikan pengalaman pengguna yang lebih interaktif.

4. **Dark Mode**
   - Fitur dark mode memungkinkan pengguna untuk beralih ke tampilan gelap untuk kenyamanan visual, terutama saat digunakan pada malam hari.

5. **Feedback Pengguna**
   - Pengguna dapat memberikan feedback apakah jawaban yang diberikan berguna atau tidak, membantu untuk meningkatkan kualitas jawaban di masa depan.

6. **Desain Responsif**
   - Aplikasi ini memiliki desain yang responsif, sehingga dapat diakses dengan nyaman di berbagai perangkat, baik desktop maupun mobile.

---

## **Persyaratan Sistem**

- **Web Browser**: Aplikasi ini dapat dijalankan di web browser modern seperti Google Chrome, Mozilla Firefox, atau Safari.
- **Internet**: Diperlukan koneksi internet untuk mengakses file JSON yang berisi database pertanyaan dan jawaban (jika tidak menggunakan server lokal).
- **Sistem Operasi**: Dapat dijalankan di berbagai sistem operasi seperti Windows, macOS, dan Linux.

---

## **Instalasi dan Penggunaan**

### **1. Unduh atau Clone Repositori**
Untuk memulai, unduh atau clone repositori ini ke komputer lokal Anda:
```bash
https://github.com/saipul12c/Saipul-AI.git
```

### **2. Menyiapkan File JSON**
Pastikan file `database.json` yang berisi pasangan pertanyaan dan jawaban sudah tersedia di folder `/data`. Anda dapat menambah atau mengedit pertanyaan dan jawaban sesuai kebutuhan.

### **3. Membuka Aplikasi**
Buka file `index.html` di browser pilihan Anda untuk menjalankan aplikasi.

### **4. Menggunakan Aplikasi**
- Masukkan pertanyaan pada kolom input di halaman utama.
- Pilih kategori jika diperlukan (misalnya, "Teknologi" atau "Sejarah").
- Klik tombol "Tanya" untuk mendapatkan jawaban.
- Aplikasi akan memberikan jawaban yang sesuai atau menyarankan pertanyaan lain jika tidak ada jawaban yang relevan.

---

## **Struktur Folder**

```
/my-ai-app
├── /assets
│   ├── /css
│   │   └── style.css        # Gaya halaman
│   ├── /images
│   │   └── logo.png         # (Opsional) Logo aplikasi
│   └── /js
│       └── app.js           # Logika JavaScript utama
├── /data
│   └── database.json        # Database pertanyaan dan jawaban (JSON)
├── index.html               # Halaman utama aplikasi
└── README.md                # Dokumentasi proyek
```

---

## **Pengembangan dan Kontribusi**

### **Menambahkan Pertanyaan dan Jawaban**
Untuk menambah pertanyaan dan jawaban, cukup edit file `data/database.json` dengan menambahkan objek baru yang berisi `question`, `answer`, dan `category`. Berikut adalah format yang digunakan:
```json
{
    "question": "Apa itu AI?",
    "answer": "AI adalah kecerdasan buatan yang diciptakan untuk meniru perilaku manusia.",
    "category": "Teknologi"
}
```

### **Menambahkan Kategori Baru**
Untuk menambahkan kategori baru, cukup tambahkan kategori baru di dropdown HTML dan pastikan kategori tersebut tercantum dalam setiap entri pertanyaan di `database.json`.

### **Mengaktifkan Fitur Suara**
Fitur suara menggunakan API Web Speech, yang mendukung browser modern. Jika Anda ingin menyesuaikan suara atau bahasa, Anda dapat mengonfigurasi `SpeechSynthesisUtterance` dalam file `app.js`.

### **Menyempurnakan Desain**
Jika Anda ingin memperbarui tampilan atau menambahkan elemen UI baru, Anda dapat mengedit file `style.css`. Pastikan untuk menguji responsivitas desain di berbagai ukuran layar.

### **Kontribusi**
Jika Anda ingin berkontribusi pada proyek ini, Anda bisa melakukan fork repositori ini, melakukan perubahan, dan mengirimkan pull request. Pastikan untuk mengikuti standar penulisan kode yang sudah ada dan menambahkan deskripsi tentang perubahan yang dilakukan.

---

## **Lisensi**

Aplikasi ini dilisensikan di bawah lisensi MIT. Anda bebas untuk menggunakan, mengubah, dan mendistribusikan kode ini dalam proyek Anda, dengan menyertakan salinan lisensi ini dalam distribusi Anda.

---

## **Penulis**

- **Nama Penulis**: [Muhammad Syaiful Mukmin]
- **Kontak**: [https://github.com/saipul12c]

---

# Saipul-AI
