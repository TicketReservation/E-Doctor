const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const getSpeciality = async (req, res) => {
    try {
        const getSpeciality = await prisma.speciality.findMany();
        res.status(200).json(getSpeciality);
    } catch (error) {
        console.error('Error fetching speciality:', error);
        res.status(500).json({ error: 'Failed to fetch speciality' });
    }
}
// const 
module.exports={
    getSpeciality
}