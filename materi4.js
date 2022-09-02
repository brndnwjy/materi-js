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

memanggilNama1(nama)
memanggilNama2(namaLainnya)
memanggilNama3(nama, namaLainnya)

// 1. parameter pada function (contohnya nama, namaGue, namaOrang) boleh dinamakan bebas
//    namun saat penggunaannya harus sama (contoh line 41, 45, 49)
// 2. variabel yang akan dipakai dimasukkan dalam kurung.

//    Jika pada function hanya menerima satu parameter, namun dimasukkan dua,
//    maka hanya parameter paling kiri yang diterima.

//    Jika pada function satu parameter, namun tidak dimasukkan apa-apa,
//    maka ada kemungkinan kode tidak berjalan