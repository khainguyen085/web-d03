import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.routes.js';
import postsRoutes from './routes/posts.routes.js';
import loginRoutes from './routes/login.routes.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.use('/posts', postsRoutes);

app.use('/login', loginRoutes);

app.get('/',(req,res) => res.send('Hello from Hompage'));

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))