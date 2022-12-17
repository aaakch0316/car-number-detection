const express = require("express");
const router = express.Router();
const connectDB = require('../middleware/mysql')
const axios = require('axios');

router.get("/carnumber", async function (req, res) {
  
  console.log("/test/model/carnumber")
  try{
  let {data: result} = await axios.get('http://127.0.0.1:8000/v1/live/customer-car')
  return res.json({success: true, ...result})
}catch (e) {
  console.log(e.message)
  res.json({success: false, message: e.message})
}
})


module.exports = router