import { Request, Response, NextFunction} from "express";
import AlumnoController from "../controllers/alumnos";

const alumnoController = new AlumnoController();

class AlumnosHttpHandler {
    getAllAlumnos(req: Request, res: Response, next: NextFunction) {
        (async () => {
            try {
                const alumnos = await alumnoController.getAllAlumnos();
                res.json(alumnos);
            } catch (error) {
                next(error);
            }
        })();
    }
}

export default AlumnosHttpHandler;