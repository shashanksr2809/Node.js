const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const collection = require('./mongodb')
const mongoose = require('mongoose')


app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost:27017/Project")
.then(()=>{
    console.log("DB is connected");
})
.catch(()=>{
    console.log("DB is nct connected");
})


app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

app.get('/home', (req, res) => {
  const filePath = path.join(__dirname, 'login.html');
  res.sendFile(filePath);
});

app.post('/home', async (req, res) => {
  const data = {
      name: req.body.name,
      password: req.body.password
  };
  const newData = new collection(data);
  await newData.save();
  res.redirect('/login.html');
});
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
