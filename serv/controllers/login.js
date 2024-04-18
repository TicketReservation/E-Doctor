const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.register = async (req, res) => {
  const {Username,UserType, Email,Password, PhoneNumber, FirstName, LastName, specialityId, imageUrl } = req.body;
  try {
        if (UserType==='doctor'){
  console.log("hello")
        if (!Password) {
          return res.status(400).json({ error: 'Password is required' });
        }
  
        const hashedPassword = await bcrypt.hash(Password, 10);
        const doctor = await prisma.doctor.create({
        });
        const user = await prisma.user.create({
          data: {doctorId:doctor.id, Email, Password: hashedPassword, PhoneNumber, FirstName, LastName, imageUrl,UserType:"doctor" ,specialityId,Username},
        });
  
      return  res.status(201).json(user );
      }else{

        if (!Password) {
          return res.status(400).json({ error: 'Password is required' });
        }
        const hashedPassword = await bcrypt.hash(Password, 10);
        const user = await prisma.user.create({
          data: {UserType, Email, Password: hashedPassword, PhoneNumber, FirstName, LastName, imageUrl ,Username},
        });
  
      return  res.status(201).json( user );
        }
      }
  
    catch (error) {
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
}
exports.finAllDoc=async(req,res)=>{
  try {
    const doc=await prisma.user.findMany({where:{UserType:"doctor"},
    include:{
      speciality:true,
      doctor:true
    }
  })
  res.json(doc)
  } catch (error) {
    throw error
  }
}
// exports.getAllUsers = async (req, res) => {
//     try {
//         const users = await prisma.user.findMany();
//         res.status(200).json({ users });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to fetch users' });
//     }
// };
// exports.getOne = async (req, res) => {
//     try {
//         const name = req.params.name;
//         const user = await prisma.user.findUnique({ where: { FirstName: name } });
//         if (user) {
//             res.status(200).json({ user });
//         } else {
//             res.status(404).json({ message: 'User not found' });
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };
