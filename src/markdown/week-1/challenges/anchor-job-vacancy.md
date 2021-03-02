---
path: '/week-1/challenges/anchor-job-vacancy'
title: 'Job Vacancy'
---

# Job Vacancy

## Objectives

- Mengerti Cara Menggunakan `If-Else`
- Mengerti Logika `If-Else`
- Mengerti Cara Menggunakan Operator Evaluasi `===`, `!==`

## Directions

Bruce Company merupakan sebuah Private Security Company dan saat ini sedang membuka lowongan pekerjaan. Lowongan dibuka untuk beberapa departemen diantaranya:

* Departemen Keamanan
* Departemen Intelijen

Terdapat beberapa persyaratan yang harus dipenuhi agar calon pekerja dapat diterima kerja diantaranya:

1. Calon pekerja harus berasal dari kota Thamgo. Apabila calon pekerja bukan berasal dari kota Thamgo maka program akan
   menampilkan suatu keterangan dan program berhenti.
2. Calon pekerja harus berumur lebih dari 17 tahun.
3. Setiap departemen dibagi menjadi 2 divisi yaitu Divisi Senior untuk yang berusia diatas 30 tahun dan Divisi Junior
   untuk yang berusia 30 tahun kebawah, dengan pembagian kepemimpinan sebagai berikut:
   - Departemen Keamanan divisi Senior dipimpin oleh James Lordon.
   - Departemen Intelijen divisi Senior dipimpin oleh Barbara Lordon.
   - Departemen Keamanan divisi Junior dipimpin oleh Jason Toad.
   - Departemen Intelijen divisi Junior dipimpin oleh Tim Brake.

Tampilan program pada terminal yang diingikan:

1. Jika calon pekerja bukan berasal dari kota Thamgo maka tampilkan "Maaf anda tidak bisa mendaftar karena bukan warga kota Thamgo."

2. Jika calon pekerja merupakan warga Thamgo, berikut merupakan tampilan-tampilan yang muncul berdasarkan kondisionalnya:
   - Jika calon pekerja berumur 17 kebawah maka tampilkan "Anda masih `X` tahun dibawah usia minimal agar dapat diterima kerja."
   - Jika calon pekerja melamar ke Departemen Keamanan dan berusia diatas 30 tahun tampilkan "Anda diterima di divisi senior dan berada dibawah pimpinan James Lordon."
   - Jika calon pekerja melamar ke Departemen Intelijen dan berusia diatas 30 tahun tampilkan "Anda diterima di divisi senior dan berada dibawah pimpinan Barbara Lordon."
   - Jika calon pekerja melamar ke Departemen Keamanan dan berusia 30 tahun kebawah tampilkan "Anda diterima di divisi junior dan berada dibawah pimpinan Jason Toad, dan `Y` tahun lagi anda masuk divisi senior."
   - Jika calon pekerja melamar ke Departemen Intelijen dan berusia 30 tahun kebawah tampilkan "Anda diterima di divisi junior dan berada dibawah pimpinan Tim Brake, dan `Y` tahun lagi anda masuk divisi senior."

Keterangan:
- `X` adalah selisih batas usia minimal masuk kerja dan usia saat ini.
- `Y` adalah selisih batas usia minimal masuk divisi senior dan usia saat ini.

Buatlah Pseudocode dan code program untuk kasus diatas!
