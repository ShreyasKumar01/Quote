const express=require('express');
const dotenv=require('dotenv');
const { Connection } = require('./Connection');
const Routes=require('./routes/quoterouter');
const cors=require('cors');

dotenv.config();

const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use('/', Routes);

Connection();

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
})