const mongoose = require('mongoose');
const express = require('express');
const app = express();

const db='mongodb+srv://rishav:rishav@cluster0.kdwte.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connetion Successful');
}).catch((err)=>console.log('No Connection'));
//Middleware

const middleware = (req,res,next) =>{
    console.log('Hello My Middleware');
    next();
}

app.get('/', (req, res) =>{
    res.send('Hello World From Server');
});

app.get('/about', middleware, (req, res) =>{
    res.send('About Page');
});

app.get('/contact', (req, res) =>{
    res.send('Contact Page');
});

app.get('/sign', (req, res) =>{
    res.send('Sign in Page');
});

app.listen(3000, () => {
    console.log('server is running');
})