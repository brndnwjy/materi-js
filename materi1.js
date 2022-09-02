// V A R I A B E L

// sintaks diawali dengan var/let/const
// namaVariabel bebas sesuai kebutuhan
// isi variabel boleh kosong kecuali jika menggunakan const
let namaVariabel1
const namaVariabel2 = "isi variabel"

// versi lama, usahakan dihindari
var nama = "Andi"

// versi terkini, let dapat diubah nilainya sedangkan const tidak
let umurAndi = 21
umurAndi = 22

const umurBudi = 21
umurBudi = 22

// variabel umurBudi akan error saat dijalankan
console.log(umurAndi)
console.log(umurBudi)

// -----------------------------------------------------------------------------------------------

// T I P E   D A T A

// string
// gunakan petik
const str1 = "Budi"
const str2 = 'Gunawan'
const str3 = `Mamat`
const str4 = "123"

// number
const a = 8
const b = -17
const c = 3.14

// array
// isi data bisa bervariasi
// indeks array diawali dari 0
const arr1 = ["Andi", "Budi", "Gunawan", "Mamat", "Saleh"]
const arr2 = [1, 2, 3, 4, 5]
const arr3 = [1, "Budi", true, null, "Saleh"]

// akan memanggil data pertama dari arr1 yaitu "Andi" 
console.log(arr1[0])

// akan memanggil data ketiga dari arr2 yaitu "3"
console.log(arr2[2])

// object
const obj = {
    nama: "Andi",
    umur: 21,
    sekolah: "SMA Bina Bangsa",
    hobi: ["renang", "tenis meja"]
}

// pemanggilan dengan menyertakan nama objek beserta key
// contoh : namaObjek.keyObject
console.log(obj.nama)

// mengecek tipe data
const cek1 = "Andi"
const cek2 = 123
const cek3 = [1, "Budi"]

console.log(typeof cek1)
console.log(typeof cek2)
console.log(typeof cek3)