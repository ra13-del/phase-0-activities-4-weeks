---
path: '/week-1/algorithm-pseudocode'
title: 'Learn Algorithm and Pseudocode'
---

# Learn Algorithm and Pseudocode

## Objectives

- ▢ Memahami struktur alur program dengan algoritma dan pseudocode

## Learnings

#### Looping

Nah sekarang kita akan masuk ke algoritma yang sedikit lebih sulit dibandingkan bagian sebelumnya, yaitu perulangan.

Komputer seringkali dibutuhkan untuk melakukan sebuah proses yang sama berulang-ulang. Hal ini sering disebut sebagai **looping**. Tentunya, saat komputer melakukan looping, pasti ada kalanya proses tersebut akan berhenti. Sama hal nya saat kita sebagai manusia melakukan berbagai hal yang berulang, pasti ada kalanya kegiatan itu kita hentikan. Nah, looping sebetulnya melibatkan yang sudah kita pelajari sebelumnya, yaitu conditional. Looping akan terus dilakukan sampai sebuah kondisi terpenuhi. Contoh mudahnya adalah, kita akan makan hingga kenyang bukan?

Contoh Pseucodode

```
WHILE "hungry"
  DO "eat"
```

Nah, pseudocode di atas cukup simple dan mencontohkan kita proses paling sederhana dalam looping. WHILE adalah standard keyword untuk menunjukkan kondisi "selama kita masih lapar", lakukan proses makan.

Biasanya, saat kita membuat looping, ada sebuah proses yang dilakukan untuk mencapai kondisi tersebut. Kita coba perbaiki contoh pseudocode diatas, dengan asumsi kemampuan makan kita dalam sekali makan adalah 5 sendok nasi. Kita coba umpamakan kemampuan makan ini sebagai "hungry level".

```
STORE "full level" with 0

WHILE "full level" < 5
  ADD "full level" by 1

DISPLAY "I'm full!"
```

Nah, looping kali ini sudah lebih mendekati coding sebenarnya. Saat terjadi looping, harus ada proses apapun yang akan membuat kondisi perulangan lambat laun akan terpenuhi. Pseudocode di atas menggambarkan kita mulai dari level kenyang kita dari 0, berarti kita saat ini sangat lapar. Setiap kali kita melakukan proses makan, tingkat kenyang kita akan bertambah 1. Karena kita hanya kuat makan hingga 5 kali, maka kondisinya adalah "full level" < 5.

Kita coba ilustrasikan step pseudocode diatas:

1. Simpan nilai "full level" dengan angka 0
2. Ulangi step 3 selama "full level" masih dibawah 5. Jika "full level" sudah 5, lanjut ke step 4.
3. Tambah "full level" dengan 1, agar semakin mendekati batas perulangan. Kembali ke step 2.
4. Tampilkan "I'm full", berarti saya sudah sangat kenyang!

Ternyata, setelah dijabarkan, looping tidak begitu sulit, bukan? Nah, sebuah komputer tentu saja dapat memiliki program yang sangat memungkinkan menggabungkan penyimpanan nilai, kondisi, dan perulangan dengan sekaligus. Disini, kita sebagai calon programmer diwajibkan untuk mampu menggabungkan berbagai konsep ke dalam satu kesatuan.

Kita akan coba membuat pseudocode yang menggunakan looping dan conditional sekaligus, berangkat dari kasus berikut:

Seorang anak SD sedang belajar angka genap dan ganjil. Dia ditugaskan oleh ibu guru untuk menghitung angka dari 1 sampai 10 dengan menyebut angka tersebut dan untuk setiap angka ganjil, ia harus menyebut "ODD!" dan sebaliknya jika genap, ia harus menyebut "EVEN!".

Tunggu! Angka disebut genap jika habis dibagi dua. Tapi bagaimana saya menyebutnya di pseudocode? Mudah, caranya adalah menggunakan yang namanya mod, atau kepanjangannya modulo. Modulo, adalah sebuah proses matematika untuk mendapatkan remainder atau sisa bagi dari sebuah proses pembagian. Misal, angka 3 jika dibagi 2 sisanya adalah 1. Nah berarti kita bisa menyebutkan proses ini sebagai 3 mod 2.

Contoh Pseudocode
```
STORE "count" to 1

WHILE "count" < 11
  DISPLAY "count"
  CALCULATE "count" mod 2
  STORE "remainder" to the result of calculation
  IF "remainder" equals to 0
    DISPLAY "EVEN!"
  ELSE
    DISPLAY "ODD!"
```

### References

- [What is a computer algorithm? on HowStuffWorks](http://computer.howstuffworks.com/question717.htm)
- [Algorithm, on Wikipedia](https://en.wikipedia.org/wiki/Algorithm)
- [Algorithms Course on Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms)
- [Sorting Algorithm Animations](http://www.sorting-algorithms.com)
- [VisuAlgo: Visualising data structures and algorithms through animation](http://visualgo.net)
- [Notes on Algorithms, Pseudocode, and Flowcharts - Dr. Burford J. Furman](http://www.sjsu.edu/people/burford.furman/docs/me30/Notes_on_Algorithms.pdf)
- [Pseudocode Standard - Dr. John Dalbey](http://users.csc.calpoly.edu/~jdalbey/SWE/pdl_std.html)
