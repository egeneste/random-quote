import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteBox from './components/QuoteBox'

import quotes from "./json/quotes.json"
import NextButton from './components/NextButton'


function App() {
  const getRandomQuote = (q) => {
    let randNum = Math.floor(Math.random() * q.length);
    return q[randNum]
  }

  const rdmInitQuote = getRandomQuote(quotes)

  const [randomQuote, setRandomQuote] = useState(rdmInitQuote)
  const [randomColor, setColor] = useState('#aee');
  
  const nextRandomQuoteAndColor = ()=> {
    let rdmQuote = getRandomQuote(quotes)
    setRandomQuote(rdmQuote)

    let rdmColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    setColor(rdmColor);
  }
  return (
    <div className="App" style={{backgroundColor: randomColor}}>
      <div className='container'>
        <QuoteBox quote={randomQuote} rdColor={randomColor}/>
        <NextButton handleClick={nextRandomQuoteAndColor} rdColor={randomColor}/>
      </div>
    </div>
  )
}

export default App
