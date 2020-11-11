import React from 'react';
import './App.css';
const sortByPosition = (a, b) => {
return b.position - a.position;
}

const List = props => {
  return (
    <>
      <h1>Basketball Player</h1>
        <p>Dibawah ini adalah NBA All Star Player</p>

<ul className="list">
       {props.data.sort(sortByPosition).map((person) => (
      <li key={person.name} className="list-item">
        <div className="list-item-image-container">
       <img src={person.thumbnail} />
  </div>

  <span className="list-item-name">
       {person.name} ( Position:{' '}
        <span className="list-item-position">{person.position}</span> )
  </span>
         </li>
         ))}
      </ul>
    </>
    );
}
const App = () => {
const human = [
{
name: 'Stephen Curry',
thumbnail:
  'http://www.thestar.com/content/dam/thestar/sports/basketball/2015/02/14/nba-dream-stephen-curry-remembers-toronto-roots-feschuk/stephen-curry.jpg',
    position: "PG"
},
{
name: 'Kobe Bryant',
thumbnail: 
  'https://image.cnbcfm.com/api/v1/image/101524695-457220551.jpgv=1395781183&w=1400&h=950ge.',
    position: "SG"
},
{
name: 'Lebron James',
thumbnail:
'https://ww1.pictures.zimbio.com/gi/Lebron+james+Oklahoma+City+Thunder+v+Los+Angeles+LTRWg6Z1lg1l.jpg',
    position: "PF"
}
];
return (
<div className="App">
<List data={human} />
</div>
);
}
export default App;