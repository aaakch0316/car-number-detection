const express = require("express");
const router = express.Router();
const connectDB = require('../middleware/mysql.js');

// get ids
router.get("/", async function (req, res) {
  console.log("/employees", req.query);
  // const { aaa } = req.query
  try {
    connectDB.query('SELECT * from employees', (error, rows) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: rows })
    });
  } catch (e) { return res.json({ success: false }) }
})


module.exports = router;