import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 4000;

const jokes = [
    {"id": 1, "name": "Joke 1", "content": "This is Joke 1"},
    {"id": 2, "name": "Joke 2", "content": "This is Joke 2"},
    {"id": 3, "name": "Joke 3", "content": "This is Joke 3"},
    {"id": 4, "name": "Joke 4", "content": "This is Joke 4"},
    {"id": 5, "name": "Joke 5", "content": "This is Joke 5"},
  ] ;

app.get("/", (req, res) => {
    res.send("Hello World from Baba Vishwakarma");
});

app.get("/api/jokes", (req, res) => {
    res.json(jokes);
});

app.get("/about", (req, res) => {
    res.send("Hello from ABOUT page of BABA Vishwakarma");
});

app.listen(port, () => {
    console.log(`Listen on PORT ${port}`);
});