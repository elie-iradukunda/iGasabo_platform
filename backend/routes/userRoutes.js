// backend/routes/userRoutes.js
import express from 'express';
import { register, login } from '../controllers/userController.js';
import { getall,getUserById,updateUser,deleteUser } from '../models/userModel.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/all',getall)

router.get("/:id", getUserById);     
router.put("/:id", updateUser);      
router.delete("/:id", deleteUser);  



export default router;
