---
path: '/week-1/challenges/anchor-number-to-symbol'
title: 'Number to Symbol'
---

# Number to Symbol

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya di perbolehkan menggunakan built-in function untuk konversi data bertipe string ke number atau sebaliknya, seperti toString(), Number(), dll.

### HINTS

- Variable `numbers` **tidak boleh diganti dengan variabel lain** dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.
- Implementasikan nested looping di soal ini ya, untuk mempermudah kode kalian ;)

---

## Objectives

- Mampu mengubah tipe data number menjadi string, maupun sebaliknya
- Mengerti logika `looping` dan `nested looping`
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah

## Directions

Diberikan sebuah variabel `numbers` bertipe **string** yang berisi kumpulan angka. Buatlah sebuah program yang akan merubah angka-angka tersebut menjadi sebuah symbol dengan ketentuan sebagai berikut:

1. Jika terdapat empat angka semisalnya `"3214"` maka output symbol nya akan dibuat menjadi 4 baris
2. Setiap barisnya akan dibuat menjadi symbol `#` atau `@`.
   - Jika angka tersebut adalah angka ganjil maka symbol yang dibuat adalah `#` 
   - Jika angka tersebut adalah angka genap maka symbol yang dibuat adalah `@`
3. Symbol tersebut akan dibuat sebanyak angka yang didapatkan
    - Semisal kita memiliki angka `3` maka akan rubah menjadi `#`  ( karena 3 angka ganjil ) sebanyak 3 kali `###`
4. Jika hasil penjumlahan angka dengan angka sebelumnya adalah 5 keatas, maka tambahkan symbol `$` di akhir baris tersebut.
    - Contoh `3214`, pada baris dengan angka `2` hasil penjumlahan dengan angka sebelumnya adalah 5 ( 2 + 3) maka di baris tersebut akan ditambahkan symbol `$`
    - Jika tidak ada angka sebelum angka di baris tersebut maka proses ini tidak akan dijalankan.
5. Jika isi dari variable `numbers` bukanlah sebuah `angka` maka tampilkan: `Input bukanlah angka`

### Examples

```js

// CONTOH 1
let numbers = 'hactkiv';
// maka output yang dihasilkan adalah "Input bukanlah angka"


// CONTOH 2
let numbers = "3214";
// Output yang diharapkan
// ### => 3 adalah angka ganjil maka hasilnya adalah ###
// @@$ -> 2 adalah angka genap maka hasilnya adalah @@, hasil penjumlahan 2 dengan angka sebelumnya 3 adalah 5 maka ditambahkan character $
// # -> 1 adalah angka ganjil maka hasilnya adalah #
// @@@@$ -> 4 adalah angka genap maka hasilnya adalah @@@@,hasil penjumlahan 4 dengan angka sebelumnya 1 adalah 5 maka ditambahkan character $


// CONTOH 3
let numbers = "1234";
// Output yang diharapkan
// #
// @@
// ###$
// @@@@$

// CONTOH 4
let numbers = "2143";
// Output yang diharapkan
// @@
// #
// @@@@$
// ###$
```

Gantilah value pada variable `word` dalam file `index.js` dengan beberapa test case dibawah ini:

```js
let numbers = '12345'
// #
// @@
// ###$
// @@@@$
// #####$


let numbers = '213411'
// @@
// #
// ###
// @@@@$
// #$
// #

let numbers = '';
// Input bukanlah angka
```
