const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findMany();
  const doctor = await prisma.doctor.findMany();
  const messages = await prisma.message.findMany()
  const appointment = await prisma.appointment.findMany();
  const ratingsComments = await prisma.ratingscomments.findMany();
  const admin = await prisma.admin.findMany();
  const blog = await prisma.blog.findMany();
  const comment = await prisma.comment.findMany();
  const product = await prisma.product.findMany();

  console.log({
    user,
    doctor,
    messages,
    appointment,
    ratingsComments,
    admin,
    blog,
    comment,
    product,
  });
}

main()
 .then(async () => {
    console.log('Successfully connected to the database!');
    await prisma.$disconnect();
  })
 .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

module.exports = prisma;




  // create .env file 
  // pass this link DATABASE_URL="mysql://root:root@localhost:3306/Doctor"
  // npx prisma init
  // run npx prisma migrate dev
  // run npx prisma generate






  /* 
  const  { PrismaClient } =require('@prisma/client') 

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.findMany()
  const doctor = await prisma.doctor.findMany()
  const  messages= await prisma.message.findMany()
  const  appointment= await prisma.appointment.findMany()
  const ratingsComments = await prisma.ratingsComments.findMany()
  const admin = await prisma.admin.findMany()
  // const payments = await prisma.payment.findMany()
  const blog = await prisma.blog.findMany()
  const comment = await prisma.comment.findMany()
  const product = await prisma.product.findMany()
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
  */