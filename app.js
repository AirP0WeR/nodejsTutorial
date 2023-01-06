import express from "express";
import url from 'url';
import path from 'path';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

app.use('/public', express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
    // res.send("Hello World!");
});

app.get("/example", (req, res) => {
    res.send("hitting example rout!");
});

app.get('/example/:name/:age', (req, res) =>{
    console.log(req.params);
    console.log(req.query);
       
    res.send(req.params.name + " : " + req.params.age);
});


app.listen(port, ()=> {
    console.log("Server is running on port 3000");
});