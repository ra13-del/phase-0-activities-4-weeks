---
path: '/week-2/challenges/anchor-symbol-translate'
title: 'Symbol Translate'
---

# Symbol Translate


## Objectives
 - Mampu memecahkan masalah yang diberikan.
 - Mampu mengubah tipe data string menjadi number.
 - Mampu menggunakan operator aritmatika dan perbandingan.
 - Mampu menggabungkan konsep looping / iteration dan conditional.
 - Mampu membuat mengubah array of numbers menjadi string.
 - Mengerti keterkaitan satu function dengan function lainnya.
 - Mengerti cara melemparkan data yang dikembalikan dari satu function kemudian digunakan sebagai parameter function lain.


## Notes
 - Jalankan npm install terlebih dahulu
 - Pada skeleton terdapat folder __tests__, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
 - untuk menjalankan test, untuk memastikan solusi kamu sudah benar, jalankan command **npm test**


## Restriction
 - Tidak boleh menggunakan built-in function


## Hints
- Nama function haruslah convertSymbol, sortingEven, decrementOdd, convertNumber, dan result dan tidak boleh diganti dengan nama function lainnya. Untuk detail fungsi akan mengacu kepada Directions yang disebutkan di bawah



## Directions

Pada soal kali ini kamu akan berperan menjadi seorang detektif 🕵️‍♂️. Tugas kamu adalah untuk menerjemahkan sebuah teka-teki berupa kumpulan simbol menjadi sebuah kalimat. Tugas ini, di kerjakan dengan cara modular function, dengan __function result()__ sebagai function utamanya. 
```js
function result(arr) {

}

console.log(
    result(["@^","!&","!@","#!","&#","!(","@&","%%","!(","##","#&","@)"]) // lets go guyz
); 
console.log(
    result(["!(", "#&", "@@", "@%", "!@", "!%", "&#", "#%", "@%", "#!"]) // i love you
);

console.log(
    result(['!%','@&','@@','!&','$#','@)','!#','!%','@#','*','@!','$'])  // code hacktiv
);
```

<br>

Terdapat beberapa __function helper()__ yang akan dipanggil didalam function __function result()__, diantaranya : 

### convertSymbol

Diberikan sebuah function __convertSymbol__, function ini menerima array of string sebagai parameternya dan berfungsi untuk mengubah array yang elementnya berupa symbol menjadi angka.
Symbol diubah menjadi angka dengan ketentuan :
```
1.   '!' => 1               6.   '^' => 6
2.   '@' => 2               7.   '&' => 7
3.   '#' => 3               8.   '*' => 8
4.   '$' => 4               9.   '(' => 9
5.   '%' => 5               10.  ')' => 0
```

```js
function convertSymbol(arr) {
    //code here
}

console.log(functionSymbol([
  '!(', '#&', '@@',
  '@%', '!@', '!%',
  '&#', '#%', '@%',
  '#!'
])) 
/*
[
  19, 37, 22, 25, 12,
  15, 73, 35, 25, 31
]
*/
```
<br>

### sortingEven

Diberikan sebuah function __sortingEven__, function ini menerima array of numbers sebagai parameternya dan akan mengurutkan element angka yang bernilai genap secara *ascending*.

```js
function sortingEven(arr) {
    //code here
}

console.log(sortingEven([
  19, 37, 22, 25, 12,
  15, 73, 35, 25, 31
]));

/*
[          
  19, 37, 12, 25, 22, 15, 73, 35, 25, 31
]         ^       ^
*/
```
<br>

### decrementOdd

Diberikan sebuah function __decrementOdd__, function ini menerima array of numbers, dan setiap angka pada element di kurangi dengan *length* dari array tersebut.

```js
function decrementOdd(arr) {
    //code here
}

consolo.log(decrementOdd([          
  19, 37, 12, 25, 22, 15, 73, 35, 25, 31
]));
/*
[
  9, 27, 12, 15, 22,
  5, 63, 25, 15, 21
]
*/
```

<br>

### convertNumber

Diberikan sebuah function __convertNumber__, function ini menerima array of numbers sebagai parameternya dan berfungsi untuk mengembalikan sebuah string, dengan ketentuan:
- Jika angka antara 1 sampai 26, maka :
```
1.   1 => 'a'              
2.   2 => 'b'              
3.   3 => 'c'               
4.   4 => 'd'               
.
.
.
26. 26 => 'z'     
```
- Jika angka nya lebih besar dari 26 maka, angka tersebut di ubah menjadi __'   ' (spasi)__.

```js
function convertNumber(arr) {
    //code here
}

console.log(convertNumber([
  9, 27, 12, 15, 22,
  5, 63, 25, 15, 21
]))

/*
i love you
*/
```