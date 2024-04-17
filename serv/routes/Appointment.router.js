
const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/Appointment.controller');

router.get('/', AppointmentController.getAllAppointment);

router.get('/:id', AppointmentController.getAppointmentById);

router.get('/doctor/:DoctorId', AppointmentController.getAllAppointmentOfdoctor);

router.post('/', AppointmentController.createAppointment);

router.put('/:id', AppointmentController.updateAppointment);

router.delete('/:id', AppointmentController.deleteAppointment);

module.exports = router;
