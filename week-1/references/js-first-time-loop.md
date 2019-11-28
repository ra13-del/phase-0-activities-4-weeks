### For-loop

For-loop adalah bentuk lain dari iterasi, dimana statement `for` menjadi kontrol atas loop yang dilakukan.
Hal ini yang menjadi pembeda antara for-loop dengan while-loop.

Berikut adalah cara atau struktur penulisan for-loop:

```javascript

for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}
```

Pada for-loop, statement `for` akan menampung tiga parameter, yaitu sebut saja inisialisasi, kondisi, dan
incremental/decremental. Ketiga parameter ini akan menjadi kontrol kapan loop ini harus berhenti.
Pada parameter pertama, yaitu inisialisasi, sebuah variable diberikan nilai awal atau default.
Pada parameter kedua, yaitu kondisi, for-loop akan terus berjalan selama kondisi ini masih terpenuhi, dengan
kata lain, mengandung nilai `true`.
Pada parameter kedua, yaitu incremental/decremental, variabel yang menjadi kontrol terhadap loop ini akan diubah nilainya.

:thumbsup: *Best Practice:*
Walaupun memang for-loop dapat mengubah kondisi di dalam proses,
namun best practice dari penggunaan for-loop adalah seluruh kendali atau kontrol dari looping ditentukan
oleh variable yang diinisialisasi, di increment/decrement, dan juga kondisi for-loop pun menggunakan variable
tersebut.

Untuk memudahkan kamu mendapatkan gambaran jelas tentang penggunaan for-loop, mari kita gunakan kedua
contoh while-loop dan kita tulis ulang dalam bentuk for-loop.

**Contoh Looping For-loop 1** Looping Angka 1-9 Sederhana

```javascript
for(var angka = 1; angka < 10; angka++) {
  console.log('Iterasi ke-' + angka);
}
```
Kamu bisa mencoba kode di atas [disini](https://jsbin.com/dijukel/edit?js,console)

**Contoh Looping For-loop 2** Looping Mengembalikan Angka Total

```javascript
var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}

console.log('Jumlah terakhir: ' + jumlah);
```
Kamu bisa mencoba kode di atas [disini](https://jsbin.com/xukega/edit?js,console)

**Contoh Looping For-loop 3** Looping Dengan Increment dan Decrement Lebih dari 1

```javascript

for(var deret = 0; deret < 10; deret += 2) {
  console.log('Iterasi dengan Increment counter 2: ' + deret);
}

console.log('-------------------------------');

for(var deret = 15; deret > 0; deret -= 3) {
  console.log('Iterasi dengan Decrement counter : ' + deret);
}
```
Kamu bisa mencoba kode di atas [disini](https://jsbin.com/fovoyun/edit?js,console)


:warning: Waspadai Forever Looping!

Dengan sengaja atau sengaja, kode kamu mungkin dapat menghasilkan forever looping,
atau looping yang tidak akan pernah berhenti. Bila ini terjadi, segera periksa
statement kondisi kamu.

```javascript
var flag = 1;
while(flag < 10) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
  console.log('Iterasi ke-' + flag);
}
```
