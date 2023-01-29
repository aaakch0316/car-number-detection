const express = require("express");
const router = express.Router();
const connectDB = require('../middleware/mysql.js');

// get ids
router.get("/", async function (req, res) {
  console.log("/visitor", req.query);
  const { car_number } = req.query
  try {
    connectDB.query('SELECT * from visitor', (error, rows) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: rows })
    });
  } catch (e) { return res.json({ success: false }) }
})


module.exports = router;
// get ids
router.get("/search", async function (req, res) {
  console.log("/visitor", req.query);
  const { car_number } = req.params
  try {
    // connectDB.query('SELECT * from visitor', (error, rows) => {

    connectDB.query(`SELECT * from visitor WHERE car_number=${car_number}`, (error, row) => {
      // connectDB.query(`SELECT * from visitor WHERE car_number="59버0596"`, (error, row) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: row })
    });
  } catch (e) { return res.json({ success: false }) }
})


module.exports = router;