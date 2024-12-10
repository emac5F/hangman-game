import { useEffect, useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWord';

import './App.css'

function App() {

  const [ word, setWord ] = useState( getRandomWord() );//palabra oculta
  const [ hiddenWord, setHiddenWord ] = useState( '_ '.repeat( word.length ) );
  const [ attempts, setAttempts ] = useState(0); //intentos
  const [ lose, setLose ] = useState( false );//perder
  const [ won, setWon ] = useState( false );//gano


  //determinar si la persona perdió
  useEffect( () => {
    if( attempts >= 9 ){
      setLose( true );
    }
  }, [ attempts ]); //hooks

  //determinar si la persona ganó
  useEffect(() => {
    // console.log(hiddenWord);//_ _ _ _ _ _ _ _
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if( currentHiddenWord === word){
      setWon( true );
    }
  }, [ hiddenWord ]);


  const checkLetter = ( letter: string ) => {
    if( lose ) return;
    if( won ) return;

    if( !word.includes(letter) ){
      setAttempts ( Math.min(attempts + 1, 9) );
      return;
    } 

    const hiddenWordArray = hiddenWord.split(' ');
    for( let i = 0; i < word.length; i++ ){

      if( word[i] === letter ){
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord( hiddenWordArray.join(' ') );
  }

  const newGame = () => {
    const newWord = getRandomWord();

    setWord( newWord );
    setHiddenWord( '_ '.repeat( newWord.length ) );
    setAttempts( 0 );
    setLose( false );
    setWon( false );
  }


  return (
    <div className='App'>
      
      {/* Imagenes */}
      <HangImage imageNumber={attempts}/>

      {/* Palabra oculta */}
      <h3>{ hiddenWord }</h3>

      {/* Contador de intentos */}
      <h3>Intentos: { attempts }</h3>

      {/* Mensaje si perdio */}
      {
        ( lose ) 
        ? <h2 className='lose'>Perdió: { word }!</h2>
        : ''
      }
      {/* Mensaje si ganó */}
      {
        ( won ) 
        ? <h2 className='won'>Felicidades!, Usted ganó</h2>
        : ''
      }

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

      <br />
      <button className='newGame' onClick={ newGame }>¿Nuevo juego?</button>

    </div>
  )

}

export default App
