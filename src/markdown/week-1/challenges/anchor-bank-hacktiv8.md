---
path: '/week-1/challenges/anchor-bank-hacktiv8'
title: 'Bank Hacktiv8'
---

# Bank Hacktiv8

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__` dan `testHelpers`, folder-folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun.

### HINTS

- Perhatikan urutan pengecekan dari keterangan soal dan contoh ouput.

---

## Objective

- Mampu memecahkan masalah yang diberikan.
- Mengerti logika dan konsep perkondisian.
- Mampu memahami konsep `if - if`, `if - else`, `if - else if - else`, atau `switch case`.
- Mengerti Cara Menggunakan Operator Evaluasi `===`, `!==`, `>`, `<`, `>=`, atau `<=`. 
- Mengerti konsep `nested conditional` didalam sebuah masalah

## Directions

Dalam program Bank Hacktiv8 ini, kamu akan menenerima 4 input, yaitu :
1. `nama` sebagai input yang menerima data nama customer dengan tipe data string.
2. `usia` sebagai iput yang menerima umur customer dengan tipe data number.
3. `uang` sebagai input yang menerima uang customer dengan tipe data number.
4. `rekening` sebagai input yang menerima jenis rekening yang akan dibuka oleh customer, dimana hanya ada dua jenis yaitu 'Tabungan' dan 'Giro'

Kamu diminta untung mengecek apakah customer yang bersangkutan, apakah customer memenuhi kriteria untuk membuka rekening yang diinginkan
Untuk kriteria yang harus dicek sebelum rekening dibuat adalah :
1. Jika input `nama` kosong, maka ouputnya 'Terdapat kesalahan pada pengisian nama' dan program akan selesai.
2. Jika input `rekening` diisi selain 'Giro' dan 'Tabungan', maka ouputnya 'Jenis rekening tidak ditemukan' dan program akan selesai
3. Proses selanjut nya yang dicek adalah `usia`. Jika usia customer dibawah 17 tahun, maka outputnya 'Usia untuk membuka tabungan belum mencukupi' dan program akan 
4. Untuk `rekening` jenis 'Giro' memiliki minimal deposit sebesar 1000000 dan minimal deposit 'Tabungan' sebesar 500000, jika uang customer kurang, maka ouput nya 'Tidak bisa membuka rekening <`rekening`>, minimum deposit kurang <`jumlah uang yang kurang`>' dan program akan selesai.
5. Jika kriteria customer memenuhi semua persyaratan, maka outputnya 'Rekening <`rekening`>, atas nama <`nama`> berhasil dibuka' dan program akan selesai.

<br>
Buatlah implementasi JavaScript-nya!

## Test Case

1. 
```js
input :
var nama = 'Ardi'
var usia = 18
var uang = 1000000
var rekening = 'Tabungan'

ouput : 'Rekening Tabungan, atas nama Ardi berhasil dibuka'
```

2. 
```js
input :
var nama = ''
var usia = 18
var uang = 1000000
var rekening = 'Tabungan'

ouput : 'Terdapat kesalahan pada pengisian nama'
```

3. 
```js
input :
var nama = 'Ardi'
var usia = 18
var uang = 1000000
var rekening = 'Asuransi'

ouput : 'Jenis rekening tidak ditemukan'
```

4. 
```js
input :
var nama = 'Ardi'
var usia = 15
var uang = 1000000
var rekening = 'Tabungan'

ouput : 'Usia untuk membuka tabungan belum mencukupi'
```

5. 
```js
input :
var nama = 'Ardi'
var usia = 15
var uang = 100000
var rekening = 'Tabungan'

ouput : 'Usia untuk membuka tabungan belum mencukupi'
```

6. 
```js
input :
var nama = 'Ardi'
var usia = 18
var uang = 100000
var rekening = 'Tabungan'

ouput : 'Tidak bisa membuka rekening Tabungan, minimum deposit kurang 400000'
```

7. 
```js
input :
var nama = 'Ardi'
var usia = 18
var uang = 100000
var rekening = 'Giro'

ouput : 'Tidak bisa membuka rekening Giro, minimum deposit kurang 900000'
```
