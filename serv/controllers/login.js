const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.register = async (req, res) => {
  const { Username, UserType, Email, Password, PhoneNumber, FirstName, LastName, specialityId, imageUrl } = req.body;
  try {
    if (UserType === 'doctor') {
      if (!Password) {
        return res.status(400).json({ error: 'Password is required' });
      }

      const hashedPassword = await bcrypt.hash(Password, 10);
      const doctor = await prisma.doctor.create({});

      const user = await prisma.user.create({
        data: {
          doctorId: doctor.id,
          Email,
          Password: hashedPassword,
          PhoneNumber,
          FirstName,
          LastName,
          imageUrl,
          UserType: "doctor",

          specialityId:parseInt(specialityId) ,

          Username,
        },
      });

      return res.status(201).json(user);
    } else if (UserType.toLowerCase() === 'patient') {
      const hashedPassword = await bcrypt.hash(Password, 10);

      const user = await prisma.user.create({
        data: {
          Email,
          Password: hashedPassword,
          PhoneNumber,
          FirstName,
          LastName,
          imageUrl,
          UserType: "patient",
          Username,
        },
      });

      return res.status(201).json(user);
    } else {

      return res.status(400).json({ error: 'Invalid user type' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Registration failed' });
  }
}

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
    const docs=await prisma.user.findMany({where:{UserType:"doctor"},
    include:{
      speciality:true,
      doctor:true
    }
  })
  res.json(docs)
  } catch (error) {
    throw error
  }
}


exports.findDocByNameAndSpeciality = async (req, res) => {
  try {
    const id = parseInt(req.params.id) || 0;
    const name = req.params.name || "";

    console.log("ID:", id);
    console.log("Name:", name);

    let query = {};
    if (id) {
      query.specialityId = id;
    }
    if (name) {
      query.OR = [
        {
          FirstName: {
            contains: name,
          },
        },
        {
          LastName: {
            contains: name,
          },
        },
      ];
    }

    const docs = await prisma.user.findMany({
      where: query,
      include: {
        speciality: true,
        doctor: true,
      },
    });

    res.send(docs);
  } catch (error) {
    throw error;
  }
}

exports.getCurrentUser=async(req,res)=>{
try {
  const user = req.user
  console.log("curret",user);
  res.json(user)
} catch (error) {
  
}
}

