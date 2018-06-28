// 1. 展示登陆页面

// 2 处理登陆逻辑

// 3. 展示注册页面

// 4. 处理注册逻辑

// 5. 推出

exports.showSignin = (req, res) => {
  res.render('signin.html')
}
exports.handleSignin = (req, res) => {
  res.send('hello')
}
exports.showSignup = (req, res) => {
  res.render('signup.html')
}
exports.handleSignup = (req, res) => {
  res.send('hello')
}
exports.handleSignout = (req, res) => {
  res.send('hello')
}