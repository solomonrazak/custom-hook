import './App.css'
import { useRandomJoke } from './useRandomJoke';

function App() {

  const joke = useRandomJoke();

 
  

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
