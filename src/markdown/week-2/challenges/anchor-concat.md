# Concat

## Objectives

- Mampu melakukan manipulasi pada sebuah Array dengan built-in function
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function

## Directions

Diberikan sebuah function `concat` yang dapat menerima 2 parameter yaitu `front` dan `back` dengan tipe data array.

Buatlah algoritma di dalam function `concat` sehingga kedua array ``front`` dan ``back`` bergabung menjadi satu array.

Pastikan kode kamu bisa menjalankan semua test case yang diberikan!

### RESTRICTION

- Dilarang menggunakan built-in function ``.concat()``!

---

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### HINTS

- Gunakan built-in function `.push()`!
- Nama function haruslah `concat` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

```js
function concat(front, back) {
    // Insert your code here
}

// Test case: hasil function concat()
console.log(concat(['ant', 'bison', 'camel'], ['duck', 'elephant'])) // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(concat([100, 200, 300], ['400', '500', '600'])) // [ 100, 200, 300, '400', '500', '600' ]
console.log(concat(['true', true], [false, null, NaN, undefined])) // [ 'true', true, false, null, NaN, undefined ]
console.log(concat(['Depan'], ['Belakang'])) // ['Depan', 'Belakang']
console.log(concat([''], [''])) // [ '', '' ]

// Test case: function menerima satu array kosong!
console.log(concat(['Depan'], [])) // ['Depan']
console.log(concat([], ['Belakang'])) // ['Belakang']

// Test case: catch error!
console.log(concat()) // []
```
