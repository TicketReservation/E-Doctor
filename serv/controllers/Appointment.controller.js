const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllAppointment = async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany();
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
}

const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await prisma.appointment.findUnique({ where: { id } });
    if (appointment) {
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (error) {
    console.error('Error fetching appointment:', error);
    res.status(500).json({ error: 'Failed to fetch appointment' });
  }
}

const getAllAppointmentOfDoctor = async (req, res) => {
  try {
    const { DoctorId } = req.params;
    if (!DoctorId) {
      return res.status(400).json({ error: 'DoctorId is required' });
    }
    const appointments = await prisma.appointment.findMany({ where: { DoctorId } });
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
}

const createAppointment = async (req, res) => {
    try {
      const body = req.body;
      const user = await prisma.user.findUnique({ where: { id: body.User } });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const appointment = await prisma.appointment.create({
        data: {
          AppointmentTime: body.AppointmentTime,
          Status: body.Status,
          PaymentStatus: body.PaymentStatus,
          Department: body.Department,
          User: {
            connect: { id: user.id },
          },
        },
      });
  
      res.status(201).json(appointment);
    } catch (error) {
      console.error('Error creating appointment:', error);
      res.status(500).json({ error: 'Failed to create appointment' });
    }
  }

const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const appointment = await prisma.appointment.findUnique({ where: { id } });
    if (appointment) {
      await prisma.appointment.update({ where: { id }, data: body });
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({ error: 'Failed to update appointment' });
  }
}

const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await prisma.appointment.findUnique({ where: { id } });
    if (appointment) {
      await prisma.appointment.delete({ where: { id } });
      res.status(200).json({ message: 'Appointment deleted successfully' });
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ error: 'Failed to delete appointment' });
  }
}

module.exports = {
  getAllAppointment,
  createAppointment,
 getAppointmentById,
  updateAppointment,
  deleteAppointment,
  getAllAppointmentOfDoctor
};