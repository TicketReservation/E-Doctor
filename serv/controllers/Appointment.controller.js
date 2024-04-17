// const { Appointment } = require('../database-mysql/index.prisma');
const getAllAppointment = async (req, res) => {
    try {
        const appointments = await prisma.appointment.findMany();
        res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching Appointments:', error);
        res.status(500).json({ error: 'Failed to fetch Appointments' });
    }
}

const getAppointmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await prisma.appointment.findUnique({ where: { id: parseInt(id) } });
        if (appointment) {
            res.status(200).json(appointment);
        } else {
            res.status(404).json({ error: 'Appointment not found' });
        }
    } catch (error) {
        console.error('Error fetching Appointment:', error);
        res.status(500).json({ error: 'Failed to fetch Appointment' });
    }
}

const getAllAppointmentOfdoctor = async (req, res) => {
    try {
        const { DoctorId } = req.params;
        if (!DoctorId) {
            return res.status(400).json({ error: 'DoctorId is required' });
        }
        const appointments = await prisma.appointment.findMany({ where: { DoctorId: parseInt(DoctorId) } });
        res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching Appointments:', error);
        res.status(500).json({ error: 'Failed to fetch Appointments' });
    }
}


const createAppointment = async (req, res) => {
    try {
        const body = req.body;
        const appointment = await prisma.appointment.create({ data: body });
        res.status(201).json(appointment);
    } catch (error) {
        console.error('Error creating Appointment:', error);
        res.status(500).json({ error: 'Failed to create Appointment' });
    }
}

const updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const appointment = await prisma.appointment.findUnique({ where: { id: parseInt(id) } });
        if (appointment) {
            await prisma.appointment.update({ where: { id: parseInt(id) }, data: body });
            res.status(200).json(appointment);
        } else {
            res.status(404).json({ error: 'Appointment not found' });
        }
    } catch (error) {
        console.error('Error updating Appointment:', error);
        res.status(500).json({ error: 'Failed to update Appointment' });
    }
}

const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await prisma.appointment.findUnique({ where: { id: parseInt(id) } });
        if (appointment) {
            await prisma.appointment.delete({ where: { id: parseInt(id) } });
            res.status(200).json({ message: 'Appointment deleted successfully' });
        } else {
            res.status(404).json({ error: 'Appointment not found' });
        }
    } catch (error) {
        console.error('Error deleting Appointment:', error);
        res.status(500).json({ error: 'Failed to delete Appointment' });
    }
}

module.exports = {
    getAllAppointment,
    createAppointment,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getAllAppointmentOfdoctor
}