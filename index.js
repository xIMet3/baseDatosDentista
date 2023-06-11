const express = require("express");
const db = require("./db");
const router = require("./router");
const roleController = require("./controllers/roleController");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});

app.use(express.json());

// Role
app.get('/role', roleController.getRole);
app.post('/role', roleController.postRole);
app.put('/role/:id', roleController.putRole);
app.delete('/role/:id', roleController.deleteRole);

// Users























