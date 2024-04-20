const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// exports.register = async (req, res) => {
//   const { username, userType, email, password, phoneNumber, firstName, lastName, specialityId, imageUrl } = req.body;
//   try {
//     if (userType === 'doctor') {
//       if (!password) {
//         return res.status(400).json({ error: 'Password is required' });
//       }

//       const hashedPassword = await bcrypt.hash(password, 10);
//       const doctor = await prisma.doctor.create({});

//       const user = await prisma.user.create({
//         data: {
//           doctorId: doctor.id,
//           email,
//           password: hashedPassword,
//           phoneNumber,
//           firstName,
//           lastName,
//           imageUrl,
//           userType: "doctor",

//           specialityId:parseInt(specialityId) ,

//           username,
//         },
//       });

//       return res.status(201).json(user);
//     } else if (userType.toLowerCase() === 'patient') {
//       const hashedPassword = await bcrypt.hash(password, 10);

//       const user = await prisma.user.create({
//         data: {
//           email,
//           password: hashedPassword,
//           phoneNumber,
//           firstName,
//           lastName,
//           imageUrl,
//           userType: "patient",
//           username,
//         },
//       });

//       return res.status(201).json(user);
//     } else {

//       return res.status(400).json({ error: 'Invalid user type' });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Registration failed' });
//   }
// }

exports.register = async (req, res) => {
  const { username, userType, email, password, phoneNumber, firstName, lastName, specialityId, imageUrl } = req.body;
  try {
    // Check if userType is null or undefined
    if (!userType) {
      return res.status(400).json({ error: 'User type is required' });
    }

    // Convert userType to lowercase to make the comparison case-insensitive
    const userTypeLower = userType.toLowerCase();

    if (userTypeLower === 'doctor') {
      if (!password) {
        return res.status(400).json({ error: 'Password is required' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const doctor = await prisma.doctor.create({});

      const user = await prisma.user.create({
        data: {
          doctorId: doctor.id,
          email,
          password: hashedPassword,
          phoneNumber,
          firstName,
          lastName,
          imageUrl,
          userType: "doctor",

          specialityId: parseInt(specialityId),
          doctor,
          username,
        },
      });

      return res.status(201).json(user);
    } else if (userTypeLower === 'patient') {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          phoneNumber,
          firstName,
          lastName,
          imageUrl,
          userType: "patient",
          username,
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
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email:email } });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id,userType:user.userType }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }

}
exports.finAllDoc=async(req,res)=>{
  try {
    const docs=await prisma.user.findMany({where:{userType:"doctor"},
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
          firstName: {
            contains: name,
          },
        },
        {
          lastName: {
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

