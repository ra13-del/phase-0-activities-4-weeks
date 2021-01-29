---
path: '/week-3/challenges/anchor-flight-ticket-finder'
title: 'Flight Ticket Finder'
---

### Flight Ticket Finder


Buatlah system untuk mencarikan ticket terhadap user yang ingin pergi ke bali!

`selectedTicket` adalah function yang menerima 1 parameter berupa object yang memiliki keys yaitu: name, day, time dan passenger yang akan mengeluarkan output berupa object sebagai berikut:

    {
        name: <String>,
        codeTicket: <String>,
        totalPrice: <Number>,
        airline: <String>
    }

Function `selectedTicket` WAJIB menggunakan modular function untuk membuat system tersebut.
Berikut ini modular function nya.

1.  findAirline: adalah function untuk mencari airline yang siap terbang berdasarkan hari nya.

    - function `findAirline` menerima 1 buah parameter berupa string.
    - di dalam function sudah disediakan data airline berupa array of object dengan keys: name, flight, destination, code.
    - output berupa object dengan keys: name, flight, destination, code.
    - contoh: - input: "sabtu" - output: {
      name: "batik air",
      flight: ["sabtu", "minggu"],
      destination: "bali",
      code: "ba1",
      },

2.  getTicket: adalah function untuk mencari tiket berdasarkan codeTicket (codeTicket di dapatkan dari hasil findAirline) dan waktu kapan user ingin terbang.

    - function ini menerima 2 parameter codeTicket berupa string dan time berupa string.
    - di dalam function sudah di sediakan data tickets berupa array of object dengan keys: codeTicket, time, price.
    - Jika parameter time ditemukan di dalam list time pada data tickets, maka ouput berupa object ticket dengan keys: codeTiket, time, price.
    - Jika parameter time tidak ditemukan, maka output berupa: undefined

    - contoh :

          1. - input: "g1", "08.00"
             - output: {
                           codeTicket: "g1",
                           time: ["08.00", "10.00", "12.00", "14.00"],
                           price: 160000,
                         },
              - Penjelasan: Output berupa object dikarenakan parameter time ditemukan dalam list time pada data tickets.

          2. - input: "g1", "08.10"
             - output: undefined
             - Penjelasan: Output berupa undefined dikarenakan parameter time tidak ditemukan dalam list time pada data tickets.

3.  getDiscount: adalah function untuk untuk mendapatkan diskon harga tiket

    - function ini menerima 2 parameter passenger berupa number dan price berupa number
    - ketentuan diskon:
      1. jika passenger 10 ke atas, maka dapat diskon 50%
      2. jika passenger 5 ke atas, maka dapat diskon 20%
      3. jika passenger di bawah 5, harga tidak dapat diskon
    - output berupa number dari hasil price \* (1 - (diskon / 100))

4.  selectedTicket: adalah main function yang akan memanggil function yang lain dan memanfaatkan hasil dari pemanggilan function.
    - Jika hasil dari function getTicket berupa object, maka output berupa object dengan keys: name, codeTicket, totalPrice, airline
    - Jika hasil dari function getTicket berupa undefined, maka output berupa string: Dear <user name> tiket <airline name> tidak tersedia pada hari <user day> pukul <user time>

NOTE:

- DILARANG menggunkan BUILT-IN function APAPUN, kecuali .push
- DILARANG merubah nama function.
