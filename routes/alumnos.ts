import express from 'express';
import AlumnosHttpHandler from '../handlers/alumnos';

const router = express.Router();

const  alumnosHttpHandler = new AlumnosHttpHandler();

router.get('/', (req, res, next) => alumnosHttpHandler.getAllAlumnos(req, res, next));

export default router;