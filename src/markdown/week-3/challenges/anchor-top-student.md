---
path: '/week-3/challenges/anchor-top-student'
title: 'Top Student'
---

# Top Student

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__` dan `testHelpers`, folder-folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun selain `.push()`.

### HINTS

- Parameter `arrObj` _tidak boleh diganti dengan parameter apapun_.

---

## Objectives

- Mampu menyelesaikan masalah yang diberikan
- Mampu mengakses dan membuat key di object
- Mampu mengakses array of object
- Mampu menggunakan modular function

## Directions

Kali ini kalian disuruh membuat program untuk mendapatkan student dengan nilai paling tinggi. Telah disediakan data awalnya berupa array of object yang isi keynya / propertiesnya yaitu `id`, `fistName`, `lastName`, `phase`, `batch`, dan `finalScore`. kalian diberikan 3 buah function yang saling berhubungan untuk menyelesaikan program ini. Berikut adalah functionnya: 

1. **addStatus**
  pada function ini kalian diminta untuk membuat key baru di setiap student dengan nama `status`.
  Isi dari status terdapat tiga hal yaitu:
  - `'passed'` jika `finalScore`nya 65 ke atas
  - `'fail'` jika `finalScore`nya dibawah 65
  - `'withdraw'` jika `finalScore`nya 0
  Function ini akan mengembalikan array of Object

  contoh code:

  ```js
  function addStatus(arrObj) {
    // your code here
  }

  console.log(addStatus([
    { id: 1, firstName: "Haiden", lastName: "Rizk", phase: "Prep", batch: "02-Armenian", finalScore: 55.66, },
    { id: 2, firstName: "Abyaz", lastName: "Rizk", phase: "Tiga", batch: "01-Agile", finalScore: 99.89, },
    { id: 4, firstName: "Omari", lastName: "Omari", phase: "Satu", batch: "01-Artic", finalScore: 0, },
  ]))
  /** Output:
   [
    {
      id: 1,
      firstName: 'Haiden',
      lastName: 'Rizk',
      phase: 'Prep',
      batch: '02-Armenian',
      finalScore: 55.66,
      status: 'fail'
    },
    {
      id: 2,
      firstName: 'Abyaz',
      lastName: 'Rizk',
      phase: 'Tiga',
      batch: '01-Agile',
      finalScore: 99.89,
      status: 'passed'
    },
    {
      id: 4,
      firstName: 'Omari',
      lastName: 'Omari',
      phase: 'Satu',
      batch: '01-Artic',
      finalScore: 0,
      status: 'withdraw'
    }
  ]
   * /
  ```

2. **phaseGroup**
  Setelah mendapatkan data dari pengolahan function sebelumnya `(no. 1)`. Maka pada function ini kalian diminta untuk mengelompokkan Student menurut phasenya.
  Dalam function ini akan mengembalikan object dengan key phasenya yang ada dalam data parameter

  contoh code:
  ```js
  function phaseGroup(arrObj) {
    // your code here
  }  

  console.log(phaseGroup([
    {id: 1,firstName: 'Haiden',lastName: 'Rizk',phase: 'Prep',batch: '02-Armenian',finalScore: 55.66,status: 'fail'},
    {id: 2,firstName: 'Abyaz',lastName: 'Rizk',phase: 'Tiga',batch: '01-Agile',finalScore: 99.89,status: 'passed'},
    {id: 4,firstName: 'Omari',lastName: 'Omari',phase: 'Satu',batch: '01-Artic',finalScore: 0,status: 'withdraw'}
  ]))
  /** Output:
   {
    Prep: [
      {id: 1,firstName: 'Haiden',lastName: 'Rizk',phase: 'Prep',batch: '02-Armenian',finalScore: 55.66,status: 'fail'}
    ],
    Tiga: [
      {id: 2,firstName: 'Abyaz',lastName: 'Rizk',phase: 'Tiga',batch: '01-Agile',finalScore: 99.89,status: 'passed'}
    ],
    Satu: [
      {id: 4,firstName: 'Omari',lastName: 'Omari',phase: 'Satu',batch: '01-Artic',finalScore: 0,status: 'withdraw'}
    ]
  }
   */
  console.log(phaseGroup([
    { id: 6, firstName: "Hiby", lastName: "Issa", phase: "Satu", batch: "01-Artic", finalScore: 97.53,status: 'passed' },
    { id: 7, firstName: "Hara", lastName: "Nyt", phase: "Dua", batch: "02-Armenian", finalScore: 83.98,status: 'passed' },
    { id: 8, firstName: "AHara", lastName: "Nyt", phase: "Dua", batch: "02-Armenian", finalScore: 86.98,status: 'passed' },
  ]))
  /** Output:
   {
    Satu: [
      {id: 6,firstName: 'Hiby',lastName: 'Issa',phase: 'Satu',batch: '01-Artic',finalScore: 97.53,status: 'passed'}
    ],
    Dua: [
      {id: 7,firstName: 'Hara',lastName: 'Nyt',phase: 'Dua',batch: '02-Armenian',finalScore: 83.98,status: 'passed'}
      {id: 8firstName: 'AHara',lastName: 'Nyt',phase: 'Dua',batch: '02-Armenian',finalScore: 86.98,status: 'passed'}
    ]
  }
   * /
  ```
  
3. **getHighestScore**
  Pada function ini kalian disuruh menampilkan 1 student dengan finalScore tertinggi sesuai phase masing-masing.
  Selain itu property student yang ditampilkan juga berubah menjadi:
  - `fullName` -> didapat dari `firstName` dan `lastName`
  - `batch`
  - `finalScore`
  Jika score tertinggi ada lebih dari satu maka cukup tampilkan satu saja.

  contoh code:
  ```js
  function getHighestScore(arrObj) {
    // your code here
  }

  console.log(getHighestScore([
    { id: 1, firstName: "Letha", lastName: "En", phase: "Dua", batch: "02-Armenian", finalScore: 85.21 },
    { id: 2, firstName: "Abyaz", lastName: "Rizk", phase: "Tiga", batch: "01-Agile", finalScore: 99.89, },
    { id: 3, firstName: "Angkas", lastName: "Ky", phase: "Dua", batch: "02-Armenian", finalScore: 85.43, },
    { id: 4, firstName: "Kalson", lastName: "Y", phase: "Tiga", batch: "01-Agile", finalScore: 66.6, },
    { id: 5, firstName: "Darpha", lastName: "Omari", phase: "Satu", batch: "01-Artic", finalScore: 100, },
    { id: 7, firstName: "Hara", lastName: "Nyt", phase: "Dua", batch: "02-Armenian", finalScore: 70.89, },
    { id: 6, firstName: "Hiby", lastName: "Issa", phase: "Satu", batch: "01-Artic", finalScore: 97.53, },
    { id: 7, firstName: "Hara", lastName: "Nyt", phase: "Dua", batch: "02-Armenian", finalScore: 83.98, },
  ]))
  /**
  {
    Dua: { fullName: 'Angkas Ky', batch: '02-Armenian', finalScore: 85.43 },
    Tiga: { fullName: 'Abyaz Rizk', batch: '01-Agile', finalScore: 99.89 },
    Satu: { fullName: 'Darpha Omari', batch: '01-Artic', finalScore: 100 }
  }
   */
  console.log(getHighestScore(let studentData = [
    { id: 1, firstName: "Alfie", lastName: "En", phase: "Prep", batch: "02-Armenian", finalScore: 85.21 },
    { id: 2, firstName: "Haiden", lastName: "Rizk", phase: "Prep", batch: "02-Armenian", finalScore: 55.66, },
    { id: 3, firstName: "Isaac", lastName: "Ky", phase: "Prep", batch: "02-Armenian", finalScore: 85.43, },
    { id: 4, firstName: "Kalson", lastName: "Y", phase: "Prep", batch: "02-Armenian", finalScore: 0, },
    { id: 5, firstName: "Omari", lastName: "Omari", phase: "Satu", batch: "01-Artic", finalScore: 0, },
    { id: 6, firstName: "Deli", lastName: "Issa", phase: "Satu", batch: "01-Artic", finalScore: 97.53, },
    { id: 7, firstName: "Nayyer", lastName: "Nyt", phase: "Prep", batch: "02-Armenian", finalScore: 0, },
  ]))
  /**
  {
    Prep: { fullName: 'Isaac Ky', batch: '02-Armenian', finalScore: 85.43 },
    Satu: { fullName: 'Deli Issa', batch: '01-Artic', finalScore: 97.53 }
  }
   */
  ```

<br>
Buatlah implementasi JavaScript-nya!
___