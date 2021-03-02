---
path: '/week-3/challenges/anchor-lojek'
title: 'Lo-Jek'
---

# LO-JEK

## Objectives
- Mampu memecahkan masalah yang diberikan.
- Mampu mengakases array multidimensi menggunakan nested loop.
- Mampu mengakses sebuah array of object
- Mampu menggabungkan konsep looping / iteration dan conditional.
- Mampu membuat array dari string tertentu dan memanipulasi array.
- Mengerti keterkaitan antara satu function dengan function lainnya.
- Mengerti cara melemparkan data yang dikembalikan dari satu function kemudian digunakan sebagai parameter function lain.


### NOTES
- Jalankan npm install terlebih dahulu.
- Pada skeleton terdapat folder __tests__, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command npm test

### RESTRICTION
- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll

### HINTS
- Nama function tidak boleh diganti dengan nama function lainnya. Untuk detail Function akan mengacu kepada Directions yang disebutkan di bawah


### DIRECTIONS

  Bantulah PT. Lojek dalam memberikan reward kepada drivernya.
  Reward yang di berikan berdasarkan total transaksi yang dilakukan dan total jarak yang di tempuh.
  Pada soal kali ini diberikan function `reward` yang menjadi function utama.
  Dalam mengerjakan solusi untuk function `reward` ini, kalian akan memecah function `reward` menjadi beberapa bagian. perhatikan beberapa release yang diberikan!


### Release 1 - `splitData`

Diberikan sebuah function yang menerima parameter berupa array of object.
Function ini bertujuan untuk split array yang merupakan value dari key **groceries**.

```javascript
function splitData(array) {
    //code here

}

console.log(splitData([
      {
        name: "Samir",
        groceries: ["Susu 2", "Roti 4", "Mie 5", "Telur 2", "Bakso 1"],
        driveTime: 134, //minutes
      },
      {
        name: "Eko",
        groceries: ["Susu 1", "Roti 2", "Mie 3", "Telur 3", "Bakso 2"],
        driveTime: 134, //minutes
      },
    ]))

/**
 * Expected Result
 *  [
      ["Susu", "2", "Roti", "4", "Mie", "5", "Telur", "2", "Bakso", "1"],
      ["Susu", "1", "Roti", "2", "Mie", "3", "Telur", "3", "Bakso", "2"],
    ];
 *
*/

```


### Release 2 - `calculateMoney`

Diberikan sebuah funtion **calculateMoney**, yang menerima input berupa output array dari Function sebelummnya.
Function ini bertujuan untuk menjumlahkan total transaksi yang dilakukan oleh si driver. Harga dari masing-masing barang, menyesuaikan dengan
tabel harga yang telah di sediakan dan di kalikan dengan jumlah dari barang tersebut.


```javascript
function calculateMoney(array) {
    let listGroceries = [
        ["Susu", 10000],
        ["Roti", 20000],
        ["Mie", 5000],
        ["Telur", 7000],
        ["Sabun", 3000],
        ["Bakso", 25000],
    ];
//code here

}

console.log(calculateMoney([
      ["Susu", "2", "Roti", "4", "Mie", "5", "Telur", "2", "Bakso", "1"],
      ["Susu", "1", "Roti", "2", "Mie", "3", "Telur", "3", "Bakso", "2"],
  ]))
/*
    expected output:

    [164000, 136000]
*/
```


### Release 3 - `calculateDistance`

Diberikan sebuah function **calculateDistance**, yang menerima sebuah array of object. Function ini bertujuan untuk menjumlahkan
total jarak yang di tempuh oleh si driver dalam satuan kilometer, dengan asumsi rata-rata kecepatan driver adalah 500 meter per menit.

Hint : Rumus mencari kecepatan adalah  =>  (driverTime x  500) / 1000


```javascript
function calculateDistance(data) {


}


console.log(calculateDistance(
    [
      {
        name: "Samir",
        groceries: ["Susu 2", "Roti 4", "Mie 5", "Telur 2", "Bakso 1"],
        driveTime: 134, //minutes
      },
      {
        name: "Eko",
        groceries: ["Susu 1", "Roti 2", "Mie 3", "Telur 3", "Bakso 2"],
        driveTime: 134, //minutes
      },
    ]))

/*
    expected output :

     [67, 67]

*/
```



### Release 4 - `reward`

Diberikan sebuah function **reward**, yang menerima array of object. function __reward__ merupakan main function yang akan memangggila function-function lain di dalammnya.

  Function ini bertujuan untuk menentukan reward yang di dapatkan oleh driver. Dengan kriteria:
- Jika total transaksi yang di lakukan 100000 keatas dan jarak yang di tempuh 50 km keatas maka reward nya adalah Rumah.
- Jika total transaksi yang di lakukan 50000 - 99999 dan jarak yang di tempuh 49 km - 20 km, maka reward yang di dapatkan adalah Mobil.
- Jika kedua kriteria diatas tidak memenuhi maka si driver belum mendapatkan reward.

```javascript
function reward(array) {
    //code here

}

console.log(reward([
      {
        name: "Samir",
        groceries: ["Susu 2", "Roti 4", "Mie 5", "Telur 2", "Bakso 1"],
        driveTime: 134 //minutes,
      },
      {
        name: "Eko",
        groceries: ["Susu 1", "Roti 2", "Mie 3", "Telur 3", "Bakso 2"],
        driveTime: 134 //minutes,
      },
      {
        name: "Fajrin",
        groceries: ["Susu 1", "Roti 2", "Bakso 2", "Telur 3"],
        driveTime: 90, //minutes
      },
      {
        name: "Abdullah",
        groceries: ["Susu 1", "Roti 2", "Bakso 5"],
        driveTime: 120 //minutes,
      },
      {
        name: "Basil",
        groceries: ["Susu 1", "Roti 2", "Bakso 2", "Telur 5"],
        driveTime: 40, //minutes
      },
      {
        name: "Idaz",
        groceries: ["Susu 1", "Roti 2"],
        driveTime: 10, //minutes
      },
    ]))

/*
expected output:
{
      Rumah: ["Samir", "Eko", "Abdullah"],
      Mobil: ["Fajrin", "Basil"],
      NoReward: ["Idaz"],
};
*/

```
