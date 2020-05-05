import express from 'express';

// Import Controlers
import { test } from '../controllers/Test/TestController';
import UserRoutes from './user';

const router = express.Router();

// return all states from state table
router.get('/test', test);

router.use('/user', UserRoutes);

export default router;
