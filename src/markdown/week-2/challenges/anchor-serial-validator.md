---
path: '/week-2/challenges/anchor-serial-validator'
title: 'Serial Validator'
---

# Serial Validator

## Objectives

- Mampu memecahkan masalah yang diberikan.
- Mampu mengubah tipe data **string** menjadi **number**.
- Mampu menggunakan operator aritmatika dan perbandingan.
- Mampu menggabungkan konsep _looping_ / _iteration_ dan _conditional_.
- Mampu membuat **array** dari **string** tertentu dan memanipulasi **array**.
- Mengerti keterhubungan satu function dengan function lainnya.
- Mengerti cara melemparkan data yang dikembalikan dari satu function kemudian digunakan sebagai parameter function lain.

### Notes

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### Restriction

- Tidak boleh menggunakan built-in function

### Hints

- Nama function haruslah `removeSpaces`, `getEvenRight`, `double`, `minusNine`, `isSumModTen`
  dan `serialValidator` dan **tidak boleh diganti dengan nama function lainnya**. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

**Serial Validator**

Diberikan sebuah function `serialValidator` yang menerima satu parameter bertipe data string. Function ini berfungsi untuk melakukan pengecekan apakah string yang menjadi parameter adalah sebuah serial number yang valid. Berikut adalah proses atau cara kerja untuk function `serialValidator`:

1. Panjang string harus minimal 9 karakter.
2. Spasi yang ada pada string akan di-_remove_ dahulu. Gunakan function `removeSpaces`.
3. Dari paling belakang ke paling depan ambil setiap angka ke dua. Gunakan function `getEvenRight`.
4. Kalikan semua angka yang dihasilkan proses nomor 3 dengan bilangan dua. Gunakan function `double`.
5. Untuk semua angka pada proses nomer 4, jika angka tersebut lebih besar dari 9 maka angka tersebut dikurangi 9. Gunakan function `minusNine`.
6. Jumlahkan semua angka pada proses nomer 5, kemudian cek apakah hasil penjumlah merupakan kelipan 10. Gunakan function `isSumModTen`.

Berikut adalah kriteria function `serialValidator`:

- Harus memanfaatkan function `removeSpaces`, `getEvenRight`, `double`, `minusNine` dan `isSumModTen` dan dipanggil di dalam function `serialValidator` secara berurutan.
- Function akan mengembalikan boolean berdasarkan hasil pada proses nomer 6.
- Function akan mengembalikan string `Harus lebih dari 9 karakter` jika paramter string yang diberikan panjangnya kurang dari 9 karakter.

Perhatikan contoh berikut:

```js
function removeSpaces(str) {
  // Your code here
}

function getEvenRight(str) {
  // Your code here
}

function double(arr) {
  // Your code here
}

function minusNine(arr) {
  // Your code here
}

function isSumModTen(arr) {
  // Your code here
}

function serialValidator(str) {
  // Your code here
}

console.log(serialValidator("72 75 86 68")); // true
console.log(serialValidator("124 765 876 678")); // false
console.log(serialValidator("4447 6228 6843 6361")); // true
console.log(serialValidator("3417 1218 1813 1311")); // true
console.log(serialValidator("1234")); // Harus lebih dari 9 karakter
```

**Remove Space**

Diberikan sebuah function `removeSpaces` yang menerima satu parameter **string**. Dimana function ini akan meremove setiap empty space (spasi) sehingga kata-kata yang terpisah menjadi tersambung. Output dari function ini bertipe data **string**. Perhatikan contoh berikut:

```js
function removeSpaces(str) {
  // Your code here
}

console.log(removeSpaces("72 75 86"); // 727586
console.log(removeSpaces("124 765"); // 124765
```

**Get Even Right**

Diberikan sebuah function `getEvenRight` yang menerima satu parameter **string**. Dimana function ini akan mengambil semua angka ke dua dari belakang ke depan. Output dari function ini bertipe data **array**. Perhatikan contoh berikut:

```js
function getEvenRight(str) {
  // Your code here
}

console.log(getEvenRight("727586")); // [8, 7, 7]
// Prosesnya :            |^|^|^
//                        3 2 1

console.log(getEvenRight("1124765")); // [6, 4, 1]
// Prosesnya :            ^|^|^|^
//                         3 2 1
```

**Double**

Diberikan sebuah function `double` yang menerima satu parameter bertipe data **array**. Dimana function ini akan menggandakan setiap angka pada parameter. Output dari function ini bertipe data **array**. Perhatikan contoh berikut:

```js
function double(arr) {
  // Your code here
}

console.log(double([8, 7, 7])); // [16, 14, 14]
console.log(double([6, 4, 1])); // [12, 8, 2]
```

**Minus Nine**

Diberikan sebuah function `minusNine` yang menerima satu parameter bertipe data **array**. Dimana function ini akan mengurangi 9 setiap angka pada parameter yang lebih dari 9. Output dari function ini bertipe data **array**. Perhatikan contoh berikut:

```js
function minusNine(arr) {
  // Your code here
}

console.log(minusNine([16, 14, 14])); // [7, 5, 5]
console.log(minusNine([12, 8, 2])); // [3, 8, 2]
```

**Is Sum Modulo Ten**

Diberikan sebuah function `isSumModTen` yang menerima satu parameter bertipe data **array**. Dimana function ini akan menjumlahkan setiap angka kemudian melakukan pengecekan apakah hasil penjumlahan merupakan angka kelipatan 10. Output dari function ini bertipe data **boolean**. Perhatikan contoh berikut:

```js
function isSumModTen(arr) {
  // Your code here
}

console.log(isSumModTen([7, 5, 5, 3])); // true
console.log(isSumModTen([2, 2, 2, 2, 2])); // true
console.log(isSumModTen([3, 8, 2])); // false
```
