---
path: '/week-4/challenges/anchor-flight-ticket-finder'
title: 'Flight Ticket Finder'
---

### Flight Ticket Finder

### Objectives

-   Mampu memecahkan masalah yang diberikan
-   Mampu mengakses data pada array dan data pada array of object
-   Mampu membuat object serta object multi dimensi
-   Mengerti cara melemparkan data yang dikembalikan dari satu function kemudian digunakan sebagai parameter function lain.


### Note

- DILARANG menggunkan BUILT-IN function APAPUN, kecuali .push
- DILARANG merubah nama function.


### Directions
Buatlah system untuk menghitung reward untuk travel agent yang memiliki performa baik

`travelAgentReward` adalah function yang menerima 2 parameter berupa array multi dimensi dan array satu dimensi yang akan mengeluarkan output berupa array of object sebagai berikut:

```js
[
    {
        travelAgent: <String>,  
        flight: <Array>,
        totalPrice: <Number>,
        totalPassengers: <Number>,
        reward: <Number>
    }
]
```

Function `travelAgentReward` WAJIB menggunakan modular function untuk membuat system tersebut.
Berikut ini modular function nya.

1.  `generateTravel`: adalah function untuk mengubah format array multi dimensi menjadi format array of object dari data.

    - Function `generateTravel` menerima 1 buah parameter
    - Parameter `passengersData` berupa array multi dimensi yang berisi data-data pemesanan travel agent
    - Output berupa array of object.

    ```js
    contoh:
    function generateTravel(passengersData) {
        // your code here
    }

    const passengers = [
        ["andi travel", 7, "senin"],
        ["budi travel", 4, "selasa"],
        ["cindi travel", 1, "rabu"],
        ["andi travel", 10, "kamis"],
    ]

    console.log(generateTravel(passengers));
    /*
        [
            {
                travelAgent: 'andi travel', 
                passenger: 7,
                day: 'senin'
            },
            {
                travelAgent: 'budi travel', 
                passenger: 4,
                day: 'selasa'
            },
            {
                travelAgent: 'cindi travel',
                passenger: 1,
                day: 'rabu'
            },
            {
                travelAgent: 'andi travel', 
                passenger: 10,
                day: 'kamis'
            }
        ]
    */
    ```

2.  `getTicket`: adalah function untuk menghitung besaran total harga ticket yang dipesan oleh travel agent tersebut berdasarkan banyaknya passenger.

    - Function `getTicket` menerima 2 parameter berupa array of object
    - Parameter `passengersGenerated` berupa array of object yang berisi data-data pemesanan travel agent
    - Parameter `ticketsData` berupa array of object dengan keys: `flight` dan `price`, yang berisi data-data harga ticket penerbangan berdasarkan hari
    - Jika key `day` pada `passengersGenerated` sama dengan key `flight` pada data `ticketsData`, maka tambahkan key `totalPrice` pada object
    - Output berupa array of object

    ```js
    totalPrice = passenger * price
    passenger didapatkan dari key passenger
    price didapatkan dari key price berdasarkan key flight
    flight adalah hari keberangkatan berdasarkan key day

    contoh:
    function getTicket(passengersGenerated, ticketsData) {
        // your code here
    }
    
    const passengers = [
        {
            travelAgent: 'andi travel', 
            passenger: 7,
            day: 'senin'
        },
        {
            travelAgent: 'budi travel', 
            passenger: 4,
            day: 'selasa'
        },
        {
            travelAgent: 'cindi travel',
            passenger: 1,
            day: 'rabu'
        },
        {
            travelAgent: 'andi travel', 
            passenger: 10,
            day: 'kamis'
        }
    ];

    const tickets = [
        {
            flight: 'senin',
            price: 120000,
        },
        {
            flight: 'selasa',
            price: 180000,
        },
        {
            flight: 'rabu',
            price: 140000,
        },
        {
            flight: 'kamis',
            price: 200000,
        },
        {
            flight: 'jumat',
            price: 160000,
        },
        {
            flight: 'sabtu',
            price: 220000,
        },
    ];

    console.log(getTicket(passengers, tickets));
    /*
        [
            {
                travelAgent: 'andi travel', 
                passenger: 7,
                day: 'senin',
                totalPrice: 840000
            },
            {
                travelAgent: 'budi travel', 
                passenger: 4,
                day: 'selasa',
                totalPrice: 720000
            },
            {
                travelAgent: 'cindi travel',
                passenger: 1,
                day: 'rabu',
                totalPrice: 140000
            },
            {
                travelAgent: 'andi travel', 
                passenger: 10,
                day: 'kamis',
                totalPrice: 1200000
            }
        ]
    */
    ```

