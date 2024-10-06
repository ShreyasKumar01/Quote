import React from 'react'
import '../App.css'

const Card = ({quote}) => {
  return (
    <>
      <div className="quote-card-saved">
      <p className="quote-text-saved">
            {quote}
      </p>
    </div>
    </>
  )
}

export default Card
