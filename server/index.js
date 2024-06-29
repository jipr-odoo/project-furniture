const express = require('express')
const cors = require('cors')
// const db = require("./db");
const mysql = require('mysql')
const {getAllProduct} = require('./controllers/furnitureProductController');


const app = express();
app.use(express.json());
app.use(cors())


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "furnituredb"
});

app.get('/get', (req, res) => {
    return res.send(`<h1>Hello</h1>`)
})

app.get('/users', (req, res) => {
    const sql = "select * from furniturelist";

    db.query(sql, (err, data) => {
    if (err) {
        return res.json({ Error: "Error" });
    } else {
        return res.json(data);
    }
    });
})
app.get('/getAllProduct', getAllProduct);



app.listen(3030, () => {
    console.log("Running");
});


