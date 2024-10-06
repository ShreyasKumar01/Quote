const mongoose=require('mongoose');

const Connection = () =>{
    const url=process.env.MONGO_URL
    mongoose.connect(url);

    mongoose.connection.on('connected', ()=>{
        console.log('database connected!');
    });

    mongoose.connection.on('disconnected', ()=>{
        console.log('database disconnected!');
    });

    mongoose.connection.on('error', ()=>{
        console.log('error occured!');
    });
}

module.exports={Connection};