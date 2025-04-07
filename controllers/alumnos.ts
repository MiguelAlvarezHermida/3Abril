import AlumnoDB, { Alumno } from "../db/alumnos";

class AlumnosController {
    async getAllAlumnos(): Promise<Alumno[]> {
        const alumnos = await AlumnoDB.GetAll();

        for (const alumno of alumnos) {
            const { calificacion, adeudo } = alumno;

            if (calificacion >= 90 && !adeudo) {
                alumno.mensaje = "¡Felicidades! pasaste con honores";
            } else if (calificacion >= 90 && adeudo) {
                alumno.mensaje = "¡Felicidades! pasaste con honores pero tienes adeudo";
            } else if (calificacion >= 70) {
                alumno.mensaje = "Pasaste en el límite";
            } else if (calificacion <= 69 && !adeudo) {
              alumno.mensaje = "Aunque no pasaste, tienes derecho a un examen";
            }else {
                alumno.mensaje = "Reprobaste";
            }
        }

        return alumnos;
    }
}

export default AlumnosController;