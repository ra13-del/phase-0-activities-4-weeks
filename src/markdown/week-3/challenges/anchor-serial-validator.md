---
path: '/week-3/challenges/anchor-serial-validator'
title: 'Serial Validator'
---

# Serial Validator

## Objectives

- Mampu memecahkan masalah yang diberikan.
- Mampu mengubah tipe data **string** menjadi **number**.
- Mampu menggunakan operator aritmatika dan perbandingan.
- Mampu menggabungkan konsep _looping_ / _iteration_ dan _conditional_.
- Mampu membuat **array** dari **string** tertentu dan memanipulasi **array**.
- Mengerti keterhubungan satu function dengan function lainnya.
- Mengerti cara melemparkan data yang dikembalikan dari satu function kemudian digunakan sebagai parameter function lain.

### Notes

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### Restriction

- Tidak boleh menggunakan built-in function

### Hints

- Nama function haruslah `splitString`, `reverseOddIndex`, `decryptElement`, `groupingSymbol` dan `serialValidator` dan **tidak boleh diganti dengan nama function lainnya**. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

**Serial Validator**

Diberikan sebuah function `serialValidator` yang menerima satu parameter bertipe data string. Function ini berfungsi untuk melakukan pengecekan apakah string yang menjadi parameter adalah sebuah serial number yang valid. Berikut adalah proses atau cara kerja untuk function `serialValidator`:

