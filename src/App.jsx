import './App.css'
import { useRandomJoke } from './useRandomJoke';
import { useState, useRef} from 'react';

function App() {

  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const joke = useRandomJoke(firstName, lastName);
  
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);

  }

  return (
    
   <div>
    <center>
      <h1>The Joke Generator</h1>
      <input placeholder='first name here' ref={firstNameRef}/>
      <input placeholder='last name here' ref={lastNameRef}/>
      <button onClick={generateJoke}>Generate Joke</button>
      <p>{joke}</p>
    </center>
   </div>
  )
}

export default App
