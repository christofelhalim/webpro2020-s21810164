import React from "react";
import { cekTahun, cekHari} from '../Utils/Waktu'

const Hello = () => {
    return (
   <>
    <p>Hello,Welcom to NBA Website</p>
    <p>Year : {cekTahun()}</p>
    <p>Date : {cekHari()}</p>
    
    </>
    );
  };

  export default Hello;