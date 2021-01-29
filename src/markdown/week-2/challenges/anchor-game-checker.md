---
path: '/week-2/challenges/anchor-game-checker'
title: 'Game Checker'
---

# Logic Challenge - Game Checker

## Objectives

- Mampu memecahkan masalah yang diberikan
- Mampu mengakses array multidimensi
- Mampu menggabungkan `looping`dan `conditional`
- Mampu menerapkan `nested loop`

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti `.shift()`, `unShift()`, `push()`, dan `pop()` dan built-in untuk mengkonversi tipe data

---

## Directions

Suatu hari Fox ingin melihat koleksi game yang sudah dikumpulkan sejak lama, koleksi game Fox di tempatkan di dalam satu kardus besar, yang dimana isi di dalam kardus besar itu terdapat kardus-kardus kecil untuk memisahkan game berdasarkan tahun keluaran nya.

Buatlah program untuk membantu Fox mencari game yang di inginkan berada di kardus mana saja!

Diberikan sebuah function `gameChecker` yang menerima satu parameter yaitu `titleGame` berupa _string_ yang digunakan untuk mencari game di dalam `gameBoxes`.

Disediakan juga satu variabel `gameBoxes` berupa array 2 dimensi yang berisikan game-game koleksi milik Fox, **variabel ini tidak boleh di ubah-ubah**.

Function akan mengembalikan string berupa informasi di kardus mana saja game yang sedang di cari berada.

NOTES:

- Jika parameter input nya selain _string_, maka output akan mengeluarkan `invalid data`.
- Jika parameter input adalah _string kosong_ (`""`), maka output akan mengeluarkan `masukkan game yang ingin di cari`.

```js
function gameChecker(titleGame) {
  // VARIABEL gameBoxes TIDAK BOLEH DIUBAH //
  let gameBoxes = [
    ["fifa2021", "pes2021", "football-manager2021", "winning-eleven2021"],
    ["fifa2020", "football-manager2020", "nba2020"],
    ["nba2019", "pes2019", "winning-eleven2019"],
    ["winning-eleven2018", "nba2018", "fifa2018"],
  ];
  // you can only write your code here!
}

// TEST CASES
console.log(gameChecker("fifa")); // game fifa berada di kardus tahun 2021, kardus tahun 2020, dan kardus tahun 2018
console.log(gameChecker("pes")); // game pes berada di kardus tahun 2021, dan kardus tahun 2020
console.log(gameChecker("winning-eleven")); // game winning-eleven berada di kardus tahun 2021, kardus tahun 2020, dan kardus tahun 2018
console.log(gameChecker("dota")); // game tidak ada di kardus manapun
console.log(gameChecker("")); // masukkan game yang ingin di cari
console.log(gameChecker()); // invalid data
```
