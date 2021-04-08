---
path: '/week-2/challenges/anchor-cross-pairs'
title: 'Cross Pairs'
---

# Cross Pairs

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya di perbolehkan menggunakan built-in function untuk konversi data bertipe string menjadi number atau sebaliknya, seperti `toString()`, `Number()`, dll.

### HINTS

- Variable `input` __tidak boleh diganti dengan variabel lain__ dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.

---

## Objectives
- Mampu mengubah tipe data number menjadi string, maupun sebaliknya
- Mengerti logika `looping`
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah

## Directions
Diberikan sebuah variabel `input` bertipe string, tugas kalian adalah menemukan pasangan antara
number dan number, number dan string, atau string dan string dari input yang di berikan.

contoh: `var input = 'EF8G65FE'`

maka hasil outputnya adalah:
```js
1 pasangan number dan number
1 pasangan number dan string
2 pasangan string dan string
0 pasangan string dan number

```

penjelasan:

dari contoh variabel input diatas, maka akan ditemukan 4 pasangan yaitu:
- `EF` merupakan pasangan ke 1 --> pasangan ini bertipe string dan string
- `8G` merupakan pasangan ke 2 --> pasangan ini bertipe number dan string
- `65` merupakan pasangan ke 3 --> pasangan ini bertipe number dan number
- `FE` merupakan pasangan ke 4 --> pasangan ini bertipe string dan string

Testlah program kamu dengan value angka dibawah ini:
```JS
var input = '3JJ476'    //  1 pasangan number dan number
                        //  1 pasangan number dan string
                        // 0 pasangan string dan string
                        // 1 pasangan string dan number

var input = '4J58DH4H'  // 1 pasangan number dan number
                        // 2 pasangan number dan string
                        // 1 pasangan string dan string
                        // 0 pasangan string dan number

var input = '3K7S6S'    // 0 pasangan number dan number
                        // 3 pasangan number dan string
                        // 0 pasangan string dan string
                        // 0 pasangan string dan number
```