1. Panjang string harus minimal 9 karakter.
2. String input harus dipisah berdasarkan spasi dan dikumpulkan ke dalam sebuah array. Gunakan funtion [splitString](#SplitString).
3. Element array index ganjil perlu dibalik. Gunakan function [reverseOddIndex](#ReverseOddIndex).
4. Setiap element dari array perlu diubah menjadi kumpulan symbol. Gunakan function [decryptElement](#DecryptElement).
5. Buatlah array 2 dimensi untuk mengelompokkan symbol-symbol tersebut. Gunakan function [groupingSymbol](#GroupingSymbol)
6. Gunakan function [serialValidator](#SerialValidator) untuk memanggil semua function-function di atas.


#### **SplitString**

Diberikan sebuah function `splitString` yang menerima satu parameter **string**. Dimana function ini akan memisahkan string input dan masukkannya ke dalam sebuah **array**. Output dari function ini bertipe data **array**. Perhatikan contoh berikut:

```js
function splitString(str) {
  // Your code here
}

console.log(splitString("79 08 86 79"));
// [ '79', '08', '86', '79' ]

console.log(splitString("124 765"));
// [ '124', '765' ]
```

#### **ReverseOddIndex**

Diberikan sebuah function `reverseOddIndex` yang menerima satu parameter **array**. Dimana function ini akan membalikkan element array dengan index ganjil saja. Output dari function ini bertipe data **array**. Perhatikan contoh berikut:

```js
function reverseOddIndex(arr) {
  // Your code here
}

console.log(reverseOddIndex([ '79', '08', '86', '79' ]));
// [ '79', '80', '86', '97' ]
/*
penjelasan :
untuk index genap
'79', tidak dilakukan perubahan

untuk index ganjil
'08', karakter pada index ganjil akan dibalik
'08' dibalik menjadi '80'
*/

console.log(reverseOddIndex([ '124', '765' ]));
// [ '124', '567' ]
```

#### **DecryptElement**

Diberikan sebuah function `decryptElement` yang menerima satu parameter bertipe data **array**. Dimana function ini akan mengubah element array ke dalam bentuk symbol. Urutan dari symbol yang digunakan jika dibandingkan dengan angka adalah `0123456789` diubah menjadi `!@#$%^&*()`. Untuk element dengan index genap, akan mengikuti urutan tersebut. Sedangkan untuk element dengan index ganjil, untuk angka `0` akan menjadi `9` baru diubah menjadi symbol, selain itu, tiap-tiap angka perlu dikurangi 1 (satu) terlebih dahulu, baru diubah ke dalam bentuk symbol. Output dari function ini bertipe data **array**. Perhatikan contoh berikut:

```js
function decryptElement(arr) {
  // Your code here
}

console.log(decryptElement([ '79', '80', '86', '97' ]));
// [ '*)', '*#', '(&', '(&' ]
/*
penjelasan :

0 1 2 3 4 5 6 7 8 9
! @ # $ % ^ & * ( )

untuk index genap
'79' --> index 0
'7' diubah menjadi symbol '*'
'9' diubah menjadi symbol ')'

untuk index ganjil
'80' --> index 1
'8' dikurangi 1 = 7, diubah menjadi symbol '*'
'0' dikurangi 1 = -1, karena nilai negatif maka diganti menjadi 9
'9' diubah menjadi symbol ')'
*/

console.log(decryptElement([ '124', '567' ]));
// [ '@#%', '%^&' ]
```

#### **GroupingSymbol**

Diberikan sebuah function `groupingSymbol` yang menerima satu parameter bertipe data **array**. Dimana function ini akan mengelompokkan symbol-symbol yang sudah dibuat menjadi array 2 dimensi, dengan tiap-tiap element array berjumlah 2 element. Output dari function ini bertipe data **array multi dimensi**. Perhatikan contoh berikut:

```js
function groupingSymbol(arr) {
  // Your code here
}

console.log(groupingSymbol([ '*)', '*)', '(&', '(&' ]));
// [
//   [ '*)', '*)' ],  --> berisi index 0 dan index 1 dari array input
//   [ '(&', '(&' ]   --> berisi index 2 dan index 3 dari array input
// ]

console.log(groupingSymbol([ '@#%', '%^&' ]));
// [
//   [ '@#%', '%^&' ]
// ]
```

#### **SerialValidator**

Hasil dari function `groupingSymbol` berupa array 2 dimensi, perlu diolah terlebih dahulu untuk mendapatkan hasil akhir, dengan cara membandingkan value dari element array 2 dimensi, apabila index 0 dan index 1 bernilai sama, maka tampilkan `Serial number is valid`, bila tidak, tampilkan `Invalid serial number`.

Berikut adalah kriteria function `serialValidator`:
- Harus memanfaatkan function `splitString`, `reverseOddIndex`, `decryptElement`, dan `groupingSymbol` dan dipanggil di dalam function `serialValidator` secara berurutan.
- Function akan mengembalikan string berdasarkan hasil dari grouping symbol.
- Function akan mengembalikan string `Harus lebih dari 9 karakter` jika paramater string yang diberikan panjangnya kurang dari 9 karakter.

Perhatikan contoh berikut:

```js
function splitString(str) {
  // Your code here
}

function reverseOddIndex(arr) {
  // Your code here
}

function decryptElement(arr) {
  // Your code here
}

function groupingSymbol(arr) {
  // Your code here
}

function serialValidator(str) {
  // Your code here
}

console.log(serialValidator("1234"));
// Harus lebih dari 9 karakter

console.log(serialValidator("79 08 86 79"));
// Serial number is valid

console.log(serialValidator("124 765 876 678"));
// Invalid serial number

console.log(serialValidator("4947 8505 6843 4597"));
// Serial number is valid

console.log(serialValidator("3417 1218 1813 1311"));
// Invalid serial number

/*
contoh 1:
hasil dari groupingSymbol
[
  [ '*)', '*)' ], --> index 0 dan index 1 bernilai sama
  [ '(&', '(&' ]  --> index 0 dan index 1 bernilai sama
]
output:
`Serial number is valid`

contoh 2:
hasil dari groupingSymbol
[
  [ '*#', '(&' ], --> index 0 dan index 1 TIDAK sama
  [ '(&', '(&' ]  --> index 0 dan index 1 bernilai sama
]
output:
`Invalid serial number`
*/
```