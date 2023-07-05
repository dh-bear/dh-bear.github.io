const express = require('./node_modules/express');
const app = express();
const port = 3000;
const data = require('./data.json');

console.log(data);
document.getElementById("thesisButton").addEventListener("click", function(){
    var url = 'curl -X POST --url "https://api.retool.com/v1/workflows/101cbbd7-5263-49e9-80b7-c880befa97dc/startTrigger?workflowApiKey=retool_wk_016aa612d4594d8e9db2f70ed39eb23a"  -H Content-Type: application/json';
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });



/*app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});*/