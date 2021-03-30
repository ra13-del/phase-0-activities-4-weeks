---
path: '/week-4/challenges/anchor-income-statement'
title: 'Income Statement'
---

# Income Statement

>### OBJECTIVES

-   Mampu memecahkan masalah yang diberikan
-   Mampu mengakses data pada array dan data pada array of object
-   Mampu membuat object serta object multi dimensi
-   Mengerti cara melemparkan data yang dikembalikan dari satu function kemudian digunakan sebagai parameter function lain.

>### NOTES

-   Jalankan  `npm install`  terlebih dahulu
-   Pada skeleton terdapat folder  `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
-   untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command  `npm test`

>### RESTRICTIONS

-   Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti  `shift()`,  `unShift()`,  `push()`, dan  `pop()`

>### HINTS

-   Nama function haruslah  `generateIngredients`,  `calculateRawCost`,  `calculateROI`,dan  `incomeStatement`, dan  **tidak boleh diganti dengan nama function lainnya**. Untuk detail fungsi akan mengacu kepada  [directions](#directions)  yang disebutkan di bawah.
-   Jangan menghapus, comment ataupun mengedit bagian module.exports di bagian bawah file `index.js`.

<br>

## Directions

Mbah Marno👨‍🍳 adalah seorang juragan bakso. Rutinitas hariannya dalam mengelola usaha adalah sebagai berikut:
1. Di pagi hari Mbah Marno belanja ke pasar membeli bahan dasar seperti daging sapi, terigu, dan rempah-rempah untuk di olah menjadi bahan setengah jadi seperti `bola bakso`, `mie` dan `kuah`.
2. Di siang hari Mbah Marno siap untuk menerima orderan dari pelanggannya.
3. Di malam harinya Mbah Marno akan menghitung hasil usahanya untuk hari ini secara teliti. 💪

Karena sudah Mbah Marno seharian bekerja maka pekerjaan kegiatan di malam hari tersebut ingin di automasi menggunakan program komputer. Bantulah Mbah Marno untuk mewujudkan keinginannya. 🙏

Informasi yang dapat diberikan oleh Mbah Marno adalah sebagai berikut:
#### 1. Daftar belanja bahan dasar dan takaran untuk membuat bahan setengah jadi.

|	Bahan Dasar				|	Hasil Olahan 	|	Rasio 	|	Pembelian 	|	Harga Satuan 	|
|	:-----------------------|-------------------|----------:|--------------:|------------------:|
|	Daging Sapi				|	Bola Bakso		|	20		|	6			|	130.000			|
|	Terigu 					|	Mie				|	100		|	3			|	20.000			|
|	Rempah Rempah		    |	Kuah			|	0,05	|	0,5			|	40.000			|

>Keterangan:
>- **Hasil Olahan** adalah nama bahan setengah jadi yang nantinya digunakan untuk meracik (komposisi) sebuah menu makanan di restorannya.
>
>- **Rasio** adalah takaran (*gram*) bahan dasar yang diperlukan untuk membuat 1 unit hasil olahan, sebagai contohnya:
>   - Untuk membuat 1 unit `bola bakso` diperlukan 20 gram daging sapi, maka 100 gram daging sapi menghasilkan 5 unit `bola bakso`.
>
>- **Pembelian** adalah jumlah bahan dasar (*kilo gram*) yang di beli untuk diolah menjadi bahan setengah jadi.
>
>- **Harga Satuan** adalah harga untuk satu kilo gram bahan dasar. 

Informasi di atas akan direpresentasikan ke dalam sebuah **array 2 dimensi** seperti ini.

```js
const rawData = [
  ["Bahan Dasar", "Hasil Olahan", "Rasio", "Pembelian", "Harga Satuan"],
  ["Daging Sapi", "Bola Bakso", 20, 6, 130_000],
  ["Terigu", "Mie", 100, 3, 20_000],
  ["Rempah Rempah", "Kuah", 0.05, 0.5, 40_000],
];
```

<br>

#### 2.  Menu yang tersedia di restoran.

|	Nama Menu			|	Harga	|	Komposisi Racikan	|	Bola Bakso		|	Mie		|	Kuah	|
|:----------------------|-----------|:---------------------:|:-----------------:|:---------:|:---------:|
|	Bakso Spesial		|	20.000	|	Unit				|	6				|	-		|	200		|
|	Mie Ayam Combo		|	18.000	|	Unit				|	3				|	1		|	150		|
|	Mia Ayam Spesial	|	12.000	|	Unit				|	-				|	1		|	100		|
 
> Dengan melihat tabel di atas maka dapat diambil informasi bahwa:
>- Harga satu porsi `Baskso Spesial` adalah `20000`.
>- Satu porsi `Baskso Spesial`  membutuhkan `Bola bakso` sebanyak `6` unit dan `Kuah` sebanyak `200` unit.

Informasi di atas akan direpresentasikan ke dalam sebuah **object** seperti ini.

```js
const menus = {
  "Bakso Spesial": {
    harga: 20_000,
    komposisi: {
      "bola bakso": 6,
      kuah: 200,
    },
  },
  "Mie Ayam Combo": {
    harga: 18_000,
    komposisi: {
      mie: 1,
      "bola bakso": 3,
      kuah: 150,
    },
  },
  "Mia Ayam Spesial": {
    harga: 12_000,
    komposisi: {
      mie: 1,
      kuah: 100,
    },
  },
};
```

<br>

#### 3.  Catatan pesanan hari ini.

```js
const orderHistories = [
  { menuItem: "Bakso Spesial", amount: 260 },
  { menuItem: "Bakso Spesial", amount: 12 },
  { menuItem: "Bakso Beranak", amount: 12 },
  { menuItem: "Mie Ayam Combo", amount: 20 },
  { menuItem: "Mia Ayam Spesial", amount: 6 },
  { menuItem: "Mia Ayam Spesial", amount: 4 },
];
```

Perhatikan data di atas! 

>- Satu elemen pada varibel `orderHistories` merupakan representasi satu pesanan dari pelanggan secara FIFO (*first in, first out*) artinya elemen index pertama adalah pesanan pertama dan elemen index terakhir adalah pesanan terakhir pada hari ini. 
>
>- Perlu diingat bahwa catatan pesanan ini tidak semua dapat dilayani (*successful transaction*) karena program akan melihat ketersediaan jumlah kebutuhan bahan untuk meracik pesanan tersebut cukup atau tidak.
>
>- Jika tidak cukup maka diasumsikan pelanggan membatalkan pesanan.
>
>- Program juga tidak menerima pesanan yang tidak tersedia di daftar menu.
>
>- Key `menuItem` adalah nama menu yang dipesan dan key `amount` adalah jumlah yang dipesan oleh pelanggan.

Karena sudah tidak ada lagi informasi yang bisa diberikan oleh Mbah Marno maka challenge kali ini bisa kita mulai. Lets GO! 🧑‍💻

<br>

### Release 1 -  `generateIngredients`

Pada function ini akan menerima satu parameter yaitu  `rawArr`  yang bertipe data  **array 2 dimensi**. Dimana function ini berfungsi untuk mendapatkan informasi jumlah bahan-bahan setengah jadi yang dapat dihasilkan dari sejumlah bahan-bahan dasar yang dibeli oleh Mbah Marno.

Output dari function ini bertipe data  **object**. Perhatikan contoh berikut:

```js
function generateIngredients(rawArr) {
  // Your code here
}
const rawData =  [
	["Bahan Dasar",  "Hasil Olahan",  "Rasio",  "Pembelian",  "Harga Satuan"],
	["Daging Sapi",  "Bola Bakso",  20,  6, 130_000],
	["Terigu",  "Mie",  100,  3, 20_000],
	["Rempah Rempah",  "Kuah",  0.05,  0.5, 40_000],
];
console.log(generateIngredients(rawData)); // { "bola bakso": 300, mie: 30, kuah: 10000 }
```

 <br>

### Release 2 -  `calculateRawCost`

Pada function ini akan menerima satu parameter yaitu  `rawArr`  yang bertipe data  **array 2 dimensi**. Dimana function ini berfungsi untuk menghitung total belanja bahan-bahan dasar Mbah Marno pada hari ini.

Output dari function ini bertipe data  **number**. Perhatikan contoh berikut:

```js
function calculateRawCost(rawArr) {
  // Your code here
}
const rawData =  [
	["Bahan Dasar",  "Hasil Olahan",  "Rasio",  "Pembelian",  "Harga Satuan"],
	["Daging Sapi",  "Bola Bakso",  20,  6, 130_000],
	["Terigu",  "Mie",  100,  3, 20_000],
	["Rempah Rempah",  "Kuah",  0.05,  0.5, 40_000],
];
console.log(calculateRawCost(rawData)); // 860000
```

  <br>

### Release 3 -  `calculateROI`

Pada function ini akan menerima satu parameter yaitu  `obj` yang bertipe data  **object**. Pada parameter ini terdapat dua key yaitu `investment` dan `totalSales`. Dimana function ini berfungsi untuk menghitung *[return on investment](https://www.investopedia.com/terms/r/returnoninvestment.asp)* Mbah Marno pada hari ini. Rumus perhitungan yang digunakan pada function ini adalah:
> ROI = ( total sales MINUS investment ) DEVIDE BY investment TIMES 100 PERCENT
> 
> Notes: 
> - By the way, Mbah Marno tidak suka dengan bilangan pecahan desimal. Tolong di-*handle* ya!

Output dari function ini bertipe data  **string**. Perhatikan contoh berikut:

```js
function calculateROI(obj) {
  // Your code here
}
console.log(calculateROI({investment: 1100, totalSales: 1700})); // 55%
console.log(calculateROI({investment: 860000, totalSales: 720000})); // -16%
```
  
  <br>

### Release 4 -  `incomeStatement`

Okey, `incomeStatement` adalah *main function* kita pada challenge ini. Sebelum melanjutkan boleh dong istirahat dulu sebentar (minum 🧃 dan *stretching* sedikit) Mbah Marno bisa menunggu sampai besuk pagi kok hehehe. 😁By the way, kakak *salute* kamu sudah berjuang sampai sejauh ini!👏👏👏

Kalau sudah selesai istirahat skuy lah gaskeun!🤸

Jadi function `incomeStatement` akan menerima tiga parameter yang diberikan oleh Mbah Marno yaitu  :
- Parameter `menusObj` bertipe data  **object** yang akan berisi data menu restoran berupa,
	- nama makanan terdapat pada `key` utama, 
	- kemudian `harga` untuk 1 porsi makanan, dan 
	- `komposisi` bahan-bahan yang diperlukan untuk membuat 1 porsi makanan.
- Parameter `rawArr` bertipe data **array 2 dimensi** yang akan berisi,
	- daftar belanja bahan dasar,
	- nama bahan setengah jadi,
	- takaran untuk membuat bahan setengah jadi,
	- jumlah pembelian bahan dasar, dan 
	- harga satuan (*per kilo gram*) bahan dasar
- Parameter `orders` bertipe data **array of object** yang setiap elementnya merupakan representasi satu pesanan dari pelanggan.

Dimana function ini berfungsi untuk mengolah semua data yang diberikan agar menghasilkan output yang dinginkan dengan kriteria sebagai berikut:
1. `remainingIngredients` adalah data sisa bahan setengah jadi pada hari ini.
2. `sales` adalah data total penjualan masing-masing menu, dan ingat kembali bahwa **tidak semua pesanan dapat dilayani** (_successful transaction_).
3. `investment` adalah total belanja bahan-bahan dasar Mbah Marno pada hari ini.
4. `totalSales` adalah total uang yang didapatkan dari hasil penjualan Mbah Marno hari ini.
5. `profit` adalah `totalSales` MINUS  `investment` pada hari ini.
6. `roi` adalah *return on investment* pada hari ini.
7. `message` adalah rangkuman kegitan penjualan hari ini.
	- Jika untung = **`Terima kasih Tuhan. Hari ini telah diberikan rejeki yang banyak.`**
	- Jika rugi = **`Terima kasih Tuhan. Hari ini hanya rugi sedikit.`**
	- Jika balik modal = **`Terima kasih Tuhan. Hari ini tidak merugi.`**
8. **Jangan lupa untuk menggunakan semua function-function yang sudah kamu
buat sebelumnya di dalam function ini. 😎**

Output dari function ini bertipe data  **object**. Perhatikan contoh berikut:

```js
function incomeStatement(menusObj, rawArr, orders) {
  // Your code here
}

