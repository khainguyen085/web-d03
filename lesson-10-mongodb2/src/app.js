import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import usersRoutes from './routes/users.routes.js';
import postsRoutes from './routes/posts.routes.js';
import loginRoutes from './routes/login.routes.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/web-d03-db',function(err){
  if(err){
    console.log('err')
  }
})

app.use('/user', (req,res,next)=>{
  // console.log('The request received at:', new.date());
  next();
})

app.use('/users', usersRoutes);

app.use('/posts', postsRoutes);

app.use('/login', loginRoutes);

app.get('/',(req,res) => res.send('Hello from Hompage'));

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))