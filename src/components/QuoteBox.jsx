import React from 'react'

const QuoteBox = ({quote, rdColor}) => {

  return (
    <div className='card' key={1}>
        <blockquote className="quote"  style={{color:rdColor}}><span>&#8216;&#8216;</span>{quote.quote}</blockquote>
        <p className="author" style={{color:rdColor}}>{quote.author}</p>
    </div>
  )
}

export default QuoteBox