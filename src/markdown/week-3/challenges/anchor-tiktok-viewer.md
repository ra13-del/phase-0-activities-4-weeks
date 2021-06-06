---
path: '/week-3/challenges/anchor-tiktok-viewer'
title: 'TikTok Viewer'
---
# Tik Tok Viewer

## Objectives

- Mampu memecahkan masalah yang diberikan.
- Mampu mengakases array multidimensi menggunakan `nested loop`.
- Mampu mengakses sebuah array of object
- Mampu menggabungkan konsep `looping / iteration` dan `conditional`.
- Mampu membuat array dari string tertentu dan memanipulasi array.
- Mengerti keterkaitan antara satu function dengan function lainnya.
- Mengerti cara melemparkan data yang dikembalikan dari satu function kemudian digunakan sebagai parameter function lain.

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll

### HINTS

- Nama function **tidak boleh diganti dengan nama function lainnya**. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

Implementasikan function :

### convertData

Diberikan sebuah function `convertData` yang menerima sebuah parameter `data` berupa _array of object_. Function ini bertujuan untuk mengubah data pada key rewards menjadi output yang lebih mudah untuk diproses.

```js
function convertData(data) {
  //Your code here
}

console.log(
  convertData([
    {
      song: "Papi Chulo",
      user: "Chikakiku",
      viewers: 720,
      rewards: [
        ["Rocket", 11],
        ["Chocolate", 13],
        ["Ferrari", 1],
      ],
    },
    {
      song: "Saranghae",
      user: "Lisa Stream",
      viewers: 1400,
      rewards: [
        ["Diamond", 9],
        ["Heart", 20],
        ["Ferrari", 7],
        ["Star", 30],
      ],
    },
    {
      song: "Mipan Zuzuzu",
      user: "Mr Jack",
      viewers: 32,
      rewards: [
        ["Diamond", 1],
        ["Star", 5],
      ],
    },
  ])
);

/*
EXPECTED OUTPUT
[
  [ 'Rocket', 11, 'Chocolate', 13, 'Ferrari', 1 ],        
  [ 'Diamond', 9, 'Heart', 20, 'Ferrari', 7, 'Star', 30 ],
  [ 'Diamond', 1, 'Star', 5 ]
]
*/
```

### calculateTotalPoint

Diberikan sebuah function `calculateTotalPoint` yang menerima sebuah parameter `data` berupa _array_. Function ini bertujuan untuk menghitung total point dari setiap user.

```js
function calculateTotalPoint(data) {
  let listReward = [
    { name: "Rocket", point: 100 },
    { name: "Chocolate", point: 200 },
    { name: "Ferrari", point: 500 },
    { name: "Heart", point: 50 },
    { name: "Diamond", point: 150 },
    { name: "Star", point: 25 },
  ];
  //Your code here
}

console.log(
  calculateTotalPoint([
    ["Rocket", 11, "Chocolate", 13, "Ferrari", 1],
    ["Diamond", 9, "Heart", 20, "Ferrari", 7, "Star", 30],
    ["Diamond", 1, "Star", 5],
  ])
);
// [ 4200, 6600, 275 ]
```

### viewTime

Diberikan sebuah function `viewTime` yang menerima sebuah parameter `data` berupa _array of object_. Function ini bertujuan untuk menghitung total view time atau waktu total video yang ditonton dalam satuan **menit** untuk setiap user. View time diperoleh dengan mengkalikan jumlah viewers dengan durasi video.

```
- Setiap video akan memiliki durasi yang sama yaitu 45 detik
- Setiap viewer pasti akan menonton video selama 45 detik
- Total view time = total viewer * durasi video (detik) => konversi ke menit
```

```js
function viewTime(data) {
  //Your code here
}

console.log(
  viewTime([
    {
      song: "Papi Chulo",
      user: "Chikakiku",
      viewers: 720,
      rewards: [
        ["Rocket", 11],
        ["Chocolate", 13],
        ["Ferrari", 1],
      ],
    },
    {
      song: "Saranghae",
      user: "Lisa Stream",
      viewers: 1400,
      rewards: [
        ["Diamond", 9],
        ["Heart", 20],
        ["Ferrari", 7],
        ["Star", 30],
      ],
    },
    {
      song: "Mipan Zuzuzu",
      user: "Mr Jack",
      viewers: 32,
      rewards: [
        ["Diamond", 1],
        ["Star", 5],
      ],
    },
  ])
);
// [ 540, 1050, 24 ]
```

### tiktokRank

Diberikan sebuah function `tiktokRank` yang menerima sebuah parameter yaitu `data` berupa _array of object_. function ini akan menghasilkan sebuah object baru dengan mengelompokkan setiap user pada kategori tertentu berdasarkan `total point` dan `view time` yang dimiliki. 

```
Kategori User :
1. Platinum : user memiliki total point lebih dari 5000 dan view time lebih dari 1000
2. Gold : user memiliki total point pada rentang 2500 - 5000 dan view time yaitu 500 - 1000
3. Bronze : user yang tidak memenuhi kategori platinum dan gold akan masuk pada kategori ini
```


Perhatikan contoh test case berikut:

```javascript
function tiktokRank(data) {
  // Your code here
}

// TEST CASE
console.log(tiktokRank([])); // [];
console.log(tiktokRank()); // Insert data

let data = [
  {
    song: "Papi Chulo",
    user: "Chikakiku",
    viewers: 720,
    rewards: [
      ['Rocket', 11],
      ['Chocolate', 13],
      ['Ferrari', 1]
    ],
  },
  {
    song: "Saranghae",
    user: "Lisa Stream",
    viewers: 1400,
    rewards: [
      ['Diamond', 9],
      ['Heart', 20],
      ['Ferrari', 7],
      ['Star', 30],
    ]
  },
  {
    song: "Mipan Zuzuzu",
    user: "Mr Jack",
    viewers: 32,
    rewards: [
      ['Diamond', 1],
      ['Star', 5],
    ]
  },
  {
    song: "Savage Megan",
    user: "12yes",
    viewers: 980,
    rewards: [
      ['Star', 6],
      ['Diamond', 3],
      ['Rocket', 5],
      ['Heart', 2],
      ['Ferrari', 1],
      ['Chocolate', 4],
    ]
  },
  {
    song: "Lottery",
    user: "dj_cuap",
    viewers: 1240,
    rewards: [
      ['Star', 30],
      ['Heart', 10],
      ['Chocolate', 2],
      ['Ferrari', 4],
    ]
  },
  {
    song: "Roses",
    user: "Dior777",
    viewers: 560,
    rewards: [
      ['Rocket', 3],
      ['Star', 10],
      ['Diamond', 5],
      ['Heart', 4],
    ]
  },
]

console.log(tiktokRank(data))
/*
{
  Gold: [ 'Chikakiku', '12yes', 'dj_cuap' ],
  Platinum: [ 'Lisa Stream' ],
  Bronze: [ 'Mr Jack', 'Dior777' ]
}
*/
```
