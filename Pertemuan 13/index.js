//Rest parameter & Spread Operator
//------------------------------
// = > adalah symbol arrow function
/*
const hitung= (a,b,c,d,e,f,g) => {
    
    const angka = [a,b,c,d,e,f,g];//menyimpan nilai dari sebuah array
    let total=0;
    //menggunakan map di bawah ini
    const hasil = angka.map(el)=> total+el);
    //bisa juga forEach contoh dibawah ini 
    angka.forEach((el)=>total+el);
    //bisa juga for contoh dibawah ini
    for(let i=0; i<7; i++){
        total =total +angka[i];
    }
    return total;
console.log(hitung(1,2,3,4,5,6,7));
*/
// contoh di atas boleh digunakan, tapi akan ada masalah jika variabel nya banyak
// di bawah ini adalah cara lain yang cepat biar variabelnya banyak
//menggunakan rest parameter  dibawah ini

/*  
const hitung= (param1,param2,...params)=>{//... ini untuk array 
        console.log(param1);//jadi param 1 berisi angka 1 yang ada di console hitung di bawah
        console.log(param2);// param 2 berisi angka 2 yang ada di console hitung di bawah
        console.log(params);// dan 3,4,5,6,7,8,9,10 angka disamping ini merupakan rest dan dia akan masuk di params
        let total = 0;

        angka.forEach(el)=>{
            total=total+el;
        });
        return total;
    };
    console.log(hitung(1,2,3,4,5,6,7,8,9,10));
    */


    /*
//SPREAD OPERATOR hanya memecah array
//tujuan dari ini untuk menduplikat array
//1.memecahkan array
const angka=[1,2,3,4,5];
//dibawah ini cara menduplikat menggunakan rest parameter
angka[0]=10;
console.log(angka);
console.log(angka2);


//2.menggabungkan array
const angka1 =[1,2,3,4,5];
const angka2 =[6,7,8,9,10];
const angka3 =[12,13,14];

const gabung= angka1.concat(angka2,angka3);
console.log(gabung);
*/

/*
//di atas itu adalah cara yang membutuhkan waktu yg lama
// dibawah ini cara tercepat dengan menggunakan rest parameter
const gabung5=angka1.concat(angka2,angka3);
console.log(gabung5);

const gabung6= [...angka1,...angka2,11,...angka3];
console.log(gabung6);
*/

// spread operator juga bisa digunakan untuk objek
//contohnya di bawah ini
 /*
//1.Objek
    let orang = {
        nama: "Steph",
        umur: 33,
    };
    //cara yang lama
   // orang.pekerjaan = "guru";
   // orang.pendidikan = "s2";

   //cara menggunakan spread operator cara tercepat dibawah ini
   orang = {...orang,pekerjaan: "Guru",pendidikan: "s2"};
   console.log(orang);
*/

/*
//2.Menggabungkan objek

    const obj1 = {a : 1, b : 2};
    const obj2 = {c : 3, d : 4};

    const objgabung = {...obj1,...obj2};
    console.log(objgabung);
    */