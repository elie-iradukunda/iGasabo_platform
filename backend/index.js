// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import roleRoutes from "./routes/roleRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use("/roles", roleRoutes);


app.use('/api/users', userRoutes);
app.use('roles',userRoutes)

app.get('/', (req, res) => {
  res.send('iGasabo API running ✅');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
