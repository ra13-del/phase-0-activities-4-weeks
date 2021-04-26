---
path: '/week-1/challenges/anchor-hacktiv8-fruit-shop'
title: 'Hacktiv8 Fruit Shop'
---

# Hacktiv8 Fruit Shop

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__` dan `testHelpers`, folder-folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun kecuali built in function Math.

---

## Objective

- Mampu memecahkan masalah yang diberikan.
- Mampu membuat variable variable baru.
- Mengerti logika dan konsep perkondisian.
- Mampu menggunakan `Loop` untuk menyelesaikan masalah
- Mampu memahami konsep `if - if`, `if - else`, `if - else if - else`, atau `switch case`.
- Mengerti Cara Menggunakan Operator Evaluasi `===`, `!==`, `>`, `<`, `>=`, atau `<=`.

## Directions

Toko Buah Hacktiv8 ingin membuat prediksi apa saja yang bisa di beli dengan jumlah uang yang di miliki customer
diketahui,
- harga 1 buah Mangga adalah 10000
- harga 1 buah Apel adalah 7000
- harga 1 buah Pisang adalah 5000

Customer dapat membeli buah-buahan di atas selama stok buah masih tersedia dan uang customer masih cukup.
Apabila customer membeli Buah-buah lebih dari 5 maka customer akan mendapatkan cashback di antara 1000,2000,3000,4000, atau 5000

<br>
Buatlah implementasi JavaScript-nya!
___

## Example

1.
```js
ar uang = 25000
var stokMangga = 2
var stokApel = 3
var stokPisang = 3

output = "dapat membeli 2x mangga, 0x apel, 1x pisang dan sisa uang adalah 0"
```

2.
```js
var uang = 50000
var stokMangga = 1
var stokApel = 10
var stokPisang = 3
output = "dapat membeli 1x mangga, 5x apel, 1x pisang dan sisa uang adalah 0 dan mendapatkan cashback 5000" ** (cashback random seperti keterangan diatas)
```
3.
```js
var uang = 80000
var stokMangga = 1
var stokApel = 10
var stokPisang = 3

output = "dapat membeli 1x mangga, 10x apel, 0x pisang dan sisa uang adalah 0 dan mendapatkan cashback 2000" ** (cashback random seperti keterangan diatas)
```
