import { useState, useEffect } from "react";
import {MagnifyingGlass} from 'phosphor-react'
import axios from "axios";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState({});
  const [busca, setBusca] = useState("")

 
  

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

  const pokemonsBusca = Object.values(pokemons).filter(
   (pokemon)  => 
    pokemon.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase()) ||
    pokemon.id === parseInt(busca)
    )

  return (
    <div className="container">
      <h1>Pokedex</h1>

      <div className="busca-container">
        <input 
        
        className="busca"
        type="search" 
        placeholder="pesquisar pokemons" 
        value={busca}
        onChange={({target})=> setBusca(target.value)} 
        />
         <MagnifyingGlass size={50}/>
      </div>

      <ul className="pokemons">
        {pokemonsBusca.map(({ id, name, types }) => (
          <li className={`card ${types[0].type.name}`} key={id}>
            <img className="card-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="pokemons" />
            <h2>
              {id}. {name}
            </h2>
            <p className="tipo">{types.map(({ type }) => type.name).join(" || ")}</p>
          </li>
        ))}
      </ul>

     
     
    </div>
  );
}

export default App;
