// IF ELSE

// sintaks
// if(kondisi){
//     jika kondisi true, maka kode ini dijalankan
// } else {
//     jika kondisi false, maka kode ini dijalankan
// }

// contoh 1
// coba ganti nilai dari nama1
const nama1 = "Mamat";

if (nama1 == "Mamat") {
  console.log("bener, saya Mamat");
} else {
  console.log("salah, nama saya bukan Mamat");
}

// contoh 2
// dapat ditambahkan kondisi lain dengan 'else if (kondisi)'
// oba ganti nilai dari nama2
const nama2 = "Siti";

if (nama2 == "Andi") {
  console.log("Andi hadir");
} else if (nama2 == "Budi") {
  console.log("Budi hadir");
} else if (nama2 == "Gunawan") {
  console.log("Gunawan hadir");
} else if (nama2 == "Mamat") {
  console.log("Mamat hadir");
} else if (nama2 == "Saleh") {
  console.log("Saleh hadir");
} else {
    console.log("nama siapa itu teh?")
}

// -----------------------------------------------------------------------------------------------

//  SWITCH CASE

// sintaks
// switch (variabelCek) {
//     case "nilai1":
//         dijalankan jika variabelCek = "nilai1"
//         break;
//     case "nilai2":
//         dijalankan jika variabelCek = "nilai2"
//         break;
//     default:
//         break;
// }

// 1. variabelCek diisi dengan dengan variabel yang ingin dicek nilainya
// 2. setiap case berisi kondisi atau nilai, contohnya "nilai1" dan "nilai2"
//    nilai biasa bernilai string atau number
// 3. default dijalankan seperti 'else' pada IF ELSE saat semua kondisi bernilai false

// contoh 1
// case berupa nilai
// coba ganti nilai dari warna
const warna = "biru"

switch (warna) {
    case "biru":
        console.log("ini warna biru")
        break;
    case "merah":
        console.log("ini warna merah")
        break;
    case "kuning":
        console.log("ini warna kuning")
        break;
    default:
        console.log("ini warna apa?")
        break;
}

// contoh 2
// case berupa kondisi
// coba ganti nilai angka
const angka = 10

switch (angka) {
    case angka < 0:
        console.log("angka negatif")
        break;
    case angka > 0:
        console.log("angka positif")
        break;
    default:
        console.log("angka nol")
        break;
}

// -----------------------------------------------------------------------------------------------

// TERNARY OPERATOR
// versi lebih pendek dan simple dari kondisional

// sintaks
// kondisi ? dijalankan jika true : dijalankan jika false

// contoh
// coba ganti nilai a dan b
const a = 10
const b = 20

a > b ? console.log("a lebih besar") : console.log("b lebih besar")

// fungsi di atas sama dengan

if(a > b){
    console.log("a lebih besar")
} else {
    console.log("b lebih besar")
}