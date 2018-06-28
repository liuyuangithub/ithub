const express = require('express');
const router = require('./routes/router');
const app = express();

// 注册路由
app.use(router);
// 监听端口
const PORT = 3000;
app.listen(PORT, () => {
  console.log('success');
})

/* app.get('/', (req, res) => {
  res.send('Hello');
  /* res.send({
    "name": "ly",
    "age": 25
  }); */
  /* res.json({
    "name": "ly",
    "age": 24
  }); */
}) * /