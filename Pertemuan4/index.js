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