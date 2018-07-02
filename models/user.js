const db = require('./db_helper')
// 增加一个用户
// 传入用户对象
exports.createUser = (user, callback) => {
  db.query(
    'insert into `users` set ?',
    user,
    (err, result) => {
      if (err) {
        return callback(err);
      }
      // callback(null, result);
      if (result.affectedRows > 0) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    }
  )
}
// 根据email查询用户
exports.getByEmail = (email, callback) => {
  db.query(
    'select * from `users` where `email`=?',
    email,
    (err, result) => {
      if (err) {
        return callback(err);
      }
      if (result.length > 0) {
        // email要求是唯一的，不能重复
        // 所以根据email只能查询到一个用户信息
        callback(null, result[0]);
      } else {
        callback(null, null);
      }
    }
  )
}
// 根据nickname查询用户
exports.getByNickname = (nickname, callback) => {
  db.query(
    'select * from `users` where `nickname` =?',
    nickname,
    (err, result) => {
      if (err) {
        return callback(err);
      }
      if (result.length > 0) {
        // nickname要求是唯一的，不能重复
        // 所以根据email只能查询到一个用户信息
        callback(null, result[0]);
      } else {
        callback(null, null);
      }
    }
  )
}