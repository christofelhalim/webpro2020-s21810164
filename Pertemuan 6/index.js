// array adalah sekumpulan nilai yang memiliki index yang dimulai dari 0
// true/false itu boolean
// const itu datanya sudah tetap
/*
    OBJECT
*/

//const mahasiswa1 = ['John','Doe',31, true];
//console.log (mahasiswa1);
//  objek gunakan kurung kurawal

// di bawah ini adalah propertis dan deklarasi sebuah objek



/*
// 1.Dibawah ini deklarasi object Literals
// 2. dibawah ini juga ada objek di dalam objek

const mhs1 = {
namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 31,
    sudahLulus: true,
    alamat: {
        jalan: 'Jln. Arnold Mononutu',
        kecamatan: 'Airmadidi',
        Kabupaten: 'Minut',
    },
    IPSemester: [3.05,3.25,3.0,3.4];
    //objek bisa menyimpan fungsi contoh di bawah menggunakan function expression
    hitungIPK: function(){
        let total=0;
        this.IPSemester.forEach(function(el){
            total = total + el;
        });
        this.IPKumulatif = total/4;        
    },
};
//objek di dalam objek
    console.log(mhs1.alamat.jalan);
    console.log(mhs1.IPSemester[2]);
 //mhs1.hitungipk itu memanggil function   
    mhs1.hitungIPK
    console.log(mhs1)


    

/*
// 2.Kata kunci new
const mhs2= new Object();
mhs2.namaDepan= 'Jane';
mhs.namaBelakang= 'Smith';
*/
//Mengakses properti objek
/*
const mhs1 = {
    namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 31,
    sudahLulus: true,
};
//1.Dot notation
console.log(mhs1.umur);
// 2.Bracket Notation
console.log(mhs["namaBelakang"]);
*/

// Delete
/*
delete.mhs1.namaBelakang;
console.log(mhs1);
*/


/*
// Array Object

    const.mahasiswa= [
        {
            nim:"002",
            namaDepan: "John",
            namaBelakang:"Doe",
        },
        {
            nim:"002",
            namaDepan: "John",
            namaBelakang:"Doe",
        },
        {
            nim:"002",
            namaDepan: "John",
            namaBelakang:"Doe",
        },
    ];

    mahasiswa.forEach(function(el){
        console.log(el);
    });
    */

    