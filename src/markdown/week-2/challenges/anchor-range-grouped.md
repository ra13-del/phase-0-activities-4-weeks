---
path: '/week-2/challenges/anchor-range-grouped'
title: 'Range Grouped'
---

# Logic Challenge - Range Grouped

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti `.shift()`, `unShift()`, `push()`, dan `pop()` dan built-in untuk mengkonversi tipe data

### HINTS

- Gunakan built-in function `.push()`!
- Nama function haruslah `rangeGrouped` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---
## Objectives

- Mampu memecahkan masalah yang diberikan
- Mampu mengakses array multidimensi
- Mampu memahami tipe data `number`
- Mampu menggabungkan `looping`dan `conditional`
- Mampu menerapkan `nested loop`

## Directions

Diberikan sebuah function `rangeGrouped()` yang berfungsi untuk mengembalikan sebuah array multidimensi yang berisi bilangan berderet.
Function ini menerima tiga buah parameter yaitu `startNum, finishNum, step` bertipe data number.
- Parameter `startNum` berfungsi sebagai nilai awal dalam deret angka.
- Parameter `finishNum` berfungsi sebagai nilai akhir dalam deret angka.
- Parameter `step` berfungsi sebagai selisih atau beda dari setiap angka dan juga untuk menentukan panjang/banyaknya element array di dimensi ke dua.

Berikut adalah ketentuan:

- Jika parameter `startNum` lebih besar dibandingkan parameter `finishNum` maka angka-angka tersusun/berderet secara menurun (descending) dan begitupun sebaliknya.
- Jika parameter `step` tidak ada, maka nilanya akan di buat default sesuai kondisi:
    - Jika kondisinya parameter `startNum` lebih kecil dengan parameter `finishNum` maka nilai parameter `step` adalah `1` dan angka-angka tersusun/berderet secara menaik (ascending).
    - Jika kondisinya parameter `startNum` lebih besar dengan parameter `finishNum` maka nilai parameter `step` adalah `-1` dan angka-angka tersusun/berderet secara menurun (descending).

Contoh :
```js
console.log(rangeGrouped(1, 11, 2))
```
>Penjelasan:
>- Parameter `startNum` berupa angka `1` , parameter `finishNum` berupa angka `11` dan parameter `step` berupa angka `2`. disini bisa dilihat karena `startNum` lebih kecil dari `finishNum` atapun `step` bernilai `positif`. maka deret angka `ascending` menjadi `1,3,5,7,9,11`. Lalu deret angka diubah menjadi array multidimensi dengan `step` sebagai panjang/banyaknya element array di dimensi ke dua.
>
>Maka ouput yang dihasilkan adalah : ```[[1,3],[5,7],[9,11]]``` yang di pisah per `2` element, sesuai dengan nilai dari parameter `step`.

Sebagai pengingat function ini akan mengembalikan array multidimensi yang berisi urutan angka di mulai dari parameter `startNum` hingga parameter `finishNum` dengan selisi sesuai dengan parameter `step` dan pengelompokkan tiap element array 2 dimensi sesuai dengan parameter `step`.

NOTES:

- Jika parameter `startNum`, `finishNum`, dan `step` nya selain _number_, maka output akan mengeluarkan `[]` array kosong.
- Jika parameter `finishNum` nya dan atau parameter `startNum` kosong, maka output akan mengeluarkan `[]` array kosong.
- Jika parameter `step` kosong dan parameter `startNum` lebih kecil dari `finishNum`, maka default parameter `step` menjadi `1`.
- Jika parameter `step` kosong dan parameter `startNum` lebih besar dari `finishNum`, maka default parameter `step` menjadi `-1`.

```js
function rangeGrouped(startNum, finishNum, step){
  // Insert your code here

}

// Ascending
console.log(rangeGrouped(1, 11, 2))
// [[1,3],[5,7],[9,11]]
console.log(rangeGrouped(11, 23, 3))
// [[11,14,17],[20,23,'No Data']]

// Descending
console.log(rangeGrouped(66, 63, -1))
// [[66],[65],[64],[63]]
console.log(rangeGrouped(29, 5, -4))
// [[29,25,21,17],[13,9,5,'No Data']]

// Third parameter is empty
// If startNum is lower than finishNum then step = 1
console.log(rangeGrouped(11, 17))
// [[11],[12],[13],[14],[15],[16],[17]]
// IF startNum is greater than finishNum then step = -1
console.log(rangeGrouped(94, 89))
// [[94],[93],[92],[91],[90],[89]]

// Invalid Input then []
console.log(rangeGrouped('29',' 11', '-4'))
// []
console.log(rangeGrouped(77))
// []
console.log(rangeGrouped())
// []
```
