//Var, Let , Const

//alasan meninggalkan var
//karena nama variabelnya sama dan akan ada masalah di program yang besar
/*
var nama = "Halim";
var nama = "curry";

console.log(nama);
*/

/*
let nama = "Halim";
let nama = "curry";

console.log(nama);
*/

//Scope dalam Javascript
//Var itu mengandung function scope
//1.Function Scope
//2.Block Scope(bagus karena semua program mengandung block scope)
/*
//for,if else,do-while, itu hanya di akses dlm block / smua yang pakai kurung kurawal
(function tes(){
for(var i=; i<10; i++){
    console.log(i);
}
})();

/*
//console dibawah ini bisa mengakses for karena var itu mengandung function scope
console.log(i);
*/
/*
{
    let i;
    for (let i<0; i<10 ; i++){
        console.log(i);
    }
}
*/
console.log(i);

//TEMPLATE LITERAL
const person = {
firstName: "Stephen",
lastName: "curry",
age: 19,
};
/*
console.log(
    "Hallo nama saya" +
    person.firstName +
    " " + 
    person.lastName +
    ". Umur saya adalah "+
    person.age +
    "tahun."
);
*/
console.log(
    `Hallo nama saya ${person.firstName}.${person.lastName}.${person.age}`
);