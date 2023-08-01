const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const fs=require('fs');
const app = express();
app.use(bodyParser.json())
const port = 3000;



//task1 
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


//task2
function sumArrayofInteger(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }
    return arr.reduce((a, b) => a + b, 0);
  }
  
  app.post('/', (req, res) => {
    try {
      const sum = sumArrayofInteger(req.body.arr);
      return res.status(200).json({ sum });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });

  app.get('/readfile',(req,res)=>{
    let data=fs.readFileSync("./data.txt",'utf-8');
    return res.status(200).json({ wordCount:data.split('').length });

  })
  

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
