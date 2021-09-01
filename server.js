const express = require("express");

const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))
//Sayfa

app.get("/", (req,res) => {
 var testmesaj = "Learning Front-End"
  res.render("index",{
    mesaj: testmesaj
      
  });
  
  });



app.get("/github", (req,res) => {
  res.redirect("https://github.com/Nicat-dcw");
  });








const listener = app.listen(process.env.PORT, () => {
  console.log("Sunucu Portu :  " + listener.address().port);
});