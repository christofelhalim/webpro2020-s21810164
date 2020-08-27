

/*
2.function
*/  
/*
1.Parameter & Argument
*/
function operasiperkalian(angka1m,angka2){
    return angka1*angka2;
}
console.log(operasiperkalian(2,6))



function penjumlahanDuaBujurSangkar(a,b){
return a*a+b*b;
}
console.log= penjumlahanDuaBujurSangkar(8,3);
console.log= penjumlahanDuaBujurSangkar(10,5);

function tambah(a,b){
    return a+b;
}
function kali(a,b);
retun a*b;
}
console.log(tambah(kali(5,2),kali(10,2)));


/*
2.Hoisting
*/
console.log(operasiperkalian(5,5));
function operasi perkalian(angka1,angka2)
{
    return angka 1*angka2;

}

/*
3.lingkup global
*/

const olahraga = 'basketball';

function namaatlet(){
    let atlet='Dybala';
    const nodybala=19;
    console.log(olahraga);
    if (olahraga === 'basketball'){
        atlet='stephen curry';
        const nostephencurry=30;
        console.log(olahraga);
    }
    return atlet;
}
console.log(namaatlet());
console.log(olahraga);