
import React, {useEffect, useState} from 'react';
import './App.css'

function App() {

  const [joke, setJoke] = useState('')

  useEffect(() => {
    const fetchJoke = async() => {
      try {
        const response = await fetch('http://api.icndb.com/jokes/random?firstName=Solomon&lastName=Razak')
        if(!response.ok){
          throw new Error(`this is the error: ${response.status}`)
        }
        let data = await response.json();
        setJoke(data.value.joke)

      }
      catch (error){
        console.log(error)

      }
    }
    fetchJoke();

  }, [])
  

  return (
    
   <div>
    <center>
      <h1>The Joke Generator</h1>
      <button>Generate Joke</button>
      <p>{joke}</p>
    </center>
   </div>
  )
}

export default App
