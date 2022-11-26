const express = require("express");
const router = express.Router();
const connectDB = require('../middleware/mysql.js');

router.get("/", async function (req, res) {
  console.log("/cars", req.query);
  const {aaa} = req.query
  try {
  connectDB.query('SELECT * from customer', (error, rows) => {
    if (error) return res.json({success: false, message: error});
    return res.json({success: true, data: rows})
  });
  } catch (e) {return res.json({success: false})}
})

router.get("/:carId", async function (req, res) {
  console.log("/car", req.query);
  const {carId} = req.params
  try {
  connectDB.query(`SELECT * from customer WHERE id=${carId}`, (error, rows) => {
    if (error) return res.json({success: false, message: error});
    return res.json({success: true, data: rows})
  });
  } catch (e) {return res.json({success: false})}
})

// create
// const sql = "INSERT INTO users(name,email) VALUES('kevin','kevin@test.com')"
// con.query(sql,function(err, result, fields){
//   if (err) throw err;
//   console.log(result)
// })
// const sql = "INSERT INTO users(name,email) VALUES(?,?)"
// con.query(sql,['Jack','jack@exsample.co.jp'],function(err, result, fields){
//   if (err) throw err;
//   console.log(result)
// })

// update
// app.post('/update/:id',(req,res)=>{
//   const sql = "UPDATE users SET ? WHERE id = " + req.params.id;
//   con.query(sql,req.body,function (err, result, fields) {  
//     if (err) throw err;
//     console.log(result);
//     res.redirect('/');
//     });
// });

// delete
// app.get('/delete/:id',(req,res)=>{
//   const sql = "DELETE FROM users WHERE id = ?";
//   con.query(sql,[req.params.id],function(err,result,fields){
//     if (err) throw err;
//     console.log(result)
//     res.redirect('/');
//   })
// });

module.exports = router;