const  { PrismaClient } =require('@prisma/client') 

const prisma = new PrismaClient()

async function main() {
<<<<<<< HEAD
=======

>>>>>>> 63c17aecbb8bfdb13e85a89effce087a0eaa5948
  const user = await prisma.user.findMany()
  const doctor = await prisma.doctor.findMany()
  const  messages= await prisma.message.findMany()
  const  appointment= await prisma.appointment.findMany()
<<<<<<< HEAD
  // const ratingsComments = await prisma.ratingsComments.findMany()
=======
  const ratingsComments = await prisma.ratingsComments.findMany()
>>>>>>> 63c17aecbb8bfdb13e85a89effce087a0eaa5948
  const admin = await prisma.admin.findMany()
  // const payments = await prisma.payment.findMany()
  const blog = await prisma.blog.findMany()
  const comment = await prisma.comment.findMany()
  const product = await prisma.product.findMany()
<<<<<<< HEAD
=======

>>>>>>> 63c17aecbb8bfdb13e85a89effce087a0eaa5948
}

main()
  .then(async () => {
    console.log('Successfully connected to the database!')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  module.exports = prisma
  // create .env file 
  // pass this link DATABASE_URL="mysql://root:root@localhost:3306/Doctor"
  // npx prisma init
  // run npx prisma migrate dev
  // run npx prisma generate
  // create .env file 
  // pass this link DATABASE_URL="mysql://root:root@localhost:3306/Doctor"
  // npx prisma init
  // run npx prisma migrate dev
<<<<<<< HEAD
  // run npx prisma generate
=======
  // run npx prisma generate

>>>>>>> 63c17aecbb8bfdb13e85a89effce087a0eaa5948
