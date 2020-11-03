//Arrow function
//single argument
/*
const  calAge= (year)=>{
    return 2020-year
};
*/
/*
//multiple argument
const calAge=(birthYear,currentYear)=>{
    return currentYear-birthYear
};
*/

/*
//no Argument with implicit return value
const calAge= () => 2020-1992;

console.log(calAge());
*/



//contoh lain menghitung umur dari setiap tahun dibawah
//menggunakan metode map
const years=[1990,1992,2001,2005];

const calAge5 = years.map(function(el){
    return 2020-el;
});
console.log(calAge5);


/*
//Default parameter
const calAge=(birthYear,currentYear= 2020)=> currentYear-birthYear

console.log(calcAge(1991,2021));
*/

const yearsUntilRetirement = (year , firstName ="Halim") => { // Arrow Function & Default
    const age =`${28}`;  //Template Literal
    const retirement = 65 - age;
    if (retirement > 0) {
      console.log(` ${firstName} retired in ${retirement} years` );
    }
  }
  
  yearsUntilRetirement(2000);
