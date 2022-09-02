// FUNCTION

// sintaks 1 : deklarasi
// function namaFunction(parameter){
//     kode yang akan dijalankan
// }

// sintaks 2 : ekspresi
// const namaFunction = function(parameter){
//     kode yang akan dijalankan
// }

// sintaks 3 : arrow function
// const namaFunction = (parameter) => {
//     kode yang akan dijalankan
// }

// contoh penulisan sintaks
function selamatPagi(){
    return console.log("selamat pagi!")
}

const selamatSiang = function(){
    return console.log("selamat siang")
}

const selamatMalam = () => {
    return console.log("selamat malam")
}

// pemanggilan function
// namaFunction(parameter)
selamatPagi()
selamatSiang()
selamatMalam()

// -----------------------------------------------------------------------------------------------

// menggunakan parameter
function memanggilNama1(nama){
    return console.log(nama)
}

const memanggilNama2 = function(namaGue){
    return console.log(namaGue)
}

const memanggilNama3 = (namaOrang) => {
    return console.log(namaOrang)
}

// pemanggilan function
const nama = "Mamat"
const namaLainnya = "Gunawan"

memanggilNama1("Budi")
memanggilNama2(nama)
memanggilNama3(nama, namaLainnya)

// 1. parameter pada function (contohnya nama, namaGue, namaOrang) boleh dinamakan bebas
//    namun saat penggunaannya harus sama (contoh line 41, 45, 49)

// 2. variabel yang akan dipakai dimasukkan dalam kurung.
//    bisa dari variabel(line 57, 58) atau bisa langsung dimasukkan data(line 56)

// 3. Jika pada function hanya menerima satu parameter, namun dimasukkan dua,
//    maka hanya parameter paling kiri yang diterima.

// 4. Jika pada function satu parameter, namun tidak dimasukkan apa-apa,
//    maka ada kemungkinan kode tidak berjalan.
//    cara menanganinya dengan memberikan nilai default pada parameter

// contoh default value pada parameter
const printAngka = (angka = 1) => {
    console.log(angka)
}

// jika dijalankan akan memprint angka 10
printAngka(10)

// jika dijalankan akan memprint angka default yaitu 1
printAngka()

// -----------------------------------------------------------------------------------------------

// mengolah parameter
const tambah = (bil1, bil2) => {
    return console.log(bil1 + bil2)
}

tambah(17, 28)

const kurang = (bil1, bil2) => {
    return console.log(bil1 - bil2)
}

kurang(10, 5)

const kali = (bil1, bil2) => {
    return console.log(bil1 * bil2)
}

kali(20, 5)

const bagi = (bil1, bil2) => {
    return console.log(bil1 / bil2)
}

bagi(100, 4)

// -----------------------------------------------------------------------------------------------

// return
// return menandakan selesainya suatu kode dijalankan
const print = (kata1, kata2, kata3) => {
    console.log(kata1)
    return console.log(kata2)
    console.log(kata3)
    console.log("Hitam")
}

const buah = "mangga"
const mobil = "Nissan"
const bahasa = "Bahasa Jawa"

// coba jalankan, kemudian coba hapus return pada line 117 
print(buah, mobil, bahasa)