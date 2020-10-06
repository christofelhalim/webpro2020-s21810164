//DESTRUKTURISASI
    //adalah  cara untuk membongkar isi dari array atau objek dan menyimpan hasilnya ke dalam variabel-variabel lain.

//DESTRUKTURISASI ARRAY
/*
let buah = ["banana", "cucumber", "anggur"];

let buah1 = buah[0];
let buah2 = buah[1];
let buah3 = buah[2];

console.log(buah1);
console.log(buah2); 
console.log(buah3);
*/
//Selain tidak efisien karena harus menulis assignment untuk tiap variabel, kita juga harus menghitung nilai yang kita ingin ambil itu ada di index keberapa.
//dibawah cara yang lebih singkat dan efisien
/*
let buah = ["mangga", "pisang", "anggur"];

// lakukan destrukturisasi array
let [buah1, buah2, buah3] = buah;

console.log(buah1); 
console.log(buah2); 
console.log(buah3);

//Menggunakan koma kosong
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

console.log(namaDepan);
console.log(namaBelakang); 
console.log(buku);
*/


/*
//DESTRUKTURISASI OBJEK
let orang = {
    nama: "Joko",
    umur: 18,
    sudahMenikah: false
  };
  
  let nama = orang.nama;
  let umur = orang.umur;
  let sudahMenikah = orang.sudahMenikah;
  
  console.log(nama); 
  console.log(umur); 
  console.log(sudahMenikah);

  */

  /*
 //Cara di atas hanya bekerja jika nama variabel baru untuk destrukturisasi itu sama dengan nama properti pada objek yang akan didestrukturisasi ya. Kalau tidak nanti isi dari variabelnya adalah undefined.
 let orang = {
    nama: "Joko",
    umur: 22,
    sudahMenikah: false
  };
  
  // Destrukturisasi Objek
  let { nama, umur, statusMenikah } = orang;
  
  console.log(nama); 
  console.log(umur);
  console.log(statusMenikah); 
  */


  /*
 //Tapi kalau ingin agar nama variabelnya berbeda dari nama properti, kalian bisa menambahkan titik dua setelah nama properti dan diikuti nama variabel yang baru, seperti ini:
 let orang = {
    name: "Joko",
    age: 22,
  };
  
  // buat variabel nama berisi nilai dari properti name pada orang
  // buat variabel age berisi nilai dari properti umur pada orang
  let { name: nama, age: umur } = orang;
  
  console.log(nama); 
  console.log(umur);
  */

  //DESTRUKTURISASI OBJEK BERTINGKAT

  //Jika objek-nya bertingkat (ada objek di dalam objek) apa tetap bisa didestrukturisasi?
//Bisa!
//Contohnya seperti ini:
/*
let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga);
  */
