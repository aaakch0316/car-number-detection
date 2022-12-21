const express = require("express");
const router = express.Router();
const connectDB = require('../middleware/mysql.js');
const bcrypt = require('bcryptjs')

function pwEncode(pw) {
  return bcrypt.hashSync(pw, bcrypt.genSaltSync(10));
}

// get ids
router.post("/login", async function (req, res) {
  try {
    console.log('/login')
    const { email, pw } = req.body
    if (!(email && pw)) { return res.json({ success: false, message: '빈값을 채워주세요.' }) }
    connectDB.query(`SELECT * from user WHERE email='${email}'`, (error, row) => {
      if (error) return res.json({ success: false, message: error });
      if (!row[0] || !bcrypt.compareSync(pw, row[0].pw)) {
        return res.json({
          success: false,
          message: 'Invalid email or password.',
        });
      }
      return res.json({
        success: true,
        message: 'success login'
      })
    });
  } catch (e) { return res.json({ success: false }) }
})


router.post("/register", async function (req, res) {
  try {
    console.log('/register')
    const { name, email, pw } = req.body
    if (!(name && email && pw)) { return res.json({ success: false, message: '빈값을 채워주세요.' }) }

    connectDB.query(`SELECT * from user WHERE name='${name}'`, (error, row) => {
      if (error) return res.json({ success: false, message: error });
      if (row.length !== 0) { return res.json({ success: false, message: '가입된 유저입니다.' }) }

      connectDB.query(`INSERT INTO user ( name, email, pw ) VALUES ('${name}', '${email}', '${pwEncode(pw)}');`, (error, rows) => {
        if (error) return res.json({ success: false, message: error });
        return res.json({ success: true, message: 'success Signup' })
      });
    });
  } catch (e) { return res.json({ success: false, message: e.message }) }
})


module.exports = router;