import express from "express";
const app = express();
const PORT = 3000;

//middleware
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/services', (req, res)=>{
    res.render('services')
})

app.get('/contact', (req, res)=>{
    res.render('contact')
})






//server listening
app.listen(PORT, ()=>{
    console.log("Server listening at PORT 3000");
})