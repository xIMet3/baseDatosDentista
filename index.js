const express = require("express");
const db = require("./db");
const usersController = require("./controllers/usersController");
const auth = require("./middleware/verifyToken");
const isAdmin = require("./middleware/isAdmin");
const appointmentController = require("./controllers/appointmentController");
const isDoctor = require("./middleware/isDoctor");

const cors = require("cors");
const treatmentsController = require("./controllers/treatmentController");

const app = express();

const PORT = 3000;
db.then(() => {
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});
})


app.use(express.json());
app.use(cors());

// Rutas
// Register
app.post("/register", usersController.registerUser);
// Login
app.post("/login", usersController.loginUser);


// Ruta para obtener el perfil de usuario
app.get("/profile", auth, usersController.getProfile);

// Ruta para obtener todos los perfiles de usuario
app.get("/allProfiles", auth, isAdmin, usersController.getAllProfiles);

// Ruta para actualizar el perfil de usuario
app.put("/updateProfile", auth, usersController.updateProfile);

// Ruta para crear citas
app.post("/newAppointment", auth, appointmentController.createAppointment);

// Ruta para obtener tus citas
app.get("/allAppointments", auth, appointmentController.getAllAppointments);

// Ruta para modificar citas
app.put("/updateAppointment/:id", auth, appointmentController.updateAppointment);

// Ruta para eliminar citas
app.delete("/deleteAppointment/:id", auth, appointmentController.deleteAppointment);

// Ruta para ver todas las citas como doctor
app.get("/appointmentsByDoctor", auth, isDoctor, appointmentController.getAllAppointmentsDoctor);

// Ruta para crear un tratamiento
app.post("/treatmentCreate",auth, isAdmin, treatmentsController.createTreatment);

// Ruta para ver todos los tratamientos como admin
app.get("/allTreatments", auth, isAdmin, treatmentsController.getAllTreatments);

// Ruta para actualizar un tratamiento
app.put("/updateTreatment/:id", auth, isAdmin, treatmentsController.updateTreatment);

// Ruta para eliminar un tratamiento
app.delete("/deleteTreatment/:id", auth, isAdmin, treatmentsController.deleteTreatment);
