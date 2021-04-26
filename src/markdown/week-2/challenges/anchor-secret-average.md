---
path: '/week-2/challenges/anchor-secret-average'
title: 'Secret Average'
---

# SECRET AVERAGE

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__` dan `testHelpers`, folder-folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti `shift()`, `unShift()`, `push()`, dan `pop()`

### HINTS

- *Dilarang mengganti nama function* yang diberikan skeleton code.

---

## Objectives
- Mampu melakukan **Nested Loop**
- Mampu melakukan **Concat pada string**
- Mampu **memanipulasi data array**

## Directions

Diberikan function dengan nama `secretAverage()` yang menerima 2 parameter yaitu `str` bertype data string dan `nilai` bertype data array. Function ini akan mengembalikan array of string.

```js
function secretAverage(str, nilai) {
  // your code here
}
```

#### Parameter

- `str` adalah kumpulan string yang mempunyai nilai angka rahasia yang bisa ditemukan di `nilai` berisi alfabet a-z dan tidak case sensitive.
- `nilai` bersifat menjadi kamus untuk mencari angka dengan posisi yang sesuai dengan tiap alfabet yang tertulis di `str`, kamus `nilai` disediakan di test case, contoh:

```js
let nilai1 = [
  'abcdefghijklmnopqrstuvwxyz',
  '12345678901234567890123456'
]
```

Cara membaca dan inplementasi dari nilai1 tersebut yaitu jika terdapat input `str`nya `'abcdev'`, maka nilai yang harus diolah dari alfabet tersebut sesuai `nilai1` diatas adalah: `a -> 1`, `b -> 2`, `c -> 3`, `d -> 4`, `e -> 5`, `v -> 2`. Jadi **setiap huruf/karakter alfabet hanya memiliki 1 digit nilai angka** saja.

#### Code

Disini kamu diminta untuk membuat sebuah function untuk menhitung rata-rata dari setiap `nilai` yang berasal dari `str` alfabet selain itu kamu juga diminta untuk menampilkan prosesnya terlebih dahulu dalam bentuk array of string. Jika input tidak benar (`undefined`, kosong, atau `null`) maka akan mengeluarkan pesan 
`Tidak ada data yang di olah`. Berikut **Contoh** langkah-lankahnya:

```js
let nilai1 = [
  'abcdefghijklmnopqrstuvwxyz',
  '12345678901234567890123456'
]
secretAverage('bagus', nilai1)
```

1. cari masing-masing nilai dari alfabet:
    - `b -> 2`, `a -> 1`, `g -> 7`, `u -> 1`, `s -> 9`
    - ```js
       let nilai1 = [
         'abcdefghijklmnopqrstuvwxyz',
       /* ||    |           | |      -> sesuai posisi yang sama */
         '12345678901234567890123456'
       ]
       ``` 
2. jumlahkan menjadi array of string sesuai urutannya,
    - format string yaitu: `[angka1] + [angka2] adalah [angka3]`
    - ```js
      [
        "2 + 1 adalah 3",   // 2 dari b, 1 dari a, dan 3 dari hasil penjumlahan keduanya  
        "3 + 7 adalah 10",  // 3 dari hasil penjumlahan sebelumnya (index 0), 7 dari g, 10 dari hasil penjumlahan keduanya
        "10 + 1 adalah 11", // 10 dari hasil penjumlahan sebelumnya (index 1), 1 dari u, 11 dari hasil penjumlahan keduanya
        "11 + 9 adalah 20", // 11 dari hasil penjumlahan sebelumnya (index 2), 9 dari s, 20 dari hasil penjumlahan keduanya
      ]
      ```
3. Menambahakan `kalimat` rata-rata di `string` di penjumlahan terakhir
    - format nya yaitu: `{string sebelumnya proses 2}, dan rata-ratanya adalah [angkaAkhir]/[banyakAngka] = [angka rata-rata]`
    - Untuk Angka rata-rata desimal maksimalnya adalah 2 digit setelah decimal point.
      misal untuk `5.166666666666667` dibulatkan menjadi `5.17`.
    - ```js
      [
        "2 + 1 adalah 3",
        "3 + 7 adalah 10",
        "10 + 1 adalah 11",
        "11 + 9 adalah 20, dan rata-ratanya adalah 20/5 = 4"
      ]
      ```
   

#### Test case

1. - Argumen:
    ```js
    let nilai1 = [
      'abcdefghijklmnopqrstuvwxyz',
      '12345678901234567890123456'
    ]
    console.log(secretAverage('bagus', nilai1))
    ```
   - Output di Konsol:
    ```bash
    [
      '2 + 1 adalah 3',
      '3 + 7 adalah 10',
      '10 + 1 adalah 11',
      '11 + 9 adalah 20, dan rata-ratanya adalah 20/4 = 5.00'
    ]
    ```

2. - Argumen:
    ```js
    let nilai2 = [
      'qwertyuiopasdfghjklzxcvbnm',
      '16143853285329927634775175'
    ]
    cosolole.log(secretAverage('hacktiv', nilai2))
    ```
   - Output di Konsol:
    ```bash
    [
      '2 + 5 adalah 7',
      '7 + 7 adalah 14',
      '14 + 6 adalah 20',
      '20 + 3 adalah 23',
      '23 + 3 adalah 26',
      '26 + 5 adalah 31, dan rata-ratanya adalah 31/6 = 5.17'
    ]
    ```

2. - Argumen:
    ```js
    cosolole.log(secretAverage())
    cosolole.log(secretAverage("", []))
    cosolole.log(secretAverage(null, null))
    ```
   - Output di Konsol:
    ```bash 
    Tidak ada data yang di olah
    Tidak ada data yang di olah
    Tidak ada data yang di olah
    ```