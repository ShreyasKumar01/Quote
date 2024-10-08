import React, { useState } from 'react'
import '../App.css'

const Card = ({quote}) => {
  const [select, setSelect]=useState(true);

  const handleCardClick= () =>{
    setSelect(!select);
  }

  return (
    <>
      <div className="quote-card-saved" onClick={handleCardClick}>
      {/* {
        select ?( */}
          <p className="quote-text-saved">
          {quote}
          </p>
      {/*   ):(
          <button> Delete </button>
       )
     } */}
    </div>
    </>
  )
}

export default Card
