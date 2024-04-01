import express from "express";
import bodyParser from "body-parser";
import pg from  "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client(
  {
    user:"postgres",
    host:"localhost",
    password:"Iam22@33",
    database:"permalist",
    port:5432,
  }
);

db.connect();



// let items = [
//   { id: 1, title: "Buy milk" },
//   { id: 2, title: "Finish homework" },
// ];

async function getTitle(){
  let items = [];
   const result = await db.query("SELECT id,title FROM items");
   result.rows.forEach((item)=>{

      const c1 = {
        id: item.id,
        title : item.title,
      }
      items.push(c1);
   })
   return items;
};


app.get("/", async (req, res) => {

const content = await getTitle();
console.log(content);
res.render("index.ejs", {
  listTitle: "Today",
  listItems: content,
});
});


app.post("/add", (req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", (req, res) => {});

app.post("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
