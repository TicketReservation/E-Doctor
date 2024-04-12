// authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../database-mysql/index');

exports.register = async (req, res) => {
    try {
        const {UserType, Username, Email, Password,PhoneNumber,FirstName,LastName,Speciality,imageUrl} = req.body;
        if (!Password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);
        const user = await User.create({ UserType ,
            Username, Email, Password: hashedPassword,PhoneNumber,FirstName,LastName,Speciality,imageUrl});
        res.status(201).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Registration failed' });
    }
};

exports.login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const user = await User.findOne({ where: { Email:Email} });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
                if (!Password || ! user.Password) {
            console.log('password',Password);
            return res.status(400).json({ error: 'Password is required' });
        }

        const passwordMatch = await bcrypt.compare(Password, user.Password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
};
