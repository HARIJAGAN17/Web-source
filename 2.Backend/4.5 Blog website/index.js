import express from "express";


const app = express();
const port = 3000;

//making css linking
app.use(express.static("public"));

//rendering main page
app.get("/",(req,res)=>{
  res.render("index.ejs");
});



app.listen(port,()=>{
 console.log("Listening to the port:"+port);
});