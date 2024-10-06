const Quote=require('../models/quotemodel');

const getQuote = async(req, res) => {
    res.send("Hello from server..");
}

const saveQuote = async (req, res) => {
    const { quote } = req.body;

    try {
        if (!quote) throw new Error("No quote to add!");

        const existingQuote = await Quote.findOne({ quote: quote },{ new: true }); 

        if (existingQuote) {
            return res.status(409).json({ message: 'Quote is already saved!' }); 
        }

        const newQuote = await Quote.create({ quote: quote }); 

        res.status(201).json({ message: 'Quote saved successfully!' });
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({ message: error.message });
    }
};

const getAllQuotes= async(req, res)=>{
    try{
        const allquotes=await Quote.find({}).sort({ createdAt: -1 });
        if (allquotes.length === 0) {
            return res.status(404).json({ message: "No quotes to show!" }); // Handle empty array case
        }

        return res.status(200).json({allquotes});
    }catch(error){
        console.log("Error: ", error.message);
        res.status(500).json({message: error.message});
    }
};

module.exports={getQuote, saveQuote, getAllQuotes};