import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var contentlist =[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { contentList: contentlist }); // Pass contentlist to index.ejs
});

app.post("/submit", (req, res) => {
  const content = req.body["postContent"];
  contentlist.push(content);
  res.render("index.ejs", { contentList: contentlist }); // Pass contentlist to index.ejs
});

app.listen(port, () => {
  console.log("Listening to the port:" + port);
});

