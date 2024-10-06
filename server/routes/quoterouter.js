const express=require('express');
const { getQuote, saveQuote, getAllQuotes } = require('../controllers/quotecontroller');

const router=express.Router();

router.get('/', getQuote);

router.post('/quote/save', saveQuote)

router.get('/quotes/all', getAllQuotes)

module.exports=router;