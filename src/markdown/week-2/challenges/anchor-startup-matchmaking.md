---
path: '/week-2/challenges/anchor-startup-matchmaking'
title: 'Payroll'
---

# Start-Up Match Making

## Objectives

- Mampu memecahkan masalah yang diberikan.
- Mampu menggabungkan konsep _looping_ / _iteration_ dan _conditional_.
- Mampu membuat **array** dari **string** tertentu dan memanipulasi **array**.
- Mengerti keterhubungan satu function dengan function lainnya.
- Mengerti cara melemparkan data yang dikembalikan dari satu function kemudian digunakan sebagai parameter function lain.

### Notes

- Jalankan `npm install` terlebih dahulu.
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`.

### Restriction

- Tidak boleh menggunakan built-in function

### Hints

- Nama function haruslah `splitJobCharacters`, `reverseJobCharacters`, `decryptJobCharacters`, `makingDreamTeam`,
  dan `startUpMatchMaking` dan **tidak boleh diganti dengan nama function lainnya**. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah.

---

## Directions

**Start-Up Match Making**

Di challenge kali ini kalian diberikan sebuah function `startUpMatchMaking` yang menerima satu parameter bertipe data string. Function ini menerima sebuah parameter bertipe data string, dan parameter ini berisikan nama dan job characters dari para pejuang start-up. dan value job characters disini di sajikan dalam bentuk disandikan/terenkripsi sehingga satu sama lain pada awalnya belum mengetahui apa job characters mereka masing-masing. Disini kalian di minta untuk membuat sebuah tim Start-Up dan mendekripsikan/decode job characters yang telah disandikan/terenkripsi, dan yang mana tim ini nanti akan di ikut sertakan ke dalam lomba _Start-Up International_. Berikut adalah proses atau cara kerja untuk function `startUpMatchMaking`:

1. Pisahkan nama dan job characters menjadi array. Gunakan function [splitJobCharacters](#SplitJobCharacters).
2. Putar balikkan value job characters yg telah disandikan. Gunakan function [reverseJobCharacters](#ReverseJobCharacters).
3. Decryptlah value job characters yg telah disandikan. Gunakan function [decryptJobCharacters](#DecryptJobCharacters).
4. Bentuklah sebuah tim dengan format array 2 dimensi yang tiap elementnya berisi nama dan job characters. Gunakan function [makingDreamTeam](#MakingTheDreamTeam).


Berikut adalah kriteria function `startUpMatchMaking`:

- Harus memanfaatkan function `splitJobCharacters`, `reverseJobCharacters`, `decryptJobCharacters`, dan `makingDreamTeam` dan dipanggil di dalam function `startUpMatchMaking` secara berurutan.
- Function akan mengembalikan string berdasarkan hasil pengecekkan data start-up tim di function `startUpMatchMaking`.
- Function akan mengembalikan string `Minimum 3 members in the team` jika data start-upnya yang sudah diolah kurang dari 3 orang.

Perhatikan contoh berikut:

```js
function splitJobCharacters(str) {
  // Your code here
}

function reverseJobCharacters(arr) {
  // Your code here
}

function decryptJobCharacters(arr) {
  // Your code here
}

function makingDreamTeam(arr) {
  // Your code here
}


function startUpMatchMaking(str) {
  // Your code here
}

console.log(startUpMatchMaking('idaz-sfmutvi,anggara-sfutqji,fika-sfldbi'))
// Match your Dream Start-Up Team
console.log(startUpMatchMaking('eko-sfldbi,fajrin-sfmutvi,abdullah-sfutqji,anggara-sfutqji'))
// Match your Dream Start-Up Team
console.log(startUpMatchMaking('abdullah-sfldbi,fajrin-sfmutvi,samir-sfldbi,eko-sfmutvi,basil-sfmutvi'))
// The job composition in the team is not suitable
console.log(startUpMatchMaking('samir-sfmutvi,basil-sfutqji,eko-sfmutvi'))
// The job composition in the team is not suitable
console.log(startUpMatchMaking('samir-sfmutvi,basil-sfutqji'))
// Minimum 3 members in the team
```

#### SplitJobCharacters


Diberikan sebuah function `splitJobCharacters` yang menerima satu parameter **string**. Dimana function ini akan memisahakan/splitting input str menjadi array dengan urutan nama dan job characters. Output dari function ini bertipe data **array**. Perhatikan contoh berikut:


```js
function splitJobCharacters(str) {
  // Your code here

}

