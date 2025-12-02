import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


// create express app & choose port
const app = express();
const port = 3000;
let pollutionState = false;


// setup CORS to allow requests from any origin
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

// setup JSON & body Parser
app.use(bodyParser.json()); // parse json requests
app.use(bodyParser.urlencoded({ extended: false })); // parse url encoded requests

// hello world response
app.get('/', (req, res) => {
  res.send({ message: 'working' })
})

app.get('/pollution', (req, res) => {
  res.send({ pollutionState: pollutionState })
})


app.post('/pollute', (req, res) => {
pollutionState = true; //usually true
 res.send({pollutionState : pollutionState})
})

app.post('/clean', (req, res) => {
pollutionState = false;
 res.send({pollutionState: pollutionState}) // set the pollution based on if its clean or not
})

app.use(express.static('public'))


// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//app.use(express.static('public')){'public/assets/fish-png-1-dead.png' 
//'public/assets/fish-png-1.png'
//'public/assets/seagull-png-1-dead.png'
//'public/assets/shark-png-1-dead.png' 
//'public/assets/seagull-png-1.png' 
//'public/assets/shark-png-1.webp'}

//const path = require('path')
//app.use('/static', express.static(path.join(__dirname, 'public')));
// https://expressjs.com/en/starter/static-files.html
