---
path: '/week-1/challenges/anchor-dunia-pantasi'
title: 'Dunia Pantasi'
---

# Dunia Pantasi

## Objectives

- Mengerti Cara Menggunakan `If-Else`
- Mengerti Logika `If-Else`
- Mengerti Cara Menggunakan Operator Evaluasi `>`, `>=`, `<` dan `<=`

---

## NOTES

- Jalankan command npm install terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__`, folder ini beserta - file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command npm test

---

## Directions

Dunia Pantasi adalah tempat yang di dalamnya terdapat wahana-wahana untuk memacu adrenalin pengunjung.

Dunia Pantasi punya peraturan sendiri untuk memasuki kawasan nya hingga menaiki suatu wahana yang ada di dalamnya, yaitu:

1. Jika umur pengunjung kurang dari 18 tahun, maka pengunjung tidak diperbolehkan memasuki kawasan Dunia Pantasi dan tampilkan `"Maaf [nama pengunjung], kamu tidak dapat memasuki kawasan ini!"`
2. Jika uang pengunjung tidak mencapai **50000** dan tinggi nya kurang dari **166cm**, maka tampilkan `"Tinggi kamu kurang [selisih tinggi]cm dan kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!"`
3. Jika uang pengunjung tidak mencapai **50000** dan tinggi nya **166cm** keatas, maka tampilkan `"Kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!"`
4. Jika uang pengunjung **50000** keatas dan tinggi nya kurang dari **166cm**, maka tampilkan `"Tinggi kamu kurang [selisih tinggi]cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!"`
5. Jika uang pengunjung **50000** keatas dan tinggi nya **166cm** keatas, maka tampilkan `"Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!"`

## Examples

```js
// CONTOH 1
var nama = "Fajrin";
var umur = 20;
var tinggi = 180;
var uang = 80000;
// maka output yang dihasilkan adalah "Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!"

// CONTOH 2
var nama = "Aji";
var umur = 23;
var tinggi = 165;
var uang = 49000;
// maka output yang dihasilkan adalah "Tinggi kamu kurang 1cm dan kamu kurang uang sebanyak 1000 untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!"
```

Buatlah pseudocode dan programnya!

**RESTRICTION**:
Tidak boleh menggunakan built-in function apapun
