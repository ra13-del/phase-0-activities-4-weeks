---
path: '/week-4/challenges/anchor-space-defender'
title: 'Space Defender'
---

# SPACE DEFENDER

### Objective

- Mampu memecahkan masalah yang diberikan
- Mampu membuat array multidimensi
- Mampu mengakses array multidimensi
- Mampu menggunakan for loop
- Mampu menggunakan while loop
- Mampu mengembalikan suatu hasil dari sebuah function dan menggunakannya di function lain
- Mampu mengimplementasikan DOM

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test` (Maksimal nilai 94)

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti `shift()`, `unShift()`, `push()`, dan `pop()`

### HINTS

- Nama function haruslah `findOddMultipleThree`, `generateBoard`, `randomSpawn`, `gameBoard`, `hitTarget` dan **tidak boleh diganti dengan nama function lainnya**. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah
- Jangan menghapus, comment ataupun mengedit bagian module.exports.
- Untuk mempermudah pengerjaan dan pengetesan kamu dapat meng-comment terlebih dahulu kode DOM.
- Kerjakan solusi kamu pada file `script.js` terlebih dahulu.

---

## Directions

Pada repo ini kalian diberikan beberapa file yaitu `index.html`, `script.js`, dan `style.css`, ketiga file ini digunakan untuk membuat sebuah game sederhana. Game yang akan dibuat adalah game semacam _space invaders_.
Pada Challenge ini kalian diperintahkan untuk menulis program pada `script.js` untuk membuat game stage berbentuk persegi dan menempatkan musuh secara random didalamnya, dimana panjang stage dan jumlah musuh diinputkan saat awal game dijalankan di browser. Berikut merupakan function-function yang akan digunakan untuk mengerjakan program-program yang diminta.

### Release 1 - `findOddMultipleThree`

1. Function ini menerima parameter `input` yang bertipe data number dan mengembalikan hasil bertipe number pula.
2. Function ini berfungsi untuk mencari angka kelipatan 3 yang ganjil berdasarkan inputan yang dimasukan.
3. Jika `input` lebih dari 27 maka `input` dibulatkan menjadi sama dengan 27.
4. Contoh:

```
findOddMultipleThree(4) // hasilnya adalah 9 (karena 9 adalah angka kelipatan 3 yang ganjil setelah 4)
findOddMultipleThree(12) // hasilnya adalah 15 (karena 15 adalah angka kelipatan 3 yang ganjil setelah 12)
findOddMultipleThree(21) // hasilnya adalah 21 (karena 21 sendiri merupakan angka keliapatan 3 yang ganjil)
```

### Release 2 - `generateBoard`

1. Function ini menerima parameter `length` yang bertipe data number dan mengembalikan sebuah array multidimensi.
2. Function ini berfungsi membuat array multidimensi dengan jumlah baris dan kolom yang sama. Semua anggota array yang dalam diisi oleh `spasi` kecuali pada array terakhir, elemen tengahnya diisi oleh huruf `o`.
3. Contoh:

```
generateBoard(9)
/*
[
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "o", " ", " ", " ", " "]
]
*/
```

### Release 3 - `randomSpawn`

1. Function ini menerima dua parameter yaitu `enemyTotal` yang bertipe data number dan `array` yang merupakan array multidimensi.
2. Function ini mengembalikan sebuah array multidimensi dengan jumlah baris 1/3 dari length `array` dan diisi oleh huruf `x` secara random dengan jumlah sebanyak `enemyTotal`.
3. Jika `enemyTotal` lebih besar dari 1/3 jumlah semua elemen pada `array` maka `enemyTotal` dibulatkan mejadi sama dengan 1/3 jumlah elemen `array`.
4. Contoh:

```
let enemyTotal = 15;
let enemyTotal2 = 30
let array = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "o", " ", " ", " ", " "]
]

randomSpawn(enemyTotal, array) // x berjumlah 15 dan ditempatkan secara random
/*
[
  ["x", "x", " ", "x", " ", "x", "x", " ", "x"],
  [" ", "x", " ", "x", " ", "x", " ", "x", " "],
  ["x", " ", "x", "x", "x", " ", " ", " ", "x"],
]

*/
randomSpawn(enemyTotal2, array)
/*
[
  ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
]
note: karena enemyTotal2 lebih besar dari 1/3 jumlah semua elemen array maka enemyTotal = 27 (1/3 jumlah semua elemen array)
*/
```

### Release 4 - `gameBoard`

1. Function ini merupakan main function dimana function-function sebelumnya digunakan.
2. Function ini menerima 2 parameter yaitu `boardLength` dan `enemyTotal` yang keduanya bertipe data number.
3. Function ini mengembalikan array multidimensi dengan baris dan kolom sebanyak angka dengan kelipatan 3 yang ganjil yang diisi oleh huruf `x` secara random dan huruf `o` dibagian tengah array terakhir.
4. Contoh:

```
gameBoard(4, 15)
/*
[
  ["x", "x", " ", "x", " ", "x", "x", " ", "x"],
  [" ", "x", " ", "x", " ", "x", " ", "x", " "],
  ["x", " ", "x", "x", "x", " ", " ", " ", "x"],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "o", " ", " ", " ", " "]
]
*/
```

### Release 5 - `hitTarget`

1. Function ini menerima 2 paramater yaitu `enemyIndex` dan `bulletIndex` dimana keduanya bertipe data string.
2. Function ini berfungsi mengecek apakah `enemyIndex` sama dengan `bulletIndex`, apabila sama maka function ini akan menyalakan _sound effect_ explosion.
3. Untuk dapat menyalakan _sound effect_ explosion bisa implementasikan method DOM berupa play(). Kalian bisa buka [link ini](https://www.w3schools.com/jsref/met_audio_play.asp) untuk melihat referensi terkait method play().
