const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const userModel=require('./models/user');
const dbConnection=require('./config/db');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); 

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/register',(req,res)=>{
    res.render('register');
});
app.post('/register',async (req,res)=>{
    const {username,email,password}=req.body;
    const newUser=await userModel.create({username:username,email:email,password:password});
    res.send(newUser);
});
app.get('/about', (req, res) => {
    res.send('About Us Page');
});

app.post('/get-form-data', (req, res) => {
    console.log(req.body);   
    res.send('Form Data Received');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
