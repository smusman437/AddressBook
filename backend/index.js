const sql = require("mssql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function calldb() {
  try {
    var config = {
      server: "localhost",
      user: "sa",
      password: "sahibzada123",
      database: "addressbook",
    };

    await sql.connect(
      `mssql://${config.user}:${config.password}@${config.server}/${config.database}`
    );
  } catch (err) {
    // ... error checks
    console.log(err);
  }
}
calldb();

app.get("/", async function (req, res) {
  try {
    const result = await sql.query`select * from users`;
    // console.log("result", result.recordset);
    res.send(result.recordset);
  } catch (err) {
    // ... error checks
    console.log(err);
  }
});

app.delete("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    await sql.query(`delete from users where id=${id}`);
    res.send("successfully deleted");
  } catch (error) {
    // ... error checks
    console.log(err);
  }
});

app.post("/", async function (req, res) {
  try {
    const { name, email } = req.body;

    await sql.query(
      `insert into users (name,email) values ('${name}','${email}')`
    );
    res.send("Successfully new user Added");
  } catch (error) {}
});

app.post("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    await sql.query(
      `update  users set name='${name}',email='${email}' where id=${id}`
    );
    res.send("Successfully updated..");
  } catch (error) {}
});

app.listen(5000);
