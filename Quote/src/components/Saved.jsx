import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'; 
import Loading from './Loading';

const Saved = ({refresh}) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('https://quote-server-sage.vercel.app/quotes/all');
        setQuotes(response.data.allquotes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };
    fetchQuotes();
  }, [refresh]);

  return (
    <>
      <h1 className='heading2'>Saved Quotes</h1>
      {
        loading ?
        (
          <Loading/>
        ) :
        (
          <div className='quote-list'>
           {quotes.map((quote, index) => (
            <Card key={index} quote={quote.quote} />
           ))}
          </div>
        )
      }
    </>
  );
};

export default Saved;
