---
path: '/week-3/challenges/anchor-tiktok-viewer'
title: 'Ticket Viewer'
---

# Tik Tok Viewer

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

### songTitleFormatter

Diberikan sebuah function `songTitleFormatter` yang menerima sebuah paramter `str` berupa _string_ . Function ini bertujuan untuk mengubah song name ke dalam bentuk captalize.

```js
function songTitleFormatter(str) {
  // code here
}

console.log(songTitleFormatter("papi-chulo")); //Papi Chulo
console.log(songTitleFormatter("awas-nanti-jatuh-cinta")); //Awas Nanti Jatuh Cinta
```

### rankByView

Diberikan sebuah function `rankByView` yang menerima sebuah parameter `obj` berupa _object_. Function ini bertujuan untuk memberikan rank berdasarkan views yang di dapat .

Terdapat 3 jenis rank :

    - Top -> viewer lebih dari sama dengan 1000000
    - Middle -> viewer antara 300001 - 999999
    - Low -> viewer kurang dari sama dengan 300000

```js
function rankByView(obj) {
  // code here
}

console.log(
  rankByView({
    user: "chikakiku",
    views: 1000000,
    song: "papi-chulo",
  })
);

/* expected result
    {
        user : "chikakiku",
        views: 1000000,
        song : "papi-chulo"
        rank : "Top"
    }
    */
```

### songTitleGrouping

Diberikan sebuah function `songTitleGrouping` yang menerima sebuah parameter yaitu `data` berupa _array of object_. function ini akan menghasilkan sebuah object baru dengan mengambil masing-masing song name dengan views paling banyak. setiap song name akan bersifat unik, jika terdapat 2 objects dengan song name yang sama, maka hanya user dengan song name tersebut dan views terbanyak yang ditampilkan.

```js
function songTitleGrouping(data) {
  // code here
}
```

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

```javascript
{
  <song_name>: { user: <user>, views: <views>, rank : <rank> },
  <song_name>: { user: <user>, views: <views>, rank : <rank> },
  <song_name>: { user: <user>, views: <views>, rank : <rank> }
}
```

Perhatikan contoh test case berikut:

```javascript
function songTitleFormatter(str) {
  // Code here
}
function rankByView(obj) {
  // Code here
}
function songTitleGrouping(data) {
  // Code disini
}
// TEST CASE
console.log(
  songTitleGrouping([
    {
      user: "chikakiku",
      views: 1000000,
      song: "papi-chulo",
    },
    {
      user: "lisa Stream",
      views: 155700,
      song: "saranghae",
    },
    {
      user: "mr_jack",
      views: 720000,
      song: "mipan-zuzuzu",
    },
    {
      user: "12yes",
      views: 500000,
      song: "papi-chulo",
    },
    {
      user: "dj_cuap",
      views: 150000,
      song: "saranghae",
    },
  ])
);
/*
{
    "Papi Chulo" : {
        user : "chikakiku" ,
        views : 1000000,
        rank : "Top"
    },
    "Saranghae" : {
         user : "lisa Stream",
         views : 155700,
        rank : "Low"
    },
    "Mipan Zuzuzu" : {
        user : "mr_jack" ,
        views : 720000,
        rank : "Middle"
    }
}
*/
console.log(songTitleGrouping([])); // [];
console.log(songTitleGrouping()); // Insert data
```
