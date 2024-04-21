// authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.register = async (req, res) => {
    try {
        const { UserType, Username, Email, Password, PhoneNumber, FirstName, LastName, Speciality, imageUrl } = req.body;
        if (!Password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);
        const user = await prisma.user.create({
            data: {
                UserType,
                Username,
                Email,
                Password: hashedPassword,
                PhoneNumber,
                FirstName,
                LastName,
                Speciality,
                imageUrl
            }
        });
        res.status(201).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Registration failed' });
    }
};


exports.login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const user = await prisma.user.findUnique({ where: { Email:Email } });
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        if (!Password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const passwordMatch = await bcrypt.compare(Password, user.Password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id,UserType:user.UserType }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
};
exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json({ users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};