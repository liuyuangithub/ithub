// route 路由规则
// router 路由对象
const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
const categoryCtrl = require('../controllers/category');
const topicCtrl = require('../controllers/topic');
const userCtrl = require('../controllers/user');

// 渲染首页

// 1.index.js 不需要登陆展示的功能
router.get('/', indexCtrl.showIndex)

// 2 user.js 登陆  注册 退出
router
  // 登陆请求
  .get('/signin', userCtrl.showSignin)
  .post('/signin', userCtrl.handleSignin)
  // 注册页面
  .get('/signup', userCtrl.showSignup)
  .post('/signup', userCtrl.handleSignup)
  // 推出请求
  .post('/signout', userCtrl.handleSignout)

/* router
  .get('/topic/create', )
 */

module.exports = router;
