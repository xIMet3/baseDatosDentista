const express = require("express");
const db = require("./db");
const usersController = require("./controllers/usersController");
const auth = require('./middleware/verifyToken');
const isAdmin = require("./middleware/isAdmin");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});

app.use(express.json());

// Register
app.post("/register", usersController.registerUser);

app.post("/login", usersController.loginUser);

// Ruta para obtener el perfil de usuario
app.get('/profile', auth, usersController.getProfile);

// Ruta para obtener todos los perfiles de usuario
app.get('/allProfiles', auth, isAdmin, usersController.getAllProfiles);

// Ruta para actualizar el perfil de usuario
//app.put('/profile', usersController.updateProfile);

// Vas a leer el token, con el auth middleware
// Luego vas a responder al usuario con su perfil.
// app.get('/profile', auth, usersController.loginUser)

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
