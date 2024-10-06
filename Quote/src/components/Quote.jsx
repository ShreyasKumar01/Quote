import React, { useState } from 'react';
import '../App.css'; // External CSS file
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Saved from './Saved';

const Quote = ({ quote }) => {

    const [refresh, setRefresh]=useState(true);

    const handleSaveQuote = async () => {
        try {
          const response = await axios.post('http://localhost:8000/quote/save', {
            quote,
          });

          toast.success(response.data.message); 
    
        } catch (error) {
          if (error.response && error.response.status === 409) {
            toast.info(error.response.data.message); 
          } else {
            console.error('Error saving the quote:', error);
            toast.error('An error occurred while saving the quote'); 
          }
        }
        setRefresh(!refresh);
      };

  return (
    <>
    <div className="quote-card">
      <p className="quote-text">
        {quote}
      </p>
    </div>
    <div className='btn-box'>
        <button className='btn' onClick={handleSaveQuote}>Save to list</button>
    </div>

    <Saved refresh={refresh}/>
    <ToastContainer />
    </>
  );
};

export default Quote;
