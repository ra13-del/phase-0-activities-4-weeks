# Halo JavaScript!

## Pengenalan

Mari kita sambut salah satu bahasa pemrograman universal di dunia: JavaScript! Untuk kamu yang belum tahu JavaScript (kadang disebut JS saja); ia adalah bahasa native untuk web yang ringan, interpreted, dan salah satu bahasa pemrograman paling populer yang digunakan oleh developer di seluruh dunia, untuk browser dan web. Bahkan beberapa aplikasi non-browser juga menggunakannya seperti Node.js, MongoDB, dan Apache CouchDB. Lebih lagi, JS adalah bahasa yang dinamis, berbasis prototype, multi-paradigm (mendukung gaya pemrograman berbasis objek, imperatif, dan deklaratif/fungsional). Mungkin kamu sudah tahu, bahwa JavaScript tidak sama dengan Java; namanya mirip tapi aslinya dibuat oleh pihak yang berbeda sehingga juga aturannya, ekosistem, sintaks, semantiknya berbeda. JavaScript pada dasarnya memberi interaksi (seperti, klik, input, animasi) pada halaman HTML (yang biasanya juga menggunakan CSS). Zaman sekarang JavaScript sudah dapat berdiri sendiri, yang dahulunya harus mengandalkan HTML dan CSS agar dapat bekerja dengan semestinya.

## Stuktur Bahasa Program

Pada dasarnya, setiap bahasa pemrograman modern memiliki hal-hal yang tertulis berikut. Hal-hal ini memungkinkan programmer untuk menulis code (computer code) untuk membuat/membangun program yang dapat menyelesaikan masalah seperti menghitung angka, memproses data, membuat aplikasi web, dan banyak lainnya.

- sintaks (syntax) dan pernyataan (statement): terkait bagaimana cara menulis code-nya
- tipe data (data types) dan/atau struktur data (data structure)
- variabel dan operator
- kondisional (conditional) atau percabangan (branching)
- kumpulan/koleksi data (collections) serta perulangan/iterasi (loop/iteration)
- fungsi/metode (function/method)

## Menjalankan Script JavaScript

Spesial untuk JavaScript, kita bisa menggunakan editor code biasa (code editor) untuk mengetikkan JavaScript bersamaan dengan HTML dan CSS; atau kita bisa langsung mengetikkan code ke dalam dev tools (terdapat di Chromium/Chrome dan Firefox) dengan membuka tab `console` (`Ctrl+Shift+J` atau `Cmd+Opt+J` di Chrome, `Ctrl+Shift+K` atau `Cmd+Opt+K` di Firefox). Artinya JavaScript bisa langsung digunakan dan ditulis di dalam browser ataupun editor code.

