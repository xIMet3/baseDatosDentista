const express = require("express");
const db = require("./db");
const usersController = require("./controllers/usersController"); 

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});

app.use(express.json());

// Register
app.post('/register', usersController.registerUser);
 app.post('/login', usersController.loginUser);

// Role
// app.get('/role', roleController.getRole);
// app.post('/role', roleController.postRole);
// app.put('/role/:id', roleController.putRole);
// app.delete('/role/:id', roleController.deleteRole);

// Users
// app.get('/users', usersController.getUsers);
// app.post('/users', usersController.postUsers);
// app.put('/users/:id', usersController.putUsers);
// app.delete('/users/:id', usersController.deleteUsers);

// // Appointments
// app.get('/appointments', appointmentsController.getAppointments);
// app.post('/appointments', appointmentsController.postAppointments);
// app.put('/appointments/:id', appointmentsController.putAppointments);
// app.delete('/appointments/:id', appointmentsController.deleteAppointments);

// Services
// app.get('/services', servicesController.getServices);
// app.post('/services', servicesController.postServices);
// app.put('/services/:id', servicesController.putServices);
// app.delete('/services/:id', servicesController.deleteServices);



















