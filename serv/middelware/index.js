
const jwt = require('jsonwebtoken');
const {user}=require("../model/index");
const verifyToken= async (req, res, next)=>{
const token = req.header('Authorization').split(' ')[1];
console.log(token);
if (!token) return res.status(401).json({ error: 'Access denied1' });
try {
 const decoded = jwt.verify(token,'your-secret-key');
 const users = await user.findUnique({ where: { id:decoded.userId} })
 res.send(users);
// if(!user)throw new Error()
req.autoToken=token;
req.user = user;
//  next()
 } catch (error) {
    throw error;
 res.status(401).send(error);
 }
 };
module.exports = verifyToken;