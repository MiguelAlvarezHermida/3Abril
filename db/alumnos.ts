const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });


export type Alumno = {
    matricula: string;
    nombre: string;
    calificacion: number;
    adeudo: boolean;
    mensaje?: string; 
};

class Alumnos{
    private alumnos: Alumno[] = [
        { matricula: "A01722925", nombre: "Miguel Álvarez", calificacion: 100, adeudo: false },
        { matricula: "A01722924", nombre: "Miguel Hermida", calificacion: 91, adeudo: false },
        { matricula: "A01722923", nombre: "Miguel Alhermida", calificacion: 78, adeudo: true },
        { matricula: "A01722922", nombre: "Miguel Heralvarez", calificacion: 28, adeudo: true },
        { matricula: "A01722921", nombre: "Miguel Miguel", calificacion: 61, adeudo: true }
    ];

    async GetAll(): Promise<Alumno[]> {
        return this.alumnos;
    }
}

export default new Alumnos();