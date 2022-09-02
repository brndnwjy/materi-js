// F O R

// sintaks 
// for(inisialisasi; kondisi; iterasi){
//     kode dijalankan selama kondisi true
// }

// 1. biasanya inisialisasi bertipe number seperti 'let i = 0'
// 2. iterasi dilakukan saat potongan kode sudah dijalankan]

// contoh 1
for(let i = 1; i < 5; i++){
    console.log("kode berjalan")
}

// run pertama, i bernilai 1 dan kondisi true, maka log diprint. kemudian i++ menyebabkan nilai i = 2
// run kedua, i bernilai 2 dan kondisi true, maka log diprint. kemudian i++ menybabkan nilai i = 3
// ...
// run kelima, i bernilai 5 dan kondisi false sehingga perulangan dihentikan
// dengan begitu, "kode berjalan" diprint sebanyak 4 kali saat i bernilai 1, 2, 3, 4

// contoh 2
const batas = 10

for(let i = 1; j < batas; j++){
    console.log(j)
}

// sama seperti contoh 1, namun kondisi menggunakan variabel.
// running akan memprint nilai i 
// coba ganti nilai batas dan jalankan kode

// -----------------------------------------------------------------------------------------------

// W H I L E

// sintaks]
// inisialisasi
// while(kondisi){
//     dijalankan selama kondisi true
//     iterasi
// }

// 1. hampir sama dengan FOR, hanya dengan format berbeda
// 2. perlu diingat, iterasi dijalankan di dalam block. jangan lupa untuk menulisnya
// 3. inisialisasi dilakukan sebelum perulangan atau mengambil variabel yang sudah ada

// contoh
let urutan = 1

while(urutan < 5){
    console.log("urutan selanjutnya")
    urutan += 2
}

// selama kondisi bernilai true, kode di dalam block akan dijalankan. yaitu print dan iterasi
// jika iterasi lupa ditulis, maka kode akan terus berjalan tanpa akhir
// coba hapus iterasi pada kode

// catatan kaki :
// i++ sama halnya dengan i = i + 1
// i-- sama halnya dengan i = i - 1

// i += 5 sama halnya dengan i = i + 5
// i -= 5 sama halnya dengan i = i - 5