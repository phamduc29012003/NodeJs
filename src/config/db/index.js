const mongoose = require('mongoose')

async function connect (){
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/f8_education_dev',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log('connect successfully ');
    } catch (error) {
        console.log(error)
        console.log('connect failure !');
        
    }
}

module.exports = { connect }