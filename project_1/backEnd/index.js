import 'dotenv/config';
import Express from "express";

const app = Express();
const port = process.env.PORT || 3000;

const jokes = [
      {"id": 1, "name": "Joke 1", "content": "This is Joke 1"},
      {"id": 2, "name": "Joke 2", "content": "This is Joke 2"},
      {"id": 3, "name": "Joke 3", "content": "This is Joke 3"},
      {"id": 4, "name": "Joke 4", "content": "This is Joke 4"},
      {"id": 5, "name": "Joke 5", "content": "This is Joke 5"},
    ] ;
  

app.get("/", (req, res) =>{
    res.send("Hello World I am Bhaanoo Vishwakarma");
});

app.get("/api/jokes", (req, res) => {
    res.json(jokes)
})


app.listen(port, ()=>{
    console.log(`Listening at Port Number ${port}`);
})