import express from 'express';
import alumnos from './routes/alumnos';

const app = express();
app.use(express.json());

app.use('/alumnos', alumnos);

const Port = process.env.PORT || 3000;
app.listen(Port, () => console.log(`Listening on port ${Port}`));