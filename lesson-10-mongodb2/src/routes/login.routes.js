import express from 'express';

import { createAccount, getAccounts } from '../controllers/login.controllers.js';

const router = express.Router();

router.get('/', getAccounts);

router.post('/',createAccount);

export default router;