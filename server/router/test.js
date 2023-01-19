const express = require("express");
const router = express.Router();
const connectDB = require('../middleware/mysql.js');

// get ids
router.get("/", async function (req, res) {
    console.log("/visitors", req.query);
    const { aaa } = req.query
    try {
        connectDB.query('SELECT * from visitor', (error, rows) => {
            if (error) return res.json({ success: false, message: error });
            return res.json({ success: true, data: rows })
        });
    } catch (e) { return res.json({ success: false }) }
})

// get id
router.get("/:visitorId", async function (req, res) {
    console.log("/visitor", req.query);
    const { visitorId } = req.params
    console.log(visitorId)
    try {
        connectDB.query(`SELECT * from visitor WHERE id=${visitorId}`, (error, rows) => {
            if (error) return res.json({ success: false, message: error });
            return res.json({ success: true, data: rows })
        });
    } catch (e) { return res.json({ success: false }) }
})

//create
router.post("/", async function (req, res) {
    console.log("[POST] /")
    try {
        const { year, month, day } = req.body
        connectDB.query(`INSERT INTO visitor ( year, month, day ) VALUES ('${year}, '${month}, ${day}');`, (error, rows) => {
            if (error) return res.json({ success: false, message: error });
            return res.json({ success: true, data: rows })
        });
    } catch (e) { return res.json({ success: false, message: e.message }) }
})

// update
router.post("/update/:id", async function (req, res) {
    try {
        console.log("[POST] /update/:id")
        const sql = "UPDATE visitor SET ? WHERE id = " + req.params.id
        connectDB.query(sql, req.body, (error, rows) => {
            if (error) return res.json({ success: false, message: error });
            return res.json({ success: true, data: rows })
        });
    } catch (e) { return res.json({ success: false, message: e.message }) }
})

// delete
router.get('/delete/:id', (req, res) => {
    try {
        const sql = "DELETE FROM visitor WHERE id = ?";
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