3.  `getReward`: adalah function untuk untuk menghitung reward yang akan didapatkan oleh travel agent rekanan.

    - Function `getReward` menerima 2 parameter berupa array yang berisi nama-nama travel agent rekanan dan array of object
    - Parameter `travelsData` berupa array of object yang berisi nama-nama travel agent rekanan
    - Parameter `ticketsBook` berupa array of object yang berisi data-data pemesanan travel agent
    - Ketentuan reward jika totalPrice `2 juta` ke atas dan jika totalPassenger `15` ke atas, maka mendapatkan reward sebesar `20%` dari totalPrice
    - Output berupa array of object
    ```js
    contoh:
    function getReward(travelsData, ticketsBook) {
        // your code here
    }

    const travels = [ "andi travel", "cindi travel" ]
    const tickets = [
      {
        travelAgent: 'andi travel', 
        passenger: 7,
        day: 'senin',
        totalPrice: 840000
      },
      {
        travelAgent: 'budi travel', 
        passenger: 4,
        day: 'selasa',
        totalPrice: 720000
      },
      {
        travelAgent: 'cindi travel',
        passenger: 1,
        day: 'rabu',
        totalPrice: 140000
      },
      {
        travelAgent: 'andi travel', 
        passenger: 10,
        day: 'kamis',
        totalPrice: 1200000
      }
    ]

    console.log(getReward(travels, tickets));
    /*
        [
            {
                travelAgent: 'andi travel',  
                flight: ['senin', 'kamis'],
                totalPrice: 2040000,
                totalPassengers: 17,
                reward: 408000
            },
            {
                travelAgent: 'cindi travel',
                flight: ['rabu']
                totalPrice: 140000
                totalPassenger: 1,
                reward: 0
            }
        ]
    */
    ```

4.  `travelAgentReward`: adalah main function yang akan memanggil function yang lain dan memanfaatkan hasil dari pemanggilan function.
    - Function `travelAgentReward` menerima 3 parameter
    - Parameter `passengers` berupa array multi dimensi yang isinya adalah data-data pemesanan travel agent
    - Parameter `tickets` berupa array of object yang isinya adalah harga ticket penerbangan berdasarkan hari
    - Parameter `travels` berupa array satu dimensi yang berisi nama-nama travel agent rekanan
    - Output berupa string atau array of object
    - Bila parameter `passengers` berupa array kosong, maka tampilkan `Data is empty`
    - Bila parameter `passengers` tidak ditemukan (undefined), maka tampilkan `Invalid data`
    
    ```js
    function travelAgentReward(passengers, tickets, travels) {
        // your code here
    }

    const datas = [
        ["andi travel", 7, "senin"],
        ["budi travel", 4, "selasa"],
        ["cindi travel", 1, "rabu"],
        ["andi travel", 10, "kamis"],
    ]

    const tickets = [
        {
            flight: 'senin',
            price: 120000,
        },
        {
            flight: 'selasa',
            price: 180000,
        },
        {
            flight: 'rabu',
            price: 140000,
        },
        {
            flight: 'kamis',
            price: 200000,
        },
        {
            flight: 'jumat',
            price: 160000,
        },
        {
            flight: 'sabtu',
            price: 220000,
        },
    ];

    console.log(travelAgentReward());
    // 'Invalid data'

    console.log(travelAgentReward([]));
    // 'Data is empty'

    console.log(travelAgentReward(datas, tickets, [ "andi travel", "cindi travel" ]))
    /*
        [
            {
                travelAgent: 'andi travel',  
                flight: ['senin', 'kamis'],
                totalPrice: 2040000,
                totalPassengers: 17,
                reward: 408000
            },
            {
                travelAgent: 'cindi travel',
                flight: ['rabu']
                totalPrice: 140000
                totalPassenger: 1,
                reward: 0
            }
        ]
    */
    ```