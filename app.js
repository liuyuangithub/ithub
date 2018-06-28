// app.js 的作用
// 程序入口
// 负责：1 配置 2 监听端口
const express = require('express');
// 导入处理模板的模块
const expressArtTemplate = require('express-art-template');
const router = require('./routes/router');
const app = express();
// 注册路由
app.use(router);
// 处理静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'))
// 配置模板引擎
app.engine('html', expressArtTemplate);
// 监听端口
const PORT = 8080;
app.listen(PORT, () => {
  console.log('success');
})
/* app.get('/', (req, res) => {
  res.send('Hello');
  res.send({
    "name": "ly",
    "age": 25
  });
  res.json({
    "name": "ly",
    "age": 24
  });
})  */