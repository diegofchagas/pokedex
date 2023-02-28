import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState({})

  async function getPokemons(id){
   await axios.get( `https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => { const pokemon = res.data
      setPokemons(pokemons => ({...pokemons, [id]:pokemon}))
    })
    .catch(error => console.log(error))


  }

  useEffect(()=>{
    getPokemons(25)
  },[])

  


  return (
    <div>
       <h1>Pokedex</h1>
        <ul>
          {Object.values(pokemons).map(({id,name,sprites,types})=> <li>
            <img src={sprites.front_default} alt="pokemons" />
            <h2>{id}. {name}</h2>
            <p>{types.map(({type})=> type.name).join(" || ")}</p>
            </li>)}
        </ul>

    </div>
  )
}

export default App
