---
path: '/week-3/challenges/anchor-rpg-battle'
title: 'RPG Battle'
---

# RPG BATTLE

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__` dan `testHelpers`, folder-folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun.

### HINTS

- Nama function haruslah `gameOn`, `battle`, dan `lvUp`. dan **tidak boleh diganti** dengan nama function lainnya. Untuk detail fungsi akan mengacu kepada Direction yang disebutkan di bawah

---

## Objective

- Mampu memecahkan masalah yang diberikan
- Bisa menggabungkan konsep *looping* / *iteration* dan *kondisional*
- Mengerti *keterkaitan* satu function dengan function lainnya
- Mengerti melempar/memasukkan data hasil satu function kemudian digunakan untuk parameter function lain
- Mengerti _pass by reference_ pada data struktural

## Directions

### RPG Battle

_HeckticGame_ sedang membuat sebuah game bertema RPG.
Kamu sebagai developer diminta untuk membuat program sederhana untuk menyimulasikan game RPG tersebut.

Kamu diberikan 3 function dan 4 variable global, yaitu:
- Function lvUp
- Function battle
- Function gameOn
- variable dungeon
- variable player
- variable mob
- variable boss

Guna daripada tiap function adalah sebagai berikut:
- **Function gameOn:**
    - function utama yang dipanggil untuk memulai permainan
    - memiliki 2 parameter yaitu map (dungeon permainan) dan challenger (pemain yang akan bermain)
    - mengembalikan data berupa string yang menginformasikan menang atau kalahnya pemain
     
    ```jsx
    function gameOn(map, challenger) {
      // your code below

    }

    let dungeon1 = [
      ["*" , "" , "+" , "-" , "*"],
      ["*", "*", "", "*", "+", "+", "*"],
      ["B", "*"]
    ]

    let player1 = [
      "Lance",
      40,
      8, 
      5, 
      0, 
      1
    ]
    console.log(gameOn(dungeon1, player1)) // Game Over!

    let dungeon2 = [
      ["*", "*", "", "-", "+", "+", "*"],
      ["*" , "*" , "+" , "" , "*"],
      ["", "*", "B"]
    ]

    let player2 = [
      "Astra",
      100,
      10, 
      8, 
      0, 
      5
    ]
    console.log(gameOn(dungeon2, player2)) // Your hero named Astra has won the game with level 10!
    ```

- **Function battle:**
    - function yang dipanggil saat pemain bertemu dengan musuh di dungeon dan melakukan pertempuran
    - memiliki 2 parameter yaitu enemy (data musuh), hero (data pemain)
    - mengembalikan object data pemain yang telah terbaharui
    ```jsx
    function battle(enemy, hero) {
      // your code below

    }

    console.log(battle({health: 11, dpa: 3}, { name: 'Contoh', hp: 40, atk: 8, def: 5, exp: 0, lv: 1 }))
    // { name: 'Contoh', hp: 34, atk: 8, def: 5, exp: 10, lv: 1 }
    ```
- **Function lvUp:**
    - function yang dipanggil setelah pertempuran usai untuk meningkatkan exp dari pemain dan leveling up
    - memiliki 2 parameter yaitu hero (data pemain) dan details (array yang berisi index 0  adalah level dungeon, index 1 adalah lokasi musuh atau chest, index 2 adalah multiplier)
    - mengembalikan object data pemain yang telah terbaharui
    ```jsx
    function lvUp(hero, details) {
      // your code below

    }

    console.log(lvUp({ name: 'Contoh', hp: 40, atk: 8, def: 5, exp: 0, lv: 1 }, [ 0, 0, 5 ]))
    //  { name: 'Contoh', hp: 40, atk: 8, def: 5, exp: 10, lv: 1 }
    ```

Deskripsi daripada tiap variable global adalah sebagai berikut:
- Variable dungeon menyimpan multi-dimensional array yang berfungsi sebagai peta dari permainan.
- Variable player menyimpan array berisikan data pemain (index 0 adalah nama, index 1 adalah health, index 2 adalah attack, index 3 adalah defense, index 4 adalah experience, index 5 adalah level)
- Variable mob menyimpan array berisikan data musuh (index 0 adalah health, index 1 adalah attack)
- Variable boss menyimpan array berisikan data boss (index 0 adalah health, index 1 adalah attack)

Alur Program:

1. Pada program ini, kalian diminta untuk menyimulasikan game RPG.
2. Tiap variable (mob, boss dan player) perlu diubah menjadi object
3. Dungeon adalah peta yang akan dilalui oleh pemain.
4. Tiap baris menunjukkan level dungeon dan tiap kolom menunjukkan lokasi.
5. Jika pemain bertemu musuh, maka akan terjadi pertempuran.
6. Jika pemain menang dalam pertempuran, maka experience akan bertambah.
7. Jika experiencenya mencapai atau melebihi 100 maka pemain akan naik level.
8. Kemudian selisih experience akan menjadi sisa dari experience pemain.
9. Jika pemain kalah dalam pertempuran, permainan akan berhenti dan tampilkan "Game Over!"
10. Jika pemain bertemu dengan chest, maka experience pemain akan bertambah.
11. Jika pemain bertemu dengan trap, maka health pemain akan berkurang sebanyak 10 poin.
12. Jika pemain berhasil melewati semua dungeon, maka tampilkan "Your hero _(nama pemain)_ has won the game with level _(level terakhir pemain)_.""


### IMPORTANT:
- Dalam pertempuran, pemain dan musuh akan terus menyerang sampai salah satunya kehabisan health.
- Rumus untuk damage yang diterima oleh pemain adalah sebagai berikut: Math.round(_attack musuh_*(100/(100+_defense pemain_)))
- Damage yang diterima oleh musuh adalah attack dari pemain (jika attack pemain adalah 3, berarti nyawa musuh berkurang 3 untuk tiap serangan).
- Rumus kenaikan experience: ((level dungeon + 1) + (lokasi musuh atau chest + 1))multiplier
     - Mob memiliki multiplier 5
     - Boss memiliki multiplier 25
     - Chest memiliki multiplier 15
- Ingat mengenai sifat data struktural (copy by reference)
- Legenda:
     - "*" adalah mob
     - "B" adalah boss
     - "+" adalah chest
     - "-" adalah trap
