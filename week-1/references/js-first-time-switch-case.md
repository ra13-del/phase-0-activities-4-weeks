## Conditional (SWITCH - CASE)

Selain menggunakan if-else, ada satu cara lagi untuk melakukan conditional, yaitu switch-case. Switch case ini biasanya lebih sering digunakan untuk skenario yang melibatkan banyak kondisi atau branching yang banyak. Contoh sederhananya adalah dengan sebuah remote TV.

```javascript
var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }
}
```

Seperti dilihat di kode di atas, `switch` akan mengambil nilai, dan `case` adalah skenario apa saja yang memungkinkan untuk menjalankan satu proses. Kamu mungkin menyadari ada 1 sintaks baru yang kamu temukan: `break;`. Break memungkinkan kamu untuk "berhenti" dari proses kondisional/switch-case, dengan tujuan agar proses tidak berlanjut ke case selanjutnya. untuk eksperimenmu, kamu bisa mencoba menghapus `break` dan perhatikan apa yang terjadi.

Kamu bisa eksperimen dan mencoba kode di atas [disini](http://jsbin.com/qucoma/edit?js,console)
