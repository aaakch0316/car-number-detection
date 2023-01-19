const express = require("express");
const router = express.Router();
const connectDB = require('../middleware/mysql.js');

// get ids
router.get("/", async function (req, res) {
  console.log("/user", req.query);
  // const { aaa } = req.query
  try {
    connectDB.query('SELECT * from user', (error, rows) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: rows })
    });
  } catch (e) { return res.json({ success: false }) }
})

// get id
router.get("/:userId", async function (req, res) {
  console.log("/user", req.query);
  const { userId } = req.params
  try {
    connectDB.query(`SELECT * from user WHERE id=${userId}`, (error, rows) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: rows })
    });
  } catch (e) { return res.json({ success: false }) }
})

// delete
router.get('/delete/:id', (req, res) => {
  try {
    const sql = "DELETE FROM user WHERE id = ?";
    connectDB.query(sql, [req.params.id], (error, rows) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: rows })
    })
  } catch (e) { return res.json({ success: false, message: e.message }) }
})

module.exports = router;