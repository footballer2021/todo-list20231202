import express from 'express';
import { getData } from '../controllers/crudFunc';

const router = express.Router();

router.get('/data', getData);

export default router;