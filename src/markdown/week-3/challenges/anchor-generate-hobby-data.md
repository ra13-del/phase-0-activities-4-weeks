---
path: '/week-3/challenges/anchor-generate-hobby-data'
title: 'Generate Hobby Data'
---

# Generate Hobby Data

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

Sebuah startup media sosial ingin meningkatkan kemampuan algoritma untuk menghubungkan para penggunanya, untuk itu startup ini perlu membuat kumpulan data terkait hobi-hobi yang dimiliki penggunanya. Anda adalah salah satu developer startup tersebut dan project manager anda menginginkan anda mengerjakan projek ini. Project manager anda telah membuat beberapa landasan terkait project ini, tugas anda adalah mengikuti landasan tersebut. landasan tersebut berupa function yang memiliki kriteria tertentu, berikut adalah function-function beserta kriterianya:

### Release 1 - `createObject`

- Function menerima 1 parameter `arr` berupa _array of object_ yang berisi _object user_.
- Function ini bertujuan untuk membuat objek baru yang memiliki key nama-nama hobi yang berasal dari elemen-elemen `hobbies` milik _object user_.
- contoh:

  - Notes: `totalAge` pada output dibawah merupakan hasil penjumlahan dari `age` setiap objek yang memiliki hobi yang sama, contohnya pada key "watching film" di output `totalAge`-nya adalah hasil penjumlahan `age` milik Basil dan Zul Fikar.

  ```
  let arr = [
    {
      name: "Basil",
      age: 27,
      hobbies: ["enjoying meme", "watching films"]
    },
    {
      name: "Zul Fikar",
      age: 27,
      hobbies: ["listening metal music", "watching films"]
    },
  ]

  console.log(createObject(arr))

  /*
  {
    "enjoying meme": {
      people: ["Basil"],
      totalAge: 27
    },
    "watching films": {
      people: ["Basil", "Zul Fikar"],
      totalAge: 54
    },
    "listening metal music": {
      people: ["Zul Fikar"],
      totalAge: 27
    }
  }
  */
  ```

### Release 2 - `filteringObject`

- Function ini menerima 2 parameter `obj` berupa _object_ dan `num` berupa _number_.
- Function ini bertujuan untuk memfilter hobi yang memiliki jumlah `people` minimal sebanyak `num`.
- Function ini juga bertujuan membuat objek baru, yang berisi key `people`, `averageAge`, dan `note`.
- Notes:
  1. jika `averageAge` lebih dari 45 maka isi `note` adalah "this hobby is popular among old people"
  2. selain itu maka isi `note` adalah "this hobby is popular among young people"
- contoh:

  - Notes: `averageAge` pada output merupakan hasil pembagian `totalAge` oleh length `people` pada input.

  ```
  let obj = {
    "enjoying meme": {
      people: ["Basil"],
      totalAge: 27
    },
    "watching films": {
      people: ["Basil", "Zul Fikar"],
      totalAge: 54
    },
    "listening metal music": {
      people: ["Zul Fikar"],
      totalAge: 27
    }
  }
  let num = 2

  console.log(filteringObject(obj, num))

  /*
  output = {
    "watching films": {
      people: ["Basil", "Zul Fikar"],
      averageAge: 27,
      note: "this hobby is popular among young people"
    },
  }
  */
  ```

### Release 3 - `convertToArray`

- Function ini menerima 1 parameter `obj` berupa _object_.
- Function ini bertujuan untuk mengubah _object_ menjadi _array of object_.
- contoh:

```
  let obj = {
    "watching films": {
      people: ["Basil", "Zul Fikar"],
      averageAge: 27,
      note: "this hobby is popular among young people"
    },
  }
  console.log(convertToArray(obj))
  /*
  [
    {
      name: "watching films",
      people: ["Basil", "Zul Fikar"],
      averageAge: 27,
      note: "this hobby is popular among young people"
    }
  ]
  */
```

### Release 4 - `generateHobbyData`

- Function ini merupakan main function, dimana function-function sebelumnya dipanggil dan digunakan.
- Function ini memiliki 2 parameter `data` berupa _array of object_ dan `minimalPeople` berupa _number_.
- Apabila `data` atau `minimalPeople` adalah _undefined_ maka function akan mengembalikan string "Invalid input".
- Apabila `data` adalah array kosong maka function akan mengembalikan string "Data is empty".
- Apabila tidak ada satu hobi pun yang jumlah `people`-nya lebih dari `minimalPeople`, maka function akan mengembalikan "All hobby has total people below `minimalPeople`"
- contoh:

  ```
  let data = [
    {
      name: "Basil",
      age: 27,
      hobbies: ["enjoying meme", "watching films"]
    },
    {
      name: "Zul Fikar",
      age: 27,
      hobbies: ["listening metal music", "watching films"]
    },
  ]
  let minimalPeople1 = 5;
  let minimalPeople2 = 2;

  console.log(generateHobbyData()) //Input invalid
  console.log(generateHobbyData(data)) //Input invalid
  console.log(generateHobbyData([], 4)) //Data is empty
  console.log(generateHobbyData(data, minimalPeople1)) //All hobby has total people below 5
  console.log(generateHobbyData(data, minimalPeople2))
  /*
  [
    {
      name: "watching films",
      people: ["Basil", "Zul Fikar"],
      averageAge: 27,
      note: "this hobby is popular among young people"
    }
  ]
  */
  ```
