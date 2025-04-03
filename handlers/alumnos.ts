import { Request, Response, NextFunction} from "express";

class alumnosHttpHandler {

    async getAlumnos(req: Request, res: Response, next: NextFunction) {

        try {
            const alumnos = await this.getAlumnos();
            res.json(alumnos);
        } catch (error) {
            next(error);
        }

    }

}