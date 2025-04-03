const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

class alumnosDB {

    constructor(db) {

        this.db=db;
    }

    async getAlumnos() {}

}