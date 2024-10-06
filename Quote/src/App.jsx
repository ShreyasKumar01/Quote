import React, { useEffect, useState } from 'react'
import Heading from './components/Heading'
import Quote from './components/Quote';
import Saved from './components/Saved';

const App = () => {
  const [quote, setQuote]=useState('');
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);

  useEffect(()=>{
    const fetchQuote= async ()=>{
      try{
        const response= await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
        if(!response.ok){
          throw new Error('Failed to fetch quote');
        }
        const data=await response.json();
        setQuote(data[0]);
        setLoading(false);
      }catch(error){
        setError(error.message);
        setLoading(false);
      }
    }

    fetchQuote();
  }, [])

  return (
    <>
      <Heading/>
      {loading ? (
        <Quote quote="Loading quote..." />
        ): error ? (
          <Quote quote={error.message} />): (
          <Quote quote={quote} />
      )}
    </>
  )
}

export default App
