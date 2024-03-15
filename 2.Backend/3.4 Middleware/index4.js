import express from "express";
import { dirname }  from "path";
import { fileURLToPath } from "url";
import  bodyparser  from  "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.use(bodyparser.urlencoded({
extended:true,
}));

app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/public/index.html")
  });

  app.post("/submit",(req,res)=>{
    res.send(`<h1>Your band name is ${req.body["street"]+req.body["pet"]}</h1>`);
 });

app.listen(port,()=>{
 console.log(`Listening to the port ${port}`);
});


