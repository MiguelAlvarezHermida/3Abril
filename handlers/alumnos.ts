import { Request, Response, NextFunction} from "express";
import AlumnoController from "../controllers/alumnos";

const alumnoController = new AlumnoController();

class AlumnosHttpHandler {
    async getAllAlumnos(req: Request, res: Response, next: NextFunction) {
        try {
            const alumnos = await alumnoController.getAllAlumnos();
            res.json(alumnos);
        } catch (error) {
            next(error);
        }
    }
}

export default AlumnosHttpHandler;