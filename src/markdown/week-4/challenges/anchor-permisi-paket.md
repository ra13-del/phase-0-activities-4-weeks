---
path: '/week-4/challenges/anchor-permisi-paket'
title: 'Permisi, Paket!'
---

# PERMISI, PAKET!

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti `shift()`, `unShift()`, `push()`, dan `pop()`
- Tidak boleh menggunakan `forEach`, `for...of`, ataupun `map`, dan `every`

### HINTS

- Nama function haruslah `splitToArr`, `deliveryTime`, `deliveryCost`, `discount`,
dan `deliveryOrder` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](##directions) yang disebutkan di bawah
- Jangan menghapus, comment ataupun mengedit bagian module.exports dibagian bawah
- Kerjakan solusi kamu pada file `index.js` terlebih dahulu.

---

## Objective

- mampu memecahkan masalah yang diberikan
- mampu mengakses array multidimensi dan array of object
- mampu membuat object serta object multi dimensi
- mampu membuat array serta array multi dimensi
- mengerti melempar atau memasukkan data hasil menjadi parameter function lainnya
- mampu mengimplementasikan DOM


## Directions

Pada soal ini kalian diberikan function `deliveryOrder` yang menjadi function utama. 

function ini menerima 2 buah parameter.
  - parameter pertama merupakan sebuah array yang berisi string berupa detail pengiriman barang yang dipisahkan oleh ";" dengan format: <br>
    `"<nama konsumen>;<nama item>;<kota asal pengiriman>;<kota tujuan pengiriman>;<nama agen>;<status member>"`
  - parameter kedua berupa array yang berisikan nama-nama kota yang sudah berurutan

Dalam mengerjakan solusi untuk function `deliveryOrder` ini, kalian akan memecah function `deliveryOrder` menjadi beberapa bagian. perhatikan beberapa release yang diberikan!

<br>

### Release 1 - `splitToArr`
pada function ini kalian harus mengubah data dengan format array of string menjadi array multi dimensi.
```js
function splitToArr(arr){
  // your code here
}

let input = [
  'Aan;Ikan;Jakarta;Surabaya;TEKA;false',
  'Bebeb;Cupang;Jakarta;Surabaya;JINI;true',
]

console.log(splitToArr(input))
/* 
[
  [ 'Aan', 'Ikan', 'Jakarta', 'Surabaya', 'TEKA', false ],
  [ 'Bebeb', 'Cupang', 'Jakarta', 'Surabaya', 'JINI', true ]
]
*/
```

<br>

### Release 2 - `deliveryTime`
pada function ini kalian diminta untuk mencari berapa lama waktu yang di tempuh pada setiap pengiriman.
daftar kota didapat dari parameter kota yang sudah berurutan, dimana setiap kota yang dilewati akan memakan waktu 1 hari.
  mis.
  Kota awal: Jakarta
  Kota tujuan: Surabaya
  maka Jakarta - Surabaya akan memakan waktu 5 hari

```js
function deliveryTime(pengirim, penerima, kota){
  // your code here
}

let cities = ['Jakarta', 'Bogor', 'Bandung', 'Semarang', 'Jogja', 'Surabaya']
console.log(deliveryTime("Jakarta", "Semarang", cities)) // 3
```

<br>

### Release 3 - `deliveryCost`
pada function ini kalian diminta untuk menghitung berapa biaya yang akan dikenakan dalam setiap pengiriman.
  setiap agen memiliki harga yang berbeda-beda.
    - pengiriman menggunakan JINI akan dikenakan biaya 10000 setiap kota yang dilewatinya
    - pengiriman menggunakan TEKA akan dikenakan biaya 8500 setiap kota yang dilewatinya
    - pengiriman menggunakan SiLambat akan dikenakan biaya 9250 setiap kota yang dilewatinya
  mis.
  Jakarta - Surabaya menggunakan JINI, maka biaya yang dikenakan adalah 50000

```js
function deliveryCost(agen, time){
  // your code here
}

console.log(deliveryTime("JINI", 5)) // 50000
```

<br>

### Release 4 - `discount`
pada function ini kalian diminta untuk menghitung jumlah discount yang didapatkan oleh customer yang menjadi member.
setiap agen pengiriman memberikan jumlah discount yang berbeda pada membernya.
  - member yang menggunakan JINI akan diberikan discount sebesar 15%
  - member yang menggunakan TEKA akan diberikan discount sebesar 10%
  - member yang menggunakan SiLambat akan diberikan discount sebesar 25%

```js
function discount(member, cost, agen){
  // your code here
}

console.log(discount(true, 50000, "JINI")) // 17500
```

### Release 5 - `deliveryOrder`
sekarang kalian masuk ke tahap akhir yaitu function `deliveryOrder`. Tugas kalian adalah memproses data yang diberikan sebagai parameter menjadi sebuah array of object yang setiap objectnya memiliki key nama, item, agen, lamaPengiriman, biaya, discount, total. **Manfaatkan function - function yang sudah kalian kerjakan sebelumnya didalam function `deliveryOrder` ini.**


```js
function deliveryOrder(data, kota){
  // your code here
}

let data = [
  'Aan;Ikan;Jakarta;Surabaya;TEKA;false',
  'Bebeb;Cupang;Jakarta;Surabaya;JINI;true'
]

let cities = ['Jakarta', 'Bogor', 'Bandung', 'Semarang', 'Jogja', 'Surabaya']

console.log(deliveryOrder(data, cities))
/* [
  {
    nama: 'Ann',
    item: 'Ikan',
    agen: 'TEKA',
    lamaPengiriman: 5,
    biaya: 50000,
    discount: 0,
    total: 50000
  },
  {
    nama: 'Bebeb',
    item: 'Cupang',
    agen: 'JINI',
    lamaPengiriman: 5,
    biaya: 50000,
    discount: 7500,
    total: 42500
  }
] */
```

<br>

### Release 6 - Put it in HTML
Tugas kalian pada release 6 ini adalah menampilkan hasil dari function `deliveryOrder` kedalam bentuk table HTML. <br>
**Kerjakan release 6 pada file `script.js`**
Perhatikan contoh pada gambar berikut:

<p align="center">
  <img src="output.png" border=10  />
</p>


<br>
Buatlah implementasi JavaScript-nya!
___

