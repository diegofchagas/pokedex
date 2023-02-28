import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])

  async function getPokemons(id){
   await axios.get( `https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => console.log(res))
    .catch(error => console.log(error))


  }

  useEffect(()=>{
    getPokemons(25)
  },[])


  return (
    <div>
      


    </div>
  )
}

export default App
