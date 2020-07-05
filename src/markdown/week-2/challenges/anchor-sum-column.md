---
path: '/week-2/challenges/anchor-sum-column'
title: 'Sum Column'
---

# Logic Challenge Sum Row

## Objectives

- Mampu membuat function serupa built in function sederhana JavaScript
- mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah
- Mampu mengakses sebuah array

## Direction

Program sumColumn adalah program yang dapat menjumlahkan angka per column pada array multidimensi. Setiap rown nya bisa memiliki jumlah row yang berbeda

[EXAMPLE]

input:<br>
[<br>
&nbsp&nbsp[5],<br>
&nbsp&nbsp[2, 5, 12, 8],<br>
&nbsp&nbsp[4, 56, 3]<br>
]

Cara menjumlahkannya, jumlahkan angka-angka tersebut dengan column yang sama maka yang di jumlahkan adalah:

column 1 => 5 + 2 + 4 = 11<br>
column 2 => 5 + 56 = 61<br>
column 3 => 12 + 3 = 15<br>
column 4 => 8 = 8<br>

hasil masing-masing penjumlahan disetiap column di masukkan kedalam 1 array:

output :
[11, 61, 15, 8]

```javascript
function sumColumn(arr) {
  // code here
}
// TEST CASE
console.log(sumColumn([[10], [2, 5, 2, 0, 15, 10, 14]]))
// [12, 5, 2, 0, 15, 10, 14]
console.log(sumColumn([[5], [2, 5, 12, 8], [4, 56, 3]]))
// [11, 61, 15, 8 ]
console.log(
  sumColumn([
    [3, 5, 12, 6],
    [1, 7, 4, 3, 8, 4, 9],
    [8, 5, 8],
    [4, 7, 8, 2, 8, 3]
  ])
)
// [ 16, 24, 32, 11, 16, 7, 9 ]
```
