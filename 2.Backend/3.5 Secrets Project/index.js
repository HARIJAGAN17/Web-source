//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import  {dirname} from "path";
import {fileURLToPath} from "url";

import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var pass = "";

app.use(bodyParser.urlencoded(
    {
        extended:true,
    }
))


function getBody(req,res,next)
{
    pass = req.body["password"];
    next();
    
}

app.use(getBody);

app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",(req,res)=>{

    if(pass==="ILOVEprogramming")
    {res.sendFile(__dirname+"/Public/secret.html");}
    else
    {
        res.redirect('/');
    }
    
});

app.listen(port,()=>{

    console.log(`Listening to the port:${port}`);
});


