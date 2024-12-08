import { useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';

import './App.css'

function App() {

  //palabra oculta
  const [ word ] = useState('COMPUTADORA');
  const [ hiddenWord ] = useState( '_ '.repeat( word.length ) );

  //intentos
  const [ attempts, setAttempts ] = useState(0);

  
  const checkLetter = ( letter: string ) => {

    if( !word.includes(letter) ){
      setAttempts ( Math.min(attempts +1, 9) );
      return;
    } 
    //console.log(letter + 'existe');
    
  }

  return (
    <div className='App'>
      
      {/* Imagenes */}
      <HangImage imageNumber={attempts}/>

      {/* Palabra oculta */}
      <h3>_ _ _ _ _ _ _ _ _ _</h3>

      {/* Contador de intentos */}
      <h3>Intentos: { attempts }</h3>

      {/* Botones de letras */}
      {
        letters.map( (letter) => (
          <button 
            onClick={ () => checkLetter(letter) }
            key={ letter }>
              { letter }
          </button>
        )
      )}

    </div>
  )

}

export default App
