const express = require("express");
const cors = require("cors");

require('./Model/index.js');

const doctorRouter = require('./routes/doctor.router.js');
const AppointmentRouter = require('./routes/Appointment.router.js');
const RatingCommentsRouter = require('./routes/ratingComments.router');
const payment =require ('./routes/Payment')
const messagesRouter = require('./routes/messages.router')


const userRouter = require('./routes/userrouters');
const Authentication = require('./routes/loginrouters');
const nodeMailer = require('./controllers/nodeMailer');
const BlogRouter = require('./routes/Blog.routes');
const ProductRouter = require('./routes/product.router');
const CommentRouter = require('./routes/blogComments.router');
const specialityRouter=require("./routes/specialityRouter.js")
const fileUpload = require('express-fileupload');
const app = express();
const PORT = 4000









app.use(cors())
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())

app.use('/api/messages', messagesRouter);
app.use("/api/payment", payment)
app.use("/api/auth", Authentication);
app.use('/api/doctors', doctorRouter);
app.use("/api/Appointment", AppointmentRouter);
app.use("/api/ratingComments", RatingCommentsRouter);
app.use("/api/users", userRouter);
app.use('/api/doctor',specialityRouter)
app.use('/api/blogs', BlogRouter);
app.use('/api/comments', CommentRouter);
app.use('/api/products', ProductRouter);
app.post('/api/sendmail', nodeMailer.sendMail);





// app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
app.listen(PORT, function () {
  console.log("Server is running on port", PORT);
})