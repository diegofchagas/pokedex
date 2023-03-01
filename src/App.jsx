import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState({});

  async function getPokemons(id) {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        const pokemon = res.data;
        setPokemons((pokemons) => ({ ...pokemons, [id]: pokemon }));
      })
      .catch((error) => console.log(error));
  }

  const allPokemons =()=> Array(150).fill().map((_,index) => getPokemons(index + 1))

  useEffect(() => {
    allPokemons()
  }, []);

  return (
    <div className="container">
      <h1>Pokedex</h1>
      <ul className="pokemons">
        {Object.values(pokemons).map(({ id, name, types }) => (
          <li className={`card ${types[0].type.name}`} key={id}>
            <img className="card-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="pokemons" />
            <h2>
              {id}. {name}
            </h2>
            <p>{types.map(({ type }) => type.name).join(" || ")}</p>
          </li>
        ))}
      </ul>

     
     
    </div>
  );
}

export default App;
