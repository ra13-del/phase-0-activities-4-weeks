---
path: '/week-2/challenges/anchor-payroll'
title: 'Payroll'
---

# Payroll
### Notes
- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm install` kemudian `npm test`
### Restriction
- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll
### Objectives
* Mampu memecahkan masalah yang diberikan
* Mampu mengakses array multidimensi
* Mampu menggabungkan looping dan conditional
* Mampu menerapkan nested loop

### Directions

Startup Doel ingin membuat sistem untuk menghitung total gaji karyawan nya berdasarkan total kehadiran dalam satu bulan.
Bantulah Startup Doel untuk merealisasikan sistem menghitung total gaji karyawan dengan ketentuan sebagai berikut!

Diberikan sebuah function bernama `payroll` yang memiliki satu parameter `monthlyAbsen` berupa **array multidimensi**, dan memiliki output berupa **string**.
Contoh parameter input `monthlyAbsen`:
```js
const januaryAbsen = [
	["H", "H", "H", "H", "H", "H"],
	[["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
	["H", "H", "H", "T", ["A", "C"], ["A", "C"]],
	["H", "T", ["A", "S"], "H", "H", "H"],
]
```
-- Terdapat 4 status kehadiran, yaitu:
- `"H"` = Hadir
- `"T"` = Terlambat
- `["L", 4]` = Lembur, beserta total jam lembur nya.
- `["A", ...]` = Tidak Hadir mempunyai 3 kategori, yaitu:
	- `"B"` = Bolos
	- `"S"` = Sakit
	- `"C"` = Cuti

**NOTES**
- Gaji Pokok Karyawan: Rp 5.000.000
- Tiap status kehadiran sangat mempengaruhi sistem penggajian, yaitu:
	- Jika dalam satu bulan penuh karyawan selalu hadir atau jumlah kehadiran **(H)** adalah 24 hari, maka mendapatkan bonus gaji sebesar Rp 500.000.
	- Jika karyawan terlambat **[T]** maka akan mendapat pengurangan gaji sebesar Rp 50.000 per hari.
	- Jika karyawan melakukan lembur **[L]**, maka akan mendapatkan tambahan gaji sebesar Rp 50.000 per jam.
	- Jika karyawan tidak hadir **[A]** dengan keterangan:
		- Bolos **[B]**, maka akan mendapat pengurangan gaji sebesar Rp 200.000
		- Sakit **[S]** dan Cuti **[C]** tidak akan mendapat pengurangan gaji.
- Jika parameter `monthlyAbsen` kosong/undefined/null, maka akan mengembalikan `Invalid Data!`.
- Jika panjang array dari parameter `monthlyAbsen` kurang dari 4, maka akan mengembalikan `Data absen tidak lengkap!`.

Buatlah kode program agar sistem penggajian startup Doel berjalan dengan sesuai yang di harapkan!

```js
function payroll(monthlyAbsen) {
	// write your code here
}

let januari = [
    [ "H","H","H","T","H","H" ],
    [ "H","H",["A","C"],"H","H","H" ],
    [ "H","H","H","H","H","H" ],
    [ "H","H","H","H",["A","S"],"H" ]
]

let februari = [
    [ "H","H","H","H",["L",3],"H" ],
    [ "H","H","H","H","H","H" ],
    [ "H",["L",2],"H","H","H","H" ],
    [ "H","H","H","H","H","H" ]
]

let maret = [
    [ "H","H","H","H","H","H" ],
    [ ["A","B"],"H","H","H","H","H" ],
    [ "H","H","T","H","H","H" ],
    [ "H","H","H","H",["A","B"],"H" ]
]

let april = [[ "H","H","H","H","H","H" ]]

console.log(payroll(januari))    
/*
Absensi Bulan ini :
Hadir: 22
Sakit: 1
Terlambat: 1
Alpa: 0
Cuti: 1
Lembur: 0 jam
Gaji yang anda terima bulan ini adalah Rp. 4950000.
*/
console.log(payroll(februari))   
/*
Absensi Bulan ini :
Hadir: 24
Sakit: 0
Terlambat: 0
Alpa: 0
Cuti: 0
Lembur: 5 jam
Gaji yang anda terima bulan ini adalah Rp. 5750000.
*/
console.log(payroll(maret))      
/*
Absensi Bulan ini :
Hadir: 21
Sakit: 0
Terlambat: 1
Alpa: 2
Cuti: 0
Lembur: 0 jam
Gaji yang anda terima bulan ini adalah Rp. 4550000.
*/
console.log(payroll(april))      
// Data absen tidak lengkap!
console.log(payroll())           
// Invalid data!

```
