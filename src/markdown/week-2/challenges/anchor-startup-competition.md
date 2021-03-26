---
path: '/week-2/challenges/anchor-startup-competition'
title: 'StartUp Competition'
---

# Start-Up Competition

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Dilarang menggunakan built-in function

### HINTS

- Gunakan built-in function `.push()`!
- Nama function haruslah `startUpList` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah
- Kamu boleh menggunakan built-in function [Array.isArray()](https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)


---

## Objectives

- Mampu melakukan manipulasi pada sebuah Array dengan built-in function
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function
- Mampu memahami pengecekkan sebuah data yang bertipe data Array

## Directions

Start-Up Competition adalah sebuah lomba start-up international yang di adakan tiap tahun.
Salah satu syarat kompetisi adalah setiap perwakilan negara hanya boleh mengirim satu nama start-up di tiap bidangnya. jika dalam satu bidang terdapat 2 atau lebih nama start-up yang di ajukan maka nama start-up yang dapat di ajukan adalah nama start-up yang pertama kali di input.

Berbeda dengan tahun-tahun sebelumnya, di tahun ini telah terjadi kesalahan input data start-up oleh perwakilan panitia tiap negera yaitu duplikasi input bidang start-up. Pak Idaz sebagai panitia pusat diminta untuk membenarkan kesalahan input data tersebut.

Diberikan sebuah function `startUpCompetition` yang dapat menerima 1 parameter yaitu `startUpList` dengan tipe data array.

Buatlah algoritma di dalam function `startUpCompetition` sehingga dapat menghilangkan duplikasi data bidang start-up, sehingga hanya ada satu nama start-up di setiap bidang.

Pastikan kode kamu bisa menjalankan semua test case yang diberikan!

NOTES:

- Jika parameter input nya selain _array_, maka output akan mengeluarkan `Invalid Data`.
- Boleh menggunakan built-in function [Array.isArray().](https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- Jika parameter input data bidang start-up tidak lengkap atau salah satu dari ke 4 bidang ini `Ecommerce, Tourism, Healthtech, dan Agrotech` tidak ada ,maka output akan mengeluarkan `Incorrect Startup Data`.


```js
function startUpCompetition(startUpList) {
  // Write your code here

}

console.log(startUpCompetition())
// 'Invalid Data'

let invalid = `[
  ['Tikipidia','Ecommerce'],
  ['Triviliki','Tourism'],
  ['Hilidic','Healthtech'],
  ['Siyirbix','Agrotech'],
  ['Shipee','Ecommerce'],
  ['Bhinniki','Ecommerce']
]`
console.log(startUpCompetition(invalid))
// 'Invalid Data'

let malaysia = [
  ['Dropee','Ecommerce'],
  ['BookDoc','Healthtech'],
  ['dahmakan','Agrotech'],
]
console.log(startUpCompetition(malaysia))
// 'Incorrect Startup Data'

let indonesia = [
  ['Tikipidia','Ecommerce'],
  ['Bikilipik','Ecommerce'],
  ['Bhinniki','Ecommerce'],
  ['Triviliki','Tourism'],
  ['Hilidic','Healthtech'],
  ['Siyirbix','Agrotech'],
  ['TikingSiyir.ci','Agrotech'],
  ['BleBle.cim','Ecommerce'],
  [ 'Tikit.cim','Tourism'],
]
console.log(startUpCompetition(indonesia))
// [
//   [ 'Tikipidia', 'Ecommerce' ],
//   [ 'Triviliki', 'Tourism' ],
//   [ 'Hilidic', 'Healthtech' ],
//   [ 'Siyirbix', 'Agrotech' ]
// ]

let unitedStatesAmerica = [
  ['amazon.com','Ecommerce'],
  ['Iirbnb','Tourism'],
  ['AristaMD','Healthtech'],
  ['Trio Health','Healthtech'],
  ['Quantela','Tourism'],
  ['Pioneer','Agrotech'],
  ['AllSeq','Healthtech'],
  ['Cella Medical ','Healthtech'],
  ['Zymergen','Agrotech'],
  ['Plenty','Agrotech'],
]
console.log(startUpCompetition(unitedStatesAmerica))
// [
//   [ 'amazon.com', 'Ecommerce' ],
//   [ 'Iirbnb', 'Tourism' ],
//   [ 'AristaMD', 'Healthtech' ],
//   [ 'Pioneer', 'Agrotech' ]
// ]
```
