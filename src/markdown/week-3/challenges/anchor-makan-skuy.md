---
path: '/week-3/challenges/anchor-makan-skuy'
title: 'Makan Skuy'
---

# Makan Skuy

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

Start-up **Makan Skuy** adalah start-up yang bergerak di bidang makanan dan minuman, ingin membuat fitur dimana user dapat melihat bill tagihan untuk pesanan yang dipesan oleh user. Namun, developer **Makan Skuy** berada dalam masalah sehingga tidak bisa melanjutkan project ini untuk sementara, sedangkan deadline yang di tentukan sudah hampir sampai batasnya.

Berikut adalahh list restoran yang bekerja-sama dengan **Makan Skuy**:
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>No</th>
<th>Nama Resto</th>
<th>Menu</th>
<th>Harga</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td><code>MekDun</code></td>
<td>- Burger</td>
<td><strong>35000</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>- Kentang</td>
<td><strong>15000</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>- Ayam</td>
<td><strong>10000</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>- CocaCola</td>
<td><strong>7000</strong></td>
</tr>
<tr>
<td>2</td>
<td><code>Burger Queen</code></td>
<td>- Burger</td>
<td><strong>39000</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>- Kentang</td>
<td><strong>12000</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>- Ayam</td>
<td><strong>9000</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>- CocaCola</td>
<td><strong>7500</strong></td>
</tr>
<tr>
<td>3</td>
<td><code>Lawmore</code></td>
<td>- Burger</td>
<td><strong>60000</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>- Kentang</td>
<td><strong>20000</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>- Ayam</td>
<td><strong>12000</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>- CocaCola</td>
<td><strong>8000</strong></td>
</tr>
</tbody>
</table>

---

**Makan Skuy** juga memiliki voucher diskon dengan syarat minimum pembelian sebagai berikut:
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>No</th>
<th>Nama Voucher</th>
<th>Min. Pembelian</th>
<th>Discount</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td><code>Promo 10% Ngab</code></td>
<td>30000</td>
<td><strong>10</strong></td>
</tr>
<tr>
<td>2</td>
<td><code>Promo 20% Ngab</code></td>
<td>50000</td>
<td><strong>20</strong></td>
</tr>
<tr>
<td>3</td>
<td><code>Promo 30% Ngab</code></td>
<td>70000</td>
<td><strong>30</strong></td>
</tr>
</tbody>
</table>

---

Serta **Makan Skuy** mempunyai tarif tersendiri untuk ongkir berdasarkan lokasi restoran, yaitu:
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>No</th>
<th>Nama Resto</th>
<th>Jarak</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td><code>MekDun</code></td>
<td><strong>5km</strong></td>
</tr>
<tr>
<td>2</td>
<td><code>Burger Queen</code></td>
<td><strong>7km</strong></td>
</tr>
<tr>
<td>3</td>
<td><code>Lawmore</code></td>
<td><strong>6km</strong></td>
</tr>
</tbody>
</table>

yang per **1km** nya di hargai **2000** rupiah.

---

Bantulah Start-Up **Makan Skuy** untuk menyelesaikan project diatas, dengan ketentuan sebagai berikut:

### Release 1 - `filterOrders`

- Function `filterOrders` merupakan fungsi untuk merapihkan data pesanan dari user
- Function `filterOrders` memiliki 1 parameter input yaitu:
  - `orders` berupa _array of array_ yang berisi **pesanan user**.
- Function `filterOrders` memiliki output berupa _object_ yang berisi **pesanan user dengan jumlah pesanan yang dipesan**.
- Contoh:

  ```js
  function filterOrders(orders) {
    // write your code here
  }

  console.log(
    filterOrders([
      ["Lawmore", "Burger", "Burger", "Kentang"],
      ["MekDun", "Ayam", "CocaCola", "CocaCola"],
    ])
  );

  // {
  //    Lawmore: { Burger: 2, Kentang: 1 },
  //    MekDun: { Ayam: 1, CocaCola: 2 }
  // }
  ```

### Release 2 - `getPriceOrder`

- Function `getPriceOrder` merupakan fungsi untuk menghitung total harga pesanan dalam 1 restoran saja.
- Function `getPriceOrder` memiliki 2 parameter input yaitu:
  - `restoName` berupa _string_ yang berisi **nama restoran**.
  - `order` berupa _object_ yang berisi **pesanan user pada restoran sesuai** `restoName`
