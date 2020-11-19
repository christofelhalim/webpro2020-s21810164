/*import React, { useState, useEffect } from "react";


/*

class Counter extends Component{
  state = {
      number: 0,
  };
  

  componentDidMount(){
      console.log("komponen di mount");
  }

  componentDidUpdate(){
      console.log("Komponen telah di perbaharui");
  }




  tambah = () => {
    this.setState({number: this.state.number +1});
  }

  kurang = () => {
     this.setState({number:this.state.number -1})
     this.setState({number: this.state.number -1});
  };

    render(){
        console.log("Komponen di render");
        return(
            <div>
         <p>{this.props.title}</p>
         <p>Komponen ini sudah diklik sebanyak {this.state.number} kali </p>
         <button onClick={this.tambah}>Tambah</button>
         <button onClick={this.kurang}>Kurang</button>
         </div>
        ); 
    }
}
*/
//mengubah nama componen dengan menggunakan function
/*
const counter = (props) => {
    
    const[number, setNumber] =useState(0);
    const [title, setTitle] = useState("Counter");

    useEffect(()=> {
        console.log("komponen telah di mount");
    }, []);

    const tambah = (params) =>{
        setNumber(number + params);
    };

    const kurang = () => {
        number <1 ? setNumber(0) : setNumber (number-1);
    };


    return(
        <div>
            <p>{title}</p>
            <p>Komponen ini sudah di klik sebanyak {number} kali</p>
            <button onClick={()=>tambah (1)}>Tambah</button>
            <button onClick={kurang}>Kurang</button>
        </div>
    );
};

export default Counter;


*/
