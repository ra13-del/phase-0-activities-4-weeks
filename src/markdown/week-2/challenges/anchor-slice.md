---
path: '/week-2/challenges/anchor-slice'
title: 'Slice'
---

# Slice

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function push()

### HINTS

- Nama function haruslah `slice` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah
- Wajib menggunakan `While loop`

## Objectives

- Mampu menggunakan built in function pada Array
- Mampu melakukan manipulasi pada sebuah Array
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function

## Directions

Diberikan sebuah function `slice` yang dapat menerima 3 paramter yaitu `data` (mandatory) dengan tipe Array, `start` (optional) dengan tipe integer dan `end` (optional) dengan tipe integer.

Buatlah algoritma di dalam function `slice` sehingga bisa menghasilkan output seperti contoh berikut:

```js
function slice(data, start, end) {
  // your code here
}

console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)) // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)) // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)) // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])) //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)) //[]
console.log(slice()) //Invalid data
```