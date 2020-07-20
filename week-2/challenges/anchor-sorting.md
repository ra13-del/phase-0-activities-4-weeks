# Logic Challenge - Sorting!

## Objectives
- Mampu membuat function serupa built in function sederhana JavaScript
- mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah
- Mampu mengakses sebuah array
- Mampu menukar value dari dua variabel

**RESTRICTION**

Boleh menggunakan sort(), built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengecek tipe data, seperti typeof dan isNaN dll.

## Directions

Buatlah function yang mengurutkan sebuah array dari terkecil sampai terbesar.

***NOTES***
DIlarang menggunakan built in function .sort

### Release 0
Mengurutkan array yang valuenya semua bertipe number.

```JavaScript
function sorting(array) {
  // your code here
}

console.log(sorting([ 2, 4, 6, 8, 2, 3 ])); //[ 2, 2, 3, 4, 6, 8 ]
```


### Release 1
Agar lebih menarik, kamu diminta untuk membuat sorting array berdasarkan tipe data dari array yang diberikan

```JavaScript
function sortingByType(array) {
  // your code here
}

console.log(sortingByType([ 1, 3, 'array', -45, true, false, 'big' ]));
// [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
```

## Release 2
Selanjutnya kamu diminta untuk menghandle data yang tidak diinginkan seperti null, undefined, NaN dan array kosong dengan menghapus data aneh tersebut dari array sebelum di sortir.


```JavaScript
function sortAllClean(array) {
  //your code here
}

console.log(sortAllClean([ undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false]);
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]

console.log(sortAllClean([ NaN, undefined ])); // []
```
