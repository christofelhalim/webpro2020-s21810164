// Destructuring = memecah array yaitu properti atau item"nya dan akan disimpan ke variabel yang berbeda
//-----------------------

//1.Array
/*  
const colors = ["Merah",''Kuning'',''Hijau''];

    let satu = colors[0];
    let dua = colors[1];
    let tiga = colors[3];
    
    //dibawah ini cara menampilkan
    console.log[satu,dua,tiga];
*/
//diatas cara yang cukup lama
/*
//dibawah ini cara yang cepat
    let = ["merah","hijau","biru"]=colors;
    console.log(satu,dua,tiga);
    */

//cara menambahkan warna/menambahkan default value
 //let [satu,dua,tiga,empat = biru] = colors;
//2.object
/*
    const user = {
        Name: "john",
        gender: "male",
        age: 33,
    };

    let name = user.name;
    let gender = user.gender;
    let age = user.age;

    //diatas ini butuh waktu lama
*/
    //di bawah ini cara cepat
    /*
 const user = {
        Name: "john",
        gender: "male",
        age: 33,
    };

    let{name,gender,age} = user;
    console.log(name,gender,age);
    */
//dibawah ini cara menambahkan default value
    //let {name,gender,age, born="manado"} = user;
    //console.log(name,gender,age,born);

    //dibawah ini cara kalau kita hanya ingin menampilkan nama,age (terserah kita )
    //let{name,age} = user;
   // console.log(name,age)

   //dibawah ini cara kalau kita hanya ingin menampilkan nama,age (terserah kita pakai => : untuk contoh age ganti dengan umur)
   //let {name,gender,age:umur} = user;
    //console.log(name,gender,age,umur);
/*
    const display=({nama,age})=>{
        console.log(`nama saya adalah ${name}.umur saya adalah ${age}`);
    };
*/


//3.Array Object
/*
    const users = {
        {id:1, name:"john"},
        {id:2, name:"jade"},
        {id:3 name: "steph"},
    };

   // let [user1,user2,user3] = users;
    //console.log(user1,user2,user3);
//dibawah ini yaitu let kalau m ambe ssuai yang kita mau contoh di atas kt ambe yang nama jade kita harus pak , spasi ,
    let[
     {id:iduser1, name:nameuser1},
     {id:iduser2, name:nameuser2},
     {id:iduser3, name:nameuser3},
    ]=users;
    console.log(iduser1,nameuser1);
    */


    //4.kombinasi dengan rest operator
    
    const colors = ["merah","kuning","hijau","biru"];
    
    let[satu, ...lainnya]=colors;

    console.log(satu);
    console.log(lainnya);
