import React, {useState, useEffect} from 'react'

export const useRandomJoke = () => {

    const [joke, setJoke] = useState('');

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

      return joke;

    }