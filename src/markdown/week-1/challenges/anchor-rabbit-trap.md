---
path: '/week-1/challenges/anchor-rabbit-trap'
title: 'Rabbit Trap'
---

# Rabbit Trap

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test dan memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya di perbolehkan menggunakan built-in function untuk konversi data bertipe string ke number atau sebaliknya, seperti toString(), Number(), dll.

### HINTS

- Variable `tiles`, `power` dan `batteries` **tidak boleh diganti dengan nama lain** dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.

---

## Objectives

- Mampu menggunakan `arithmetic`, `comparison`, dan `strict equality/inequality operator`.
- Mampu menggunakan `string literal/string concatenation`.
- Mengerti logika `conditional`.
- Mampu menggunakan `switch operator`.
- Mengerti logika `looping`.
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` di dalam sebuah masalah.

## Directions

Kelinci pada challenge ini adalah sebuah droid dan akan dituliskan sebagai kelinci.
Diberikan dua variabel yaitu `tiles`, dan `batteries`.
1. Variabel `tiles` bertipe data **string** berisi karakter-katakter berikut yang direpresentasikan sebagai gambaran awal (dua dimensi) program. Berikut adalah keterangan masing-masing karakternya:
  - `'S'` = Posisi awal seekor 🐰 kelinci dan **akan selalu berada di index pertama**,
  - `'_'` = Satu buah ubin,
  - `'L'` = Trampolin yang membuat kelinci terlempar ke kiri
  - `'R'` = Trampolin yang membuat kelinci terlempar ke kanan
  - `'C'` = Wortel adalah tujuan akhir si kelinci dan **akan selalu berada pada index kedua terakhir**,
  - `'T'` = Kandang jebakan dan **akan selalu berada pada index terakhir**.
2. Variabel `batteries` bertipe data string yang direpresentasikan sebagai informasi kumpulan sisa daya pada sebuah baterai yang terpasang pada kelinci. Berikut adalah keterangan untuk masing-masing karakternya:
  - `'F'` = Daya baterai penuh dan bernilai 2 (F: Full)
  - `'H'` = Daya baterai sisa setengah dan bernilai 1 (H: Half)
  - `'E'` = Daya baterai habis dan bernilai 0 (E: Empty)
  - `'B'` = Baterai rusak sehingga bernilai -1 (B: Broken)
3. Variable `power` bertipe data **number** yang direpresentasikan sebagai jarak maksimal satu lompatan seekor kelinci. Nilainya akan ditentukan berdasarkan nilai variabel `batteries`.

Buatlah sebuah program yang dapat menghitung `power` dari kelinci dan mencatat lokasi-lokasi (index/es) yang dilalui oleh kelinci serta kondisi akhir dari kelinci apakah berhasil mendapatkan wortel atau masuk ke kandang jebakan dengan ketentuan sebagai berikut:

1. Secara normal kelinci bergerak/melompat dari kiri ke kanan dengan `power` maksimal.
2. Jika Variabel `power` bernilai negatif, maka output pada console adalah `Yah, baterainya banyak yang rusak!`.
3. Jika Variabel `power` bernilai bukan positif atau bukan negatif, maka output pada console adalah `Hmm, droid-nya kurang daya!`.
4. Jika kelinci menginjak trampolin `'L'` maka posisi kelinci akan terlempar ke belakang (ke kiri) sebanyak `power` minus 1. 
5. Jika kelinci menginjak trampolin `'R'` maka posisi kelinci akan terlempar ke depan (ke kanan) sebanyak `power` plus  2. 
6. Kelinci dapat melompat lebih kecil dari `power` jika lompatan terakir dapat menjangkau posisi wortel.
7. Jika kelinci terlempar ke posisi di sebelah kanan dari kandang jebakan maka kelinci dianggap masuk ke kandang jebakan.

### Notes
1. Output (console.log) harus berada di baris terakhir dan harus dilakukan satu kali saja.
2. Gambaran `tiles` secara real time tidak perlu dibuat.
3. Jika tempat landing setelah terlempar dari trampolin adalah sebuah trampolin. Maka efek trampolin di tempat landing tersebut tidak berfungsi.
4. Variabel `power` harus kamu _declare_ sendiri.

### Examples
**Ilustrasi untuk contoh 1**
![enter image description here](https://i.imgur.com/INLRZt8.gif)

```js
// CONTOH 1
const batteries = "FFEEBB";
const tiles = "S_R_CT";
/*
Penjelasan:
- Total power adalah 2.
- Lompatan pertama menginjak trampolin R maka kelinci terlempar ke index 6 dan masuk jebakan.

Output:
"Kelinci melewati rute: 0-2-6. Dan terperangkap jebakan!"
*/

// CONTOH 2
const batteries = "FFEEBB";
const tiles = "S_L_CT";
/*
Penjelasan:
- Total power adalah 2.
- Lompatan pertama menginjak trampolin L maka kelinci terlempar ke index 1.
- Lompatan kedua kelinci berada di index 3.
- Lompatan ketiga kelinci berhasil mendapatkan wortel.

Output:
"Kelinci melewati rute: 0-2-1-3-4. Dan berhasil mendapatkan wortel!"
*/

// CONTOH 3
const batteries = "FFEEBB";
const tiles = "S_R___RCT";
/*
Penjelasan:
- Total power adalah 2.
- Lompatan pertama menginjak trampolin R maka kelinci terlempar ke index 6. 
  Walaupun index ke 6 adalah trampolin, efek trampolinnya tidak bekerja karena kelinci sampai disana akibat terlempar BUKAN karena melompat.
- Lompatan kedua kelinci berhasil mendapatkan wortel.

Output:
"Kelinci melewati rute: 0-2-6-7. Dan berhasil mendapatkan wortel!"
*/
```

Gantilah value pada variable `batteries` dan `tiles` dalam file `index.js` dengan beberapa test case dibawah ini:

```JS
const batteries = "FEEBBB"; // Yah, baterainya banyak yang rusak!
const batteries = "FEEBB"; // Hmm, droid-nya kurang daya!

const batteries = "FFEEBBHHB";
const tiles = "S________CT"; // Kelinci melewati rute: 0-3-6-9. Dan berhasil mendapatkan wortel!
const tiles = "S__R_____CT"; // Kelinci melewati rute: 0-3-8-9. Dan berhasil mendapatkan wortel!
const tiles = "S__L_____CT"; // Kelinci melewati rute: 0-3-1-4-7-9. Dan berhasil mendapatkan wortel!
const tiles = "S__R____RCT"; // Kelinci melewati rute: 0-3-8-9. Dan berhasil mendapatkan wortel!
const tiles = "S_____R__CT"; // Kelinci melewati rute: 0-3-6-11. Dan terperangkap jebakan!
```