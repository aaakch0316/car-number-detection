const express = require("express");
const router = express.Router();
const connectDB = require('../middleware/mysql.js');

// get ids
router.get("/", async function (req, res) {
  console.log("/customers", req.query);
  const { aaa } = req.query
  try {
    connectDB.query('SELECT * from customer', (error, rows) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: rows })
    });
  } catch (e) { return res.json({ success: false }) }
})

// get id
router.get("/:customerId", async function (req, res) {
  console.log("/customer", req.query);
  const { customerId } = req.params
  try {
    connectDB.query(`SELECT * from customer WHERE id=${customerId}`, (error, rows) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: rows })
    });
  } catch (e) { return res.json({ success: false }) }
})

//create
router.post("/", async function (req, res) {
  console.log("[POST] /")
  try {
    const { name, type, carNumber } = req.body
    connectDB.query(`INSERT INTO customer ( name, type, car_number ) VALUES ('${name}', ${type}, '${carNumber}');`, (error, rows) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: rows })
    });
  } catch (e) { return res.json({ success: false, message: e.message }) }
})

// update
router.post("/update/:id", async function (req, res) {
  try {
    console.log("[POST] /update/:id")
    const sql = "UPDATE customer SET ? WHERE id = " + req.params.id
    connectDB.query(sql, req.body, (error, rows) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: rows })
    });
  } catch (e) { return res.json({ success: false, message: e.message }) }
})

// delete
router.get('/delete/:id', (req, res) => {
  try {
    const sql = "DELETE FROM customer WHERE id = ?";
    connectDB.query(sql, [req.params.id], (error, rows) => {
      if (error) return res.json({ success: false, message: error });
      return res.json({ success: true, data: rows })
    })
  } catch (e) { return res.json({ success: false, message: e.message }) }
})

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