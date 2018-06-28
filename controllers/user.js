const db = require('./db_helper');

// 1. 展示登陆页面

// 2 处理登陆逻辑

// 3. 展示注册页面

// 4. 处理注册逻辑

// 5. 推出

// 渲染登陆页面
exports.showSignin = (req, res) => {
  res.render('signin.html')
}
// 处理登陆页面
exports.handleSignin = (req, res) => {
  res.send('hello')
}
// 渲染注册页面
exports.showSignup = (req, res) => {
  res.render('signup.html')
}
// 处理注册
exports.handleSignup = (req, res) => {
  res.send('hello')
}
exports.handleSignout = (req, res) => {
  res.send('hello')
}