const menus = {
  "Bakso Spesial": {
    harga: 20_000,
    komposisi: {
      "bola bakso": 6,
      kuah: 200,
    },
  },
  "Mie Ayam Combo": {
    harga: 18_000,
    komposisi: {
      mie: 1,
      "bola bakso": 3,
      kuah: 150,
    },
  },
  "Mia Ayam Spesial": {
    harga: 12_000,
    komposisi: {
      mie: 1,
      kuah: 100,
    },
  },
};

const rawData =  [
	["Bahan Dasar",  "Hasil Olahan",  "Rasio",  "Pembelian",  "Harga Satuan"],
	["Daging Sapi",  "Bola Bakso",  20,  6, 130_000],
	["Terigu",  "Mie",  100,  3, 20_000],
	["Rempah Rempah",  "Kuah",  0.05,  0.5, 40_000],
];

const orderHistories = [
  { menuItem: "Bakso Spesial", amount: 260 },
  { menuItem: "Bakso Spesial", amount: 12 },
  { menuItem: "Bakso Beranak", amount: 12 },
  { menuItem: "Mie Ayam Combo", amount: 20 },
  { menuItem: "Mia Ayam Spesial", amount: 6 },
  { menuItem: "Mia Ayam Spesial", amount: 4 },
];

console.log(incomeStatement(menus, rawData, orderHistories));
/*
  {
    remainingIngredients: { 'bola bakso': 168, mie: 0, kuah: 3600 },
    sales: { 'Bakso Spesial': 12, 'Mie Ayam Combo': 20, 'Mia Ayam Spesial': 10 },
    investment: 860000,
    totalSales: 720000,
    profit: -140000,
    roi: '-16%',
    message: 'Terima kasih Tuhan. Hari ini hanya merugi sedikit.'
  }
*/
```
<br>

> ### Selamat mengerjakan! 🎉🎉🎉
![Peace out!](https://media.tenor.com/images/529aed02dae515a28de82141cfd0b019/tenor.gif)
