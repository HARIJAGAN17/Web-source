import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//making css linking
app.use(express.static("public"));
app.use(bodyParser.urlencoded(
  {extended:true}
))
//rendering main page
app.get("/",(req,res)=>{
  res.render("index.ejs");
});


app.post("/", (req, res) => {
  console.log(req.body); // Logging the form data to the console
  res.redirect("/"); // Sending a response back to the client
});

app.listen(port,()=>{
 console.log("Listening to the port:"+port);
});