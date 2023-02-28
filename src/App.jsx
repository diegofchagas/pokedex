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

  console.log(pokemons)


  return (
    <div>
       <h1>Pokedex</h1>
        

    </div>
  )
}

export default App
