---
path: '/week-1/challenges/anchor-bikilipik-discount'
title: 'Bikilipik Discount'
---

# **Bikilipik Diskon**

## Objectives

* Mengerti Cara Menggunakan `If-Else`
* Mengerti Logika `If-Else`
* Mengerti Cara Menggunakan Operator Evaluasi `===`, `!==`

<br>

## Restrictions
Tidak boleh menggunakan built-in function apapun

<br>

## Directions

Seorang pengunjung website Bikilipik direpresentasikan oleh JavaScript memiliki variable name, role dan birthMonth. untuk variable role dapat berisi 1 dari 3 role berikut ini : "member baru", "member lama", "belum terdaftar".

Terdapat diskon besar bagi member yang berulang tahun di bulan Januari ini, untuk mendapatkannya pengunjung wajib mengisi formulir. 

Terdapat beberapa aturan yang harus di patuhi saat mengisi formulir:
  1. Jika name dari si pengunjung kosong, tampilkan di console "Nama tidak boleh kosong!" dan program selesai. Jika name tidak kosong, lanjut ke step ke 2.
  2. Jika role dari si pengunjung adalah "member baru", maka:
        - Jika birthMonth adalah "Januari", maka program akan menampilkan "Selamat [name]!. Anda berhak mendapatkan voucher diskon sebesar 50%!"
        - Jika birthMonth adalah selain Januari, maka program akan menampilkan "Maaf [name], voucher diskon hanya untuk yang lahir di bulan Januari."
  3. Jika role dari si pengunjung adalah "member lama", maka:
        - Jika birthMonth adalah "Januari", maka program akan menampilkan "Selamat [name]!. Anda berhak mendapatkan voucher diskon sebesar 30%!"
        - Jika birthMonth adalah selain Januari, maka program akan menampilkan "Maaf [name], voucher diskon hanya untuk yang lahir di bulan Januari."
  4. Jika role dari si pengunjung adalah selain "member baru" atau "member lama", maka:
        - Tampilkan "Selamat datang di Bikilipik, [name]. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu."

## Examples

```js
// CONTOH 1
var name = "";
var role = "member baru";
var birthMonth = "Januari";
/*
output:
Nama tidak boleh kosong!
*/

// CONTOH 2
var name = "Jaka";
var role = "belum terdaftar";
var birthMonth = "Januari";
/*
output:
Selamat datang di Bikilipik, Jaka. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu
*/

// CONTOH 3
var name = "Joko";
var role = "member baru";
var birthMonth = "Januari";
/*
output:
Selamat Joko!. Anda berhak mendapatkan voucher diskon sebesar 50%!
*/

// CONTOH 4
var name = "Aji";
var role = "member lama";
var birthMonth = "Januari";
/*
output:
Selamat Aji!. Anda berhak mendapatkan voucher diskon sebesar 30%!
*/

// CONTOH 5
var name = "Johan";
var role = "member baru";
var birthMonth = "Maret";
/*
output:
Maaf Johan, voucher diskon hanya untuk yang lahir di bulan Januari.
*/
```

Buatlah pseudocode dan programnya!
