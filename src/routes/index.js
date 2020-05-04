import express from 'express';

// Import Controlers
import { test } from '../controllers/Test/TestController';

const router = express.Router();

// return all states from state table
router.get('/test', test);

export default router;