console.log(splitJobCharacters('idaz-sfmutvi,anggara-sfutqji,dear-sfldbi'));
// [ 'idaz', 'sfmutvi', 'anggara', 'sfutqji', 'dear', 'sfldbi' ]
console.log(splitJobCharacters('kurnia-sfutqji,adi-sfldbi,anggara-sfmutvi'));
// [ 'kurnia', 'sfutqji', 'adi', 'sfldbi', 'anggara', 'sfmutvi' ]
```

#### ReverseJobCharacters

Diberikan sebuah function `reverseJobCharacters` yang menerima satu parameter **array**. Dimana function ini akan membalik value job characters bertipe data **string** di dalam data array . Output dari function ini bertipe data **array** dan value job characters bertipe data **string** hasil reversing. Perhatikan contoh berikut:

```js
function reverseJobCharacters(arr) {
  // Your code here
}

console.log(reverseJobCharacters([ 'idaz', 'sfmutvi', 'anggara', 'sfutqji', 'dear', 'sfldbi' ]));
// [ 'idaz', 'ivtumfs', 'anggara', 'ijqtufs', 'dear', 'ibdlfs' ]
console.log(reverseJobCharacters([ 'kurnia', 'sfutqji', 'adi', 'sfldbi', 'anggara', 'sfmutvi' ]));
// [ 'kurnia', 'ijqtufs', 'adi', 'ibdlfs', 'anggara', 'ivtumfs' ]
```

#### DecryptJobCharacters

Diberikan sebuah function `decryptJobCharacters` yang menerima satu parameter bertipe data **array**. Dimana function ini akan mendekripsikan/decode value job characters bertipe data **string** di dalam data array, dan cara kerjanya dari function ini ada menggeser setiap huruf menjadi huruf sebelumnya (ex:`I` menjadi `H`). Output dari function ini bertipe data **array** dan value job characters bertipe data **string** hasil decryption. Perhatikan contoh berikut:

```js
function decryptJobCharacters(arr) {
  // (ex: I -> H, A -> Z, D -> C, O -> N, S -> R, T -> S, Z -> Y)
  // Your code here
}

console.log(decryptJobCharacters([ 'idaz', 'ivtumfs', 'anggara', 'ijqtufs', 'dear', 'ibdlfs' ]));
// [ 'idaz', 'hustler', 'anggara', 'hipster', 'dear', 'hacker' ]
console.log(decryptJobCharacters([ 'kurnia', 'ijqtufs', 'adi', 'ibdlfs', 'anggara', 'ivtumfs' ]));
// [ 'kurnia', 'hipster', 'adi', 'hacker', 'anggara', 'hustler' ]
```

#### MakingTheDreamTeam

Diberikan sebuah function `makingDreamTeam` yang menerima satu parameter bertipe data **array**. Dimana function ini akan mengelompokan data sebuah tim start-up dengan format array 2 dimensi yang tiap elementnya berisi nama dan job characters. Output dari function ini bertipe data **array 2 dimensi**. Perhatikan contoh berikut:

```js
function makingDreamTeam(arr) {
  // Your code here
}

console.log(makingDreamTeam([ 'idaz', 'hustler', 'anggara', 'hipster', 'dear', 'hacker' ]));
// [
//   [ 'idaz', 'hustler' ],
//   [ 'anggara', 'hipster' ],
//   [ 'dear', 'hacker' ]
// ]
console.log(makingDreamTeam([ 'kurnia', 'hipster', 'adi', 'hacker', 'anggara', 'hustler' ]));
// [
//   [ 'kurnia', 'hipster' ],
//   [ 'adi', 'hacker' ],
//   [ 'anggara', 'hustler' ]
// ]
```