Kamu juga bisa gunakan extension browser untuk editor JavaScript yang lebih dari sekadar console di dev tools seperti [Chrome Scratch JS](https://chrome.google.com/webstore/detail/scratch-js/alploljligeomonipppgaahpkenfnfkn), [Repl.it](https://repl.it/languages/javascript), ataupun [CodePen](https://codepen.io). Apapun tools yang dipakai, yang terpenting adalah kita dapat mengakses editor atau console yang akan menjalankan sintaks JavaScript.

Untuk saat ini, mari kita gunakan [Repl.it](https://repl.it/languages/javascript).

### Sintaks (Syntax) dan Pernyataan (Statement)

Sintaks itu seperti kosa kata (vocabulary) dan tata cara (grammar) pada bahasa pemrograman. Merupakan kata-kata dan perintah (command) pada bahasa yang juga merupakan instruksi untuk disusun menjadi sebuah program yang dibuat atau dikembangkan. Kita gunakan sintaks tertentu untuk membuat statement program, instruksi untuk dijalankan/dieksekusi oleh web browser, compiler, ataupun interpreter. Dalam JavaScript, ada berbagai sintaks yang polanya seperti `alert();`, `console.log();`, `document.write();`, dan masih banyak lagi. Kesimpulannya, sintaks dan statement adalah ekspresi (expression) apapun yang biasanya diikuti dengan titik koma (semicolon `;`) ataupun hal-hal yang bisa dieksekusi oleh penjalan code (executor).

#### Menjalankan JavaScript dengan script JavaScript dan menampilkannya pada console

```javascript
> "Hello!";
> document.write("Hello you too!");
> console.log("Hello, computer!");
> alert("Hello, human!");
> prompt("What is your name?");
> console.log("Multiline\n text!");
```

Bukalah [Repl.it](https://repl.it/languages/javascript), dan cobalah kode di atas pada tab **console**

##Data Type

Data Type, atau dalam bahasa Indonesia kita sebut sebagai Tipe Data, adalah sekumpulan data dengan nilai yang memiliki karakteristik berbeda. Beberapa contoh dari tipe data adalah:

- Number: tipe data dengan nilai berupa angka
- String: tipe data dengan nilai berupa kumpulan atau set dari beberapa karakter
- Boolean: tipe data dengan nilai berupa `true` atau `false`.

## Variable

Variable, atau dalam bahasa Indonesia kita sebut variabel, bisa memegang atau berisi hampir semua tipe data yang tersedia. Variabel memungkinkan kita untuk memuat atau menyimpan nilai data ke dalam sesuatu. Biasanya bersifat sementara saat program dijalankan.

```javascript
var tampung = 5;
console.log(tampung); // 5
```

```javascript
var angkaGanjil = 1;
var angkaGenap = 2;
console.log(angkaGanjil); // 1
console.log(angkaGenap); // 2
```

:warning: Waspadai pemanggilan variable yang tidak bernilai!
```javascript
var tampungBaru;
console.log(tampungBaru); // undefined
```

## Operator

Operator adalah karakter yang merepresentasikan sebuah tindakan. Kita sering menemukan operator seperti + (tambah),
 x (kali), dan lain-lain. Namun, di dunia programming, operasi kali kita gantikan dengan simbol * (asterisk) dan operasi bagi dengan simbol / (slash)

Operator dibagi menjadi beberapa tipe:

**Arithmetic Operator**
Arithmetic operator adalah operator yang melibatkan operasi matematika, seperti penambahan, pengurangan, perkalian, dan lain-lain.

- Tambah (+)
- Kurang (-)
- Kali (\*)
- Bagi (/)
- Modulus (%)

Bagi kamu yang baru kali ini mendengar tentang modulus, modulus adalah sisa bagi. Misalkan kita membagi 7 dengan 2. Hasil bagi nya adalah 3, namun sisa dari hasil baginya adalah 1. Bilangan yang memang habis dibagi, sisa hasil baginya adalah 0.

Contoh sederhana penggunaan modulus:

```javascript
> 4 % 2 // 4 modulus 2
> 0 // bilangan 4 habis dibagi 2, sehingga 4 modulus 2 menghasilkan nilai 0
> 5 % 2 // 5 modulus 2
> 1 // bilangan 5 habis tidak habis dibagi 2, sehingga 5 modulus 2 menghasilkan nilai 1, sisa dari hasil pembagian
```

**Assignment Operator**
Assignment operator adalah operator yang meng-"assign", atau memberikan nilai. Biasanya, assignment operator digunakan untuk memberikan nilai kepada sebuah variable.

```javascript
var bilangan;
bilangan = 5; // Contoh assignment value 5 ke sebuah variable
```

**Comparison Operator**
Comparison operator adalah operator yang membandingkan satu nilai dengan nilai lainnya. Hasil operasi yang melibatkan comparison operator adalah antara 'true' atau 'false'.

- Equal operator (==)

```javascript
var angka = 8;
console.log(angka == 8); // true
console.log(angka == 1); // false
```

- Not Equal operator (!=)

```javascript
var angka = 8;
console.log(angka != 7); // true
console.log(angka != 8); // false
```

- Strict Equal operator (===)

Sedikit berbeda dengan equal operator, strict operator `===` mewajibkan nilai yang dibandingkan sama dan tipe data nya pun harus sama. Sedangkan pada `==`, `8` dan `"8"` akan dianggap sama, karena itu menghasilkan nilai `true`.

```javascript
var angkaBeda = "8";
console.log(angkaBeda == 8); // true
console.log(angkaBeda === 8); // false
console.log(angkaBeda === "8"); // true
```

- Strict Not Equal operator (!==)

Sedikit berbeda dengan not equal operator, strict not equal operator `!==` mewajibkan nilai yang dibandingkan tidak sama dan tipe data nya pun harus sama. Sedangkan pada `!=`, `8` dan `"8"` akan dianggap sama, karena itu menghasilkan nilai `false`.

```javascript
var angkaBeda = "8";
console.log(angkaBeda != 7); // true
console.log(angkaBeda !== 7); // true
console.log(angkaBeda !== 8); // true
console.log(angkaBeda !== "8"); // false
```

- Less Than (<) / Greater Than (>)

operator selanjutnya adalah `<`, yaitu kurang dari sekian, dan `>`, yaitu lebih dari sekian.

```javascript
var angka = 8;
console.log(angka > 7); // true
console.log(angka < 6); // false
console.log(angka <= 8); // true
```

**Conditional Operator**
Conditional operator adalah operator yang akan mengevaluasi kebenaran dari nilai yang dikomputasi.

- OR (||): akan menghasilkan nilai `true` jika salah satu premis mengandung `true`

```javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false
```

- AND (&&): akan menghasilkan nilai `true` jika kedua premis `true`.

```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true
```

## Conditional (IF - ELSE)

Kondisional adalah sebuah metode dimana kode akan mengecek apakah sebuah premis benar atau tidak.
Jika kondisi sesuai, maka kode dalam kondisional akan dijalankan.

**Contoh Conditional 1** Menjalankan proses apabila statement kondisi `true`.

```javascript
if(true) {
  console.log("Jalankan kode"); // baris kode ini akan di panggil
}
```

**Contoh Conditional 2** Tidak menjalankan proses di dalam block/scope conditional apabila statement kondisi `false`.

```javascript
if(false) {
  console.log("Jalankan kode"); // baris kode ini tidak di panggil
}
```

**Contoh Conditional 3** Conditional dengan statement yang akan menghasilkan nilai `true` atau `false`

```javascript
var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
```

Di dalam conditional, kita juga mengenal dengan yang dinamakan dengan branching. Branching, atau dalam bahasa indonesia berarti pencabangan, kita menjalankan potongan kode kita sesuai dengan "cabang" atau "jalur" yang memenuhi kondisi tersebut.

Contoh sangat sederhana-nya adalah sebuah kasus berikut ini:

Seorang anak diminta oleh ibunya untuk membeli telur di supermarket dan langsung pulang ke rumah. Jika di supermarket tersebut kehabisan telur, maka anak itu harus menelepon ibunya dan mengabari kalau supermarket kehabisan telur. Anak tersebut akan datang ke supermarket dan menemukan kondisi yang bercabang:

- Jika di supermarket terdapat telur, anak itu akan membeli telur itu dan pulang, atau
- Jika di supermarket tidak terdapat telur, anak itu akan menelepon ibunya.

pada JavaScript dan berbagai bahasa pemrograman, "jika tidak terdapat telur", atau bisa dibilang kondisi yang terjadi diluar "ekspektasi", terdapat `else` yang akan menjalankan proses lain jika `if` bernilai `false`. Contoh lebih jelas bisa dilihat dari contoh dibawah ini:

**Contoh Conditional 4** Branching Sederhana (If-else)

```javascript
var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  console.log("angka yang ditampung bukan 5!");
}
```

Tidak hanya sampai situ, kondisional bisa juga bersifat bertumpuk, atau biasanya disebut juga sebagai nested-if.

**Contoh Conditional 5** Branching Bertumpuk Sederhana (If-else)

```javascript
var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else {
  if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
  }
  else {
    console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
  }
}
```

Contoh di atas juga bisa dibuat dalam bentuk lain, yaitu `else if`. `else-if` adalah sebuah kondisional, dimana statement `else if` akan dijalankan apabila `if` tidak memenuhi kondisi / `false`, dan dijalankan sebelum statement `else`.

**Contoh Conditional 5** Branching Bertumpuk Sederhana (If-else)

```javascript
var tampung = 5;
if(tampung == 5) {
  console.log("angka yang ditampung adalah 5!");
}
else if(tampung < 5) {
    console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
}
else {
  console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
}
```
