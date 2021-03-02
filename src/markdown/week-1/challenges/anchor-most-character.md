---
path: '/week-1/challenges/anchor-most-character'
title: 'Most Character'
---

# Most Character

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya di perbolehkan menggunakan built-in function untuk konversi data bertipe string ke number atau sebaliknya, seperti toString(), Number(), dll.

### HINTS

- Variable `word` **tidak boleh diganti dengan variabel lain** dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.
- Implementasikan nested looping di soal ini ya, untuk mempermudah kode kalian ;)

---

## Objectives

- Mampu mengubah tipe data number menjadi string, maupun sebaliknya
- Mengerti logika `looping` dan `nested looping`
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah

## Directions

Diberikan sebuah variabel `word` bertipe **string** atau **number**. Buatlah sebuah program yang dapat mencari karakter terbanyak yang muncul pada variabel `word` dengan ketentuan sebagai berikut:

1. Jika variabel `word` hanya memiliki satu karakter maka output nya adalah `"Hanya memiliki satu karakter yaitu <karakter>"`
2. Jika jumlah karakter terbanyak diatas 10 maka output nya adalah `"Karakter terbanyak adalah <karakter> dengan jumlah yang sangat banyak yaitu <total>"`
3. Jika jumlah karakter terbanyak diatas 5 dan 10 kebawah maka output nya adalah `"Karakter terbanyak adalah <karakter> dengan jumlah yang cukup banyak yaitu <total>"`
4. Jika jumlah karakter terbanyak 5 kebawah maka output nya adalah `"Karakter terbanyak adalah <karakter> dengan jumlah <total>"`

### Notes

1. Spasi (" ") tidak termasuk dalam karakter.
2. Output karakter terbanyak HARUS dalam bentuk **lowercase**.
3. Huruf kapital dihitung sama dengan huruf kecil, ex: `"Aa"` -> jumlah karakter `a` adalah 2


### Examples

```js
// CONTOH 1
let word = "Aku adalah Aku";
// maka output yang dihasilkan adalah "Karakter terbanyak adalah "a" dengan jumlah 5"

// CONTOH 2
let word = 1123112311;
// maka output yang dihasilkan adalah "Karakter terbanyak adalah "1" dengan jumlah yang cukup banyak yaitu 6"

// CONTOH 3
let word = "F";
// maka output yang dihasilkan adalah "Hanya memiliki satu karakter yaitu f"

// CONTOH 4
let word = 7;
// maka output yang dihasilkan adalah "Hanya memiliki satu karakter yaitu 7"
```

Gantilah value pada variable `word` dalam file `index.js` dengan beberapa test case dibawah ini:

```JS
let word = "Aku yakin akan lulus di phase 0 bersama kawan-kawan ku"  //Karakter terbanyak adalah "a" dengan jumlah yang sangat banyak yaitu 11
let word = "RANU KUMBOLO terdapat di GUNUNG SEMERUU" //Karakter terbanyak adalah "u" dengan jumlah yang cukup banyak yaitu 6
let word = 12341123 //Karakter terbanyak adalah "1" dengan jumlah 3
let word = 1 //Hanya memiliki satu karakter yaitu 1
```
