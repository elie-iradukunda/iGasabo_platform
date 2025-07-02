import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { submitIssue, userIssues, allIssues } from '../controllers/issueController.js';

const router = express.Router();

router.post('/', authenticateToken, submitIssue);       // Submit new issue
router.get('/my', authenticateToken, userIssues);       // View own issues
router.get('/all', authenticateToken, allIssues);       // Admin/local leaders

export default router;
