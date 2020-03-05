# Data Type Challenge

## Objectives
- Mampu menggunakan template literals
- Mampu menggunakan `typeof` untuk sebuah kasus masalah yang diberikan
- Mampu dan mengerti penggunaan `conditional branch`
- Mampu menggunakan truthy falsy didalam pengecekan kondisi
- Mampu mengkondisikan posisi sebuah `conditional` dari sebuah permasalahan

**RESTRICTION**
Hanya boleh menggunakan built-in function typeof, isNaN(), dan built-in untuk menkonversi tipe data, seperti toString(), Number(), dll

## Directions
Diberikan sebuah variabel `kata` bertipe string.

Buatlah program yang mengecek kondisi tipe data dari kata yang diberikan.
- Jika data merupakan sebuah string, maka tampilkan 'username ' + kata (gunakan template literals)
- Jika data merupakan sebuah number, maka tampilkan 'age: ' + data (gunakan template literals)
- Jika data merupakan sebuah boolean, cek nilainya:
  - jika true maka tampilkan 'thank you for agreeing'
  - jika false maka tampilkan 'cannot proceed without agreement'
- Jika nilai/value dari data adalah angka 0 atau empty string atau undefined atau null atau NaN maka tampilkan 'Invalid data'

```JavaScript
Contoh 1:
let kata = 'Stefani'

maka output adalah 'username Stefani'

Contoh 2:
let kata = 25

maka output adalah 'age 25'

Contoh 3:
let kata = 0

maka output adalah 'Invalid data'

Contoh 4:
let kata = '0'

maka output adalah 'username 0'

Contoh 5:
let kata = false

maka output adalah 'cannot proceed without agreement'
```
