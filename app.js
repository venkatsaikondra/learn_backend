const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); 

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
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
