


let envFile;

if (process.env.NODE_ENV === "production") {
    envFile = ".env.production"
} else if (process.env.NODE_ENV === "local") {
    envFile = ".env.local"
} 
require("dotenv").config({ path: '.env.local' });


const express = require("express");
const app = express();

const cors = require("cors");
const https = require("https");
const http = require("http");

app.use(cors());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3005');
  console.log('req.headers.origin')
  const allowedOrigins = ["*"];
  const origin = req.get('origin')
  const host = req.get('host')
  // console.log('origin', origin)
  // console.log('host',host)
  // req.headers["x-forwarded-for"] || req.connection.remoteAddress
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(express.json()).use(express.urlencoded());


// connecti mysql
// const mysql = require('mysql')
// const dbconfig = require('./config/mysql.js')
// const connectDB = mysql.createConnection(dbconfig)



app.use("/ping", async (req, res) => {
  console.log("============ pong ============");
  res.json({ response: "pong" });
});

app.use("/dbtest", async (req, res) => {
  const connectDB = require('./middleware/mysql.js')
  console.log('API : db-test')
  connectDB.query('SELECT * from customer', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
})

app.use("/car", require("./router/car"));
app.use("/test/model", require("./router/model"));
app.use("/customer", require("./router/customer"));
app.use("/auth", require("./router/auth"));
// app.use("/user", require("./router/user"));
// app.use("/visitor", require("./router/visitor"));
// app.use("/valet", require("./router/valet"));

app.get("/", (req, res) => {
  return res.end();
});


const http_port = process.env.HTTP_PORT || 3005;
const https_port = process.env.HTTPS_PORT || 3443;


http.createServer(app).listen(http_port, async () => {
  console.log("express http port", http_port);
});

// if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'production') {
//     var options = {
//         key: fs.readFileSync('./keys/' + process.env.SSL_KEY),
//         cert: fs.readFileSync('./keys/' + process.env.SSL_CRT)
//     };
//     https.createServer(options, app).listen(https_port, async () => {
//         console.log(process.env.GPU_FIREBASE)
//         console.log("express https port", https_port);
//     });
// }

