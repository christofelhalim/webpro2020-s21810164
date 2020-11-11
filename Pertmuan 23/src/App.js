import "./App.css"; 
import Card from "./components/Card";
import Counter from "./components/Counter";
import {person} from './Utils/person';


function App() {
  return (
   <>
   {/*{person.map((item) => {
          return (
            <Card
              name= {item.name}
              institution= {item.institution}
              address= {item.address}
              phoneNumber= {item.phoneNumber}
          />
          );
       })}*/}
       <Counter title = "Counter Component"/>
       </>
  );
}

export default App;
