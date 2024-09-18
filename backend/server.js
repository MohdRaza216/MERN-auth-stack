import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000; 
const app = express();
import userRouters from './routes/userRoutes.js'

app.use('/api/users', userRouters);

app.get('/', (req, res ) => {
    res.send('Server up and running!')
});
 
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});