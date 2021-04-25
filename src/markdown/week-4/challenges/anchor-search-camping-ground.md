---
path: '/week-4/challenges/anchor-search-camping-ground'
title: 'Search Camping Ground'
---

# SEARCH CAMPING GROUND

## Notes

1. Jika parameter data yang diinput merupakan array kosong maka tampilkan "Invalid data"
2. Jika parameter data tidak diinput maka tampilkan "Invalid data"
3. Jika parameter highestPrice tidak diisi maka tampilkan seluruh pencarian berdasarkan kriteria tanpa ada batasan harga.

### HINTS

- Gunakan looping yang dapat meng-handle iterasi yang tidak diketahui kapan berhentinya
---

## Objectives
- Mampu menyelesaikan masalah yang diberikan
- Mampu mengakses `array of object` menggunakan loop `FOR` atau `WHILE`
- Mampu mengakses `object`
- Mampu membuat conditional menggunakan `IF...IF`, `IF...ELSE`, `IF...ELSE IF...ELSE` atau `SWITCH CASE`
- Mampu membuat object dengan nama property (key) yang dinamis

## Directions

Yurru Camp Platform merupakan sebuah platform aplikasi yang memberikan informasi mengenai camping ground.
Saat ini Yurru Camp sedang membangun sebuah fitur pencarian camping ground dan mengkategorikan berdasarkan region camping ground itu berada.

Bantulah Yurru Camp untuk menyelesaikan fitur ini.
Kalian diberikan 3 (tiga) parameter utama, yaitu data, criteria dan highestPrice
- Data adalah sebuah parameter yang memiliki value array of object yang berikikan list of camps
- criteria adalah sebuah parameter berupa kalimat (memiliki coma dan spasi) yang menunjukkan scenery apa saja yang user inginkan pada camping ground yang dicari
- highestPrice adalah sebuah parameter berupa number yang menunjukkan berapa batas harga masuk yang diinginkan user dari hasil pencariannya


Kalian diberikan 3 (tiga) buah function yang memiliki tugasnya masing-masing

function splitCriteria memiliki tugas untuk merubah parameter criteria menjadi sebuah array.
function findSuitableCamp memiliki tugas untuk menghasilkan array of object dari camp berdasarkan kriteria dan highestPrice yang diinput
function giveCamp memiliki tugas untuk mengkategorikan hasil pencarian berdasarkan region dari camp nya.

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun.

---

### Test Case
```js
/*

Input
=====
let camps1 = [
    {name: "Mandalawangi", region: "West Java", price: 50000, scenery: ["sun rise", "hills", "mountain", "forest"]},
    {name: "Tanakita", region: "West Java", price: 25000, scenery: ["hills", "greenery", "sky observatory"]},
    {name: "GMKA", region: "Central Java", price: 31000, scenery: ["night city", "hills", "mountain"]},
    {name: "Jurang jero", region: "Central Java", price: 15000, scenery: ["forest", "lake"]},
    {name: "Kampoeng", region: "East Java", price: 20000, scenery: ["meadow", "sky observatory"]},
    {name: "Bumi Perkemahan", region: "East Java", price: 10000, scenery: ["hills", "forest", "sun rise"]},
]
console.log(giveCamp(camps1, "hills, sun rise, forest", 10000))

Output
======
{
    'East Java': {
        places: [ 'Bumi Perkemahan' ] 
    } 
}


*/
```