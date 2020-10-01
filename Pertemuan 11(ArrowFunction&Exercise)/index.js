//Arrow Function
//cara mendeklarasikan fungsi
/*
    function ucapanSalam(){
        return "selamat pagi";
    }
*/
  /*
//dibawah ini merupakan FUNCTION dengan Parameter
//Syntax Arrow Function
    const operasiPenjumlahan = (number1, number2) => {
  const hasil = number1 + number2;
  return hasil;
};
console.log(operasiPenjumlahan(12, 10));



//Dibawah ini Function yang tidak memiliki Parameter
const namaJenisAnjing = () => {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
  }
  
  console.log(namaJenisAnjing());

//IMPLICIT RETURN VALUE
//Return value adalah, suatu kondisi di mana sebuah fungsi langsung mengembalikan nilai tanpa ada deklarasi variabel atau operasi lainnya di dalamnya.
//Contoh
function greeting(nama) {
    return `Hi ${nama}`;
 }
 console.log(greeting('Einstein'));
 //Kode di atas bisa disingkat dengan menggunakan arrow function sebagai berikut:
 const greeting = (nama) => `Hi ${nama}`;

 console.log(greeting('Einstein'))

 
// Untuk fungsi yang tidak memiliki parameter, syntax arrow function untuk implicit return value adalah sebagai berikut:
const namaFungsi = () => nilaiReturn;
//Jadi kita tidak lagi perlu capek-capek menulis kurung kurawal {} dan kata return lagi.

 */



/*
 //_____________________________________________________________________________________________________________________________
//EXERCISE
//Convert to ES6 syntax
//function yearUntilRetirement(year,firstname){
const  yearUntilRetirement= (year=2020, firstname="steph") => {
  let age =28;
  let retirement = 65 - age;
  if (retirement > 0){
      console.log(firstName+ " retired in" + retirement + " years");
  }else {
      console.log(firstName + " is already retired.");
  }
}
yearUntilRetirement();
*/
