import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user:"postgres",
  database:"secrets",
  password:"Iam22@33",
  host:"localhost",
  port:5432,
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {

  const email  = req.body.username;
  const password  = req.body.password;

  try {
   const check = await db.query("SELECT * FROM users WHERE email = ($1)",[email]);

   if(check.rows.length>0)
   {
    res.render("register.ejs",{message:"EMAIL ALREADY EXISTS"});
   }
   else
   {
    await db.query("INSERT INTO users(email,password) VALUES($1,$2)",[email,password]);
    res.render("secrets.ejs");
   }
    
  } catch (error) {
    res.send(error);
  }

});

app.post("/login", async (req, res) => {

  const email  = req.body.username;
  const password  = req.body.password;

  try {
    const currEmail = await db.query("SELECT * FROM users WHERE email = ($1)",[email]);

    if(currEmail.rows.length>0)
    {
      const currpass = await db.query("SELECT password FROM users WHERE email = ($1)",[email]);
      console.log(currpass);
      if(currpass.rows[0].password === password)
      {
        res.render("secrets.ejs");
      }
      else
      {
        res.render("login.ejs",{message:"INVALID PASSWORD try again"});
      }
    }
    
    else
    {
      res.render("login.ejs",{message:"User not exist please register"});
    }
  } catch (error) {
    res.send(error);
  }


});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
