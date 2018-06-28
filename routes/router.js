// route 路由规则
// router 路由对象
const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
const categoryCtrl = require('../controllers/category');
const topicCtrl = require('../controllers/top');
const userCtrl = require('../controllers/user');

// 渲染首页
router.get('/', indexCtrl.showIndex)

router
  .get('/signin', (req, res) => {
    res.send('signin')
  })
  .post('./signin', (req, res) => {
    res.send('signin')
  })



module.exports = router;
