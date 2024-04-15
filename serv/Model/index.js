const  { PrismaClient } =require('@prisma/client') 

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
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