const md5 = require('md5');
const userModel = require('../models/user');
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
  // 2.1 验证用户的输入
  // TODO
  // 验证邮箱和密码是否正确
  console.log(req.body.email)
  db.query(
    'select * from `users` where `email`=?',
    req.body.email,
    (err, result) => {
      if (err) {
        return res.send('服务器内部错误');
      };
      // 判断邮箱是否正确
      if (result.length <= 0) {
        // { code: 401, msg: '不存在' }
        return res.json({
          code: 401,
          msg: '邮箱地址不存在'
        })
      };
      // 判断密码是否正确
      const password = md5(req.body.password);
      if (password !== result[0].password) {
        return res.json({
          code: 401,
          msg: '密码错误'
        })
      };
      // 如果是ajax请求的话， 没办法使用res.redirect()
      // 成功
      res.json({
        code: 200,
        msg: '登陆成功'
      })

    }
  )
}
// 渲染注册页面
exports.showSignup = (req, res) => {
  res.render('signup.html')
}


// 处理注册
exports.handleSignup = (req, res) => {
  // 添加数据之前要做数据验证
  // TODO 验证数据是否输入

  // 验证邮箱是否重复
  userModel.getByEmail(req.body.email, (err, user) => {
    if (err) {
      return res.send('服务器内部错误');
    }
    userModel.getByNickname(req.body.nickname, (err, user) => {
      if (err) {
        return res.send('服务器内部错误');
      }
      // 插入用户
      req.body.createdAt = new Date();
      req.body.password = md5(req.body.password);
      userModel.createUser(req.body, (err, isOK) => {
        if (isOK) {
          res.redirect('/signin');
        } else {
          res.render('/signin', {
            msg: '注册失败'
          })
        }
      })
    })
  })
}
exports.handleSignout = (req, res) => {
  res.send('hello')
}