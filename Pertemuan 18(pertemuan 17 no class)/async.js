//JAVASCRIPT ASYNCHRONUS
//SYNCHRONUS VS ASYNCHRONUS

//dibawahn ini program masih berjalan secara SYNCHRONUS
//bahwa synchronus ini berjalan secara berurutan bari per baris contohnya program di bawah ini
/*const second = () =>{
    console.log('Second');
}

const first = () => {
    console.log('First');
    second();
    console.log('The End');
}
first();
*/

//dibawah ini kita gunakan setTimeOut
//anggaplah fungsi second();membutuhkan waktu yg lama
/*
const second = () =>{
    setTimeout(() =>{
//console.log('second') fungsi callback
        console.log('Second');
    },2000)
    console.log('Second');
}

const first = () => {
    console.log('First');
    second();
    console.log('The End');
}
first();
//Outputnya nanti FIRST,THE END, yang terakhir Second
//Mengapa second? karena ini fungsi Asynchronus, dimana kita taru set time out untuk second
//jadi maksudnya jika kita taru set time out berarti kita ini menampilkan ke baris berikut atau yang paling terakhir muncul
*/

//PROMISE

/*
const getData = new Promise((resolve,reject) => {
    //panggi fungsi resove
    setTimeout(() =>{
        const error = false;
        if(error){
            reject();
        }else {
            resolve();
        }
       
    },2000);
    //diatas ini sudah menjalankan PROMISE
})
//CARA panggil object yaitu getData menggunakan then

    getData
    .then(() => {console.log('success')})
    .catch(() => {console.log('error')});
*/

const getData = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const error = false;
            if(error){
                reject();
            }else {
                resolve(10);
            }
        },2000);
    })
}

const getName = id => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`ID ${id} success`)
        },2000)
    })
}

    const getNameById = async() =>{
        let id, success;
        try{
        const id = await getData();
        const success = await getName(id);
      //  console.log(success);
    }catch (error){
        console.log(error)
    }
    return success;
}
const result= getNameById();
console.log(result);