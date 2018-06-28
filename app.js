const express = require('express');
const app = express();

// 监听端口
const PORT = 3000;
app.listen(PORT, () => {
  console.log('success');
})

app.get('/', (req, res) => {
  res.send('Hello');
  /* res.send({
    "name": "ly",
    "age": 25
  }); */
  /* res.json({
    "name": "ly",
    "age": 24
  }); */
})