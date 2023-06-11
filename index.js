const express = require("express");
const db = require("./db");
const router = require("./router");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});

app.use(express.json());


app.get('/role', (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Get All Roles"
        }
    )
});

app.post('/role', (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Create roles"
        }
    )
});

app.put('/role', (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Update Roles"
        }
    )
});

app.delete('/role', (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Delete Roles"
        }
    )
});





















