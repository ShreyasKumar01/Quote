import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'; 

const Saved = ({refresh}) => {
  const [quotes, setQuotes] = useState([]);
  
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/quotes/all');
        setQuotes(response.data.allquotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };
    fetchQuotes();
  }, [refresh]);

  return (
    <>
      <h1 className='heading2'>Saved Quotes</h1>
      <div className='quote-list'>
        {quotes.map((quote, index) => (
          <Card key={index} quote={quote.quote} />
        ))}
      </div>
    </>
  );
};

export default Saved;
