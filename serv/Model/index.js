const  { PrismaClient } =require('@prisma/client') 

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.User.findMany()
  const doctor = await prisma.Doctor.findMany()
  const  messages= await prisma.Message.findMany()
  const  appointment= await prisma.Appointment.findMany()
  const ratingsComments = await prisma.RatingsComments.findMany()
  const admin = await prisma.Admin.findMany()
  const blog = await prisma.Blog.findMany()
  const comment = await prisma.Comment.findMany()
  const product = await prisma.Product.findMany()
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