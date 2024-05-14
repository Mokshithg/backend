const express = require('express');
const app = express();
const dotenv = require('dotenv');
const ExpertRoutes = require('./routers/ExpertRoutes');
const ExpertDetails = require('./routers/ExpertDetails');
const UserDetails = require('./routers/UserDetails')
const connectDB = require('./db');
const cors = require('cors');
        

app.use(express.json());
app.use(cors());
dotenv.config();

connectDB()
.then(()=> console.log('MongoDB connected'))
.catch(err => {
    console.log(err);
    process.exit(1);
})

app.use('/api', ExpertRoutes);
app.use('/api', ExpertDetails);
app.use('/api', UserDetails);

app.listen(3000, ()=>console.log('listening to the server on port 3000'));