import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world",
  password:"Iam22@33",
  port:5432
})


db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visted");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await checkVisisted();
  res.render("index.ejs",{countries:result, total: result.length})
});

app.post("/add", async (req, res) => {
  const country_name = req.body.country;
  try {
    const result = await db.query("SELECT country_code from countries where country_name = $1", [country_name]);
    if (result.rows.length != 0) {
      try {
        await db.query("INSERT INTO visted (country_code) VALUES($1)", [result.rows[0].country_code]);
        res.redirect("/");
      } catch (error) {
        const countries = await checkVisisted();
        res.render("index.ejs", { countries: countries, total: countries.length, error: "Already visited the country" });
      }
    } else {
      throw new Error("Country not exist please try again");
    }
  } catch (error) {
    const countries = await checkVisisted();
    res.render("index.ejs", { countries: countries, total: countries.length, error: error.message });
  }
});

  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
