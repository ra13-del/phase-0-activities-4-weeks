---
path: '/week-2/challenges/anchor-find-word'
title: 'Find Word'
---

# Find Word

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__` dan `testHelpers`, folder-folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun.

### HINTS

- Tidak boleh mengubah nama function yang diberikan

---

## Objectives
- Mampu menyelesaikan masalah yang diberikan
- Mampu mengakses `array` menggunakan loop `FOR` atau `WHILE`
- Mampu membuat conditional menggunakan `IF...IF`, `IF...ELSE`, `IF...ELSE IF...ELSE` atau `SWITCH CASE`

## Directions
Dalam function _findWord_, kalian diberikan sebuah parameter berupa array.
Setiap element dalam array tersebut merupkan sebuah kata yang memiliki panjang yang berbeda-beda.
Kalian diminta untuk mencari kata mana yang menjadi kata `terpanjang` dan `terpendek` dari parameter tersebut dan menampilkannya menjadi sebuah kalimat.
kalian juga diminta untuk bisa menghandle beberapa hal seperti: 

- jika array merupakan array kosong
- jika parameter tidak ada

---

### Test Case
```js
/*

console.log(findWord(['Adiwarna', 'Bentala', 'Candramawa', 'Derana', 'Ejawantah']));
// kata terpanjang adalah Candramawa, dan kata terpendek adalah Derana

console.log(findWord(['Gempita', 'Hening', 'Jatmika', 'Kulacino', 'Lembayung']));
// kata terpanjang adalah Lembayung, dan kata terpendek adalah Hening

console.log(findWord(['Meraki', 'Nayanika', 'Pancarona', 'Risak', 'Swastamita']));
// kata terpanjang adalah Swastamita, dan kata terpendek adalah Risak

console.log(findWord([]));
// Tidak ada kata yang terdaftar

console.log(findWord());
// Invalid input

*/
```
