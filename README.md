## Logical 

Untuk menjalankan pengujian logis, ikuti langkah-langkah di bawah ini:

1. Pastikan Anda telah menginstal Node.js dan npm.
2. Buka terminal
3. Jalankan perintah berikut untuk memulai pengujian logis:
    [ npm run start ]

    Setelah menjalankan perintah di atas, Anda akan melihat output seperti berikut:

    == PALINDROME ==
    Input: x = 121
    Output: true
    try again? (y/n) : y
    Input: x = 22
    Output: true
    try again? (y/n) : n
    
# uji API

Untuk melakukan pengujian API, ikuti langkah-langkah di bawah ini:

[
npm install
]

# Database Configuration

Buat file .env dan tambahkan konfigurasi database sebagai berikut:

DATABASE_URL=mysql://root@localhost:3306/orenda

# Database Migration, Generation, and Seeding
Jalankan perintah CLI berikut untuk melakukan migrasi database;

1.npm run prisma:migrate
2.npm run prisma:generate
3.npm run prisma:seed

# Running the Server
Setelah menyelesaikan semua penyiapan database, jalankan server dengan perintah berikut:

(npm run dev)

# Testing All API
Anda dapat menguji semua titik akhir API dengan mengakses direktori src/http, yang terdiri dari:

`Admins`
`Customers`
`Products`
`Orders`

Jelajahi setiap direktori untuk menguji fungsionalitas API terkait yang terkait dengan pelanggan, produk, dan pesanan.

# Testing Frontend and Backend

1. Jalankan perintah backend:
    ~ npm run dev ~


2. Jalankan perintah frontend:
    ~ npm run dev ~











