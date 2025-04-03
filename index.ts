import express from 'express';
import alumnos from './routes/alumnos.ts';

const app = express();
app.use(express.json());

app.use('/alumnos', tweets);

const Port = process.env.PORT || 3000;
app.listen(Port, () => console.log(`Listening on port ${Port}`));