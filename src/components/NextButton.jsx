import React from 'react'

const NextButton = ({handleClick, rdColor}) => {
  return (
    <button className='button' onClick={handleClick} style={{backgroundColor:rdColor}}>&#x3e;</button>
  )
}

export default NextButton