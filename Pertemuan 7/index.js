// JAVASCRIPT CONDITIONAL

//1.if/else if/else
    let nilaiKobe = 90;

    if (nilaiKobe>85){
        console.log("Sangat Memuaskan");
    }else if(nilaiKobe <60 && nilaiKobe <=85){
        console.log("Memuaskan");
    }else {
        console.log("Jangan menyerah, Tetap Berjuang");
    }



//2.Switch dan Case
let latihanbasket;
let hari = "senin";

switch (hari) {
  case "senin":
    latihanbasket = "latihan handle";
    break;
  case "selasa":
    latihanbasket = "latihan dribble";
    break;
  case "rabu":
    latihanbasket = "latihan shooting";
    break;
  case "kamis":
    latihanbasket = "latihan defence";
    break;
  case "jumat":
    latihanbasket = "latihan offense";
    break;
  default:
    latihanbasket = "latihan bebas";
}
console.log(latihanbasket); 





// CONTOH LAIN JIKA HARI SENIN SAMPAI KAMIS HANYA ADA LATIHAN SHOOTING
let latihanbasket;
let hari = "senin";

switch (hari) {
  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
    latihanbasket = "latihan shooting";
    break;
  case "jumat":
    latihanbasket = "latihan dribble";
    break;
  default:
    latihanbasket = "latihan bebas";
}

console.log(latihanbasket);







//  MATERI LOOP

//1. FOR LOOP
// cara cepat untuk menampilkan angka 1 sampai 10 atau 1000 dll.
    for (let i=1; i<=10; i++){
        console.log(i);
    }
    


// for...in digunakan untuk mengulang setiap properti dari sebuah objek.
//2.FOR/IN LOOP
const buku = {
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
 };
 for (x in buku) {
   console.log(x, ':', buku[x]);
 }

 
//Berbeda dengan for loop dari topik sebelumnya, for...of digunakan untuk mengulang setiap element dari objek yang bisa diulang (contoh array atau string).
//3.FOR/OF LOOP

const buku = ["Game of Thrones: A Song of Ice and Fire",  
   "Harry Potter and The Philosopher's Stone", 
   "Lord of The Rings: The Fellowship of The Ring"
];

for (x of buku) {
  console.log(x);
}


//4.WHILE LOOP
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
//while (kondisi) berarti ketika kondisi yang ditentukan benar (true), maka jalankan semua kode yang ada di dalam {}.



//5.DO WHILE LOOP
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);