- Function `getPriceOrder` memiliki output berupa _number_ yang merupakan **total harga dari pesanan user**.
- Contoh:

  ```js
  function getPriceOrder(restoName, order) {
    let listResto = [
      {
        restoName: "MekDun",
        Burger: 35000,
        Kentang: 15000,
        Ayam: 10000,
        CocaCola: 7000,
      },
      {
        restoName: "Burger Queen",
        Burger: 39000,
        Kentang: 12000,
        Ayam: 9000,
        CocaCola: 7500,
      },
      {
        restoName: "Lawmore",
        Burger: 60000,
        Kentang: 20000,
        Ayam: 12000,
        CocaCola: 8000,
      },
    ];
    // write your code here
  }

  console.log(
    getPriceOrder("Lawmore", {
      Burger: 2,
      Kentang: 1,
    })
  ); // 140000
  ```

### Release 3 - `getVoucher`

- Function `getVoucher` merupakan fungsi untuk menentukan voucher apa yang didapat oleh user berdasarkan total harga pesanan di semua resto yang di pesan oleh user. **( Total harga ini tidak termasuk harga ongkir )**
- Function `getVoucher` memiliki 1 parameter input yaitu:
  - `totalPrice` berupa _number_ yang berisi **total harga pesanan di semua resto**.
- Function `getVoucher` memiliki output berupa _object_ yang merupakan **data voucher yang didapat oleh user**.
- Jika `totalPrice` kurang dari **30000**, maka outputnya adalah:

```js
{
  title: "Tidak mendapatkan voucher",
  discount: 0,
}
```

- `totalPrice` hanya total harga dari pesanan user, tidak termasuk harga ongkir.

- Contoh:

```js
function getVoucher(totalPrice) {
  let listVoucher = [
    {
      title: "Promo 10% Ngab",
      discount: 10,
      minPrice: 30000,
    },
    {
      title: "Promo 20% Ngab",
      discount: 20,
      minPrice: 50000,
    },
    {
      title: "Promo 30% Ngab",
      discount: 30,
      minPrice: 70000,
    },
  ];
  // write your code here
}

console.log(getVoucher(164000));
// {
//   title: "Promo 30% Ngab",
//   discount: 30,
//   minPrice: 70000,
// }
```

### Release 4 - `getPriceOngkir`

- Function `getPriceOngkir` merupakan fungsi untuk menentukan harga ongkir berdasarkan lokasi resto yang dipesan oleh user
- Function `getPriceOngkir` memiliki 1 parameter input yaitu:
  - `resto` berupa _array_ yang berisi **resto mana saja yang dipesan oleh user**.
- Function `getPriceOngkir` memiliki output berupa _number_ yang merupakan **total harga ongkir dari semua resto yang dipesan oleh user**.
- Harga per **1km** nya adalah `2000` rupiah.
- Contoh:

```js
function getPriceOngkir(resto) {
  let listOngkir = {
    MekDun: 5, // satuan km
    "Burger Queen": 7, // satuan km
    Lawmore: 6, // satuan km
  };
  // write your code here
}

console.log(getPriceOngkir(["Lawmore", "MekDun"])); // 22000
```

### Release 5 - `makanSkuy`

- Function `makanSkuy` merupakan merupakan main function yang akan memanggil fungsi-fungsi lain di dalam nya dan berfungsi untuk mengeprint bill tagihan user.
- Function `makanSkuy` memiliki 1 parameter input yaitu:
  - `orders` berupa _array of array_ yang berisi **pesanan user**.
- Function `makanSkuy` memiliki output berupa _object_ yang merupakan **bill tagihan user**.
- key `totalPrice` didapat dari:

```
- Jika tidak mendapat discount:
totalPrice = (total harga semua orderan + total harga ongkir)

- Jika mendapat discount:
totalPrice = (total harga semua orderan + total harga ongkir) - ((total harga semua orderan + total harga ongkir) * discount)
```

- Jika parameter `orders` **invalid** atau **falsy**, maka outputnya adalah `"Invalid Data!"`
- Jika parameter `orders` adalah **array kosong**, maka outputnya adalah `"Tidak ada order, order dulu ngab!"`
- Contoh:

```js
function makanSkuy(resto) {
  // write your code here
}

console.log(
  makanSkuy([
    ["Lawmore", "Burger", "Burger", "Kentang"],
    ["MekDun", "Ayam", "CocaCola", "CocaCola"],
  ])
);
// {
//   orders: {
//     Lawmore: { Burger: 2, Kentang: 1 },
//     MekDun: { Ayam: 1, CocaCola: 2 }
//   },
//   voucher: 'Promo 30% Ngab',
//   totalPrice: 83300,
//   message: 'Harga sudah termasuk ongkir'
// }
console.log(makanSkuy([])); // Tidak ada order, order dulu ngab!
console.log(makanSkuy()); // Invalid Data!
```

Ikuti Release-Release diatas sehingga dapat membuat program ini berjalan dengan sesuai yang diinginkan!
