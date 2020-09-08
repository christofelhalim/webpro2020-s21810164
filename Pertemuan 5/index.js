/*
1.array
*/
//deklarasi array
/*let angka=[1,2,3,4,5,6,7,8];
console.log(angka);
let buah =["Mangga","Apel","jeruk"];
console.log(buah);

let arr = ["text",1,true];
console.log(arr);

let myfunc= function()
{
    return "hello array"
};

let arr2 = ["text",2,true,myfunc(),[1,2,3,4,5]];
//mengakses elemen dalam array

console.log(arr2[2]);

console.log(arr2[3]);

console.log(arr2[4][2]);

console.log (arr2.length);

let buah2= new array("salak","jambu","melon");

console.log(buah2);
*/
//manipulasi array

/*
//1.menambah isi array
let mhs = [];
mhs[0] = "john";
mhs[1] = "bob";
mhs[2] = "jane";
mhs[3] = "peter";

console.log(mhs);



//2.Mengubah isi array
mhs1= "donny";
console.log(mhs);




//3.Menghapus isi array
mhs[2] = undefined;
console.log(mhs);
*/
/*
//4.menampilkan isi array
let mhs = ["john","bob","jane","peter"];

for (let i=0;i<mhs.length;i++){
    console.log("mahasiswa ke-"+(i+1) + "adalah"+ mhs);
}
*/


//method dalam array
//1.length
//2.toString
let mhs = ["john","bob","jane","peter"];
console.log(mhs.toString());

//3.Join
console.log(mhs.join(" - "));


/*
//4.push,pop,unshift,shift
let mhs = ["john","bob","jane","peter"];
mhs.push("mayrra");
mhs.push("halim");
console.log(mhs.join(" - "));
mhs.pop();
mhs.pop();
console.log(mhs.join(" - "));
*/
/*
mhs.unshift("stephen");
mhs.unshift("curry");
console.log(mhs.join("-"));
mhs.shift();
mhs.shift();
console.log(mhs.join("-"));
*/


/*
//5.concat
let buah = ["apel","mangga","anggur"];
let sayur= ["kangkung","bayam","buncis"];

let makanan = buah.concat(sayur);
console.log(makanan);
*/

/*
//6.splice dan slice
//a.splice
let buah = ["pisang","mangga","apel"];
buah.splice(2,0,"strawberry","semangka");
console.log(buah.join("-"));
*/

/*
//b.slice
let buah2 = ["pisang","mangga","apel","jeruk"];
buah.slice= buah.slice(0,3);
console.log(buah2.join("-"));
*/
/*
//7.ForEach dan map
//a.forEach
//for (let i=0;i<mhs.length;i++){
    console.log("mahasiswa ke-"+(i+1) + "adalah"+ mhs);
//}

let angka = [1,2,3,4,5,6,7,8];

let tampilangka=function(ele){
    console.log(ele);
} ;

angka.forEach(function(ele){
    console.log(ele);
});
*/
/*
//b.map
let angka2= angka.map(function(ele)){
    return ele;
} ;
console.log(angka2);
*/


/*
//8.sort
let angka= [1,100,2,20,5,4,7,8];
let mhs= ["john","bob","erick"];
mhs.sort();
console.log(mhs);
angka.sort(function(a,b){
return a-b;
//bisa putar a-b jadi b-a 
});
console.log(angka);
*/

//9.filter
let angka= [1,100,2,20,5,3,7,8];

let angka2=angka.filter(function(ele){
    return ele > 5;
});
console.log(angka2);