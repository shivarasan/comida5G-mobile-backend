import express from 'express';

// Import Controlers
import { createUser } from '../controllers/Users/Users';

const router = express.Router(); // Define Express Router

//----------------------Authenticated routes-------------------
// -------------------------- Cook  --------------------------

// Update a Cook
router.post('/createUser', createUser);

// -------------------------- Cook Routers End --------------------------

export default router;
