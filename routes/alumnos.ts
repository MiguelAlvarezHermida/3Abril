import express from 'express';
import alumnosHttpHandler from '.../handlers/alumnos.ts';

const router = express.Router();

const  alumnosHttpHandler = new alumnosHttpHandler();

router.get('/', alumnosHttpHandler.getAllAlumnos());

export default router;