import express, { response } from 'express';
import { db } from './connect.js';
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
// app.use(express.json())

app.listen (PORT, () => {
  console.log(`Servidor, pnes ${PORT}`)
});

app.get('/', (request, response) => {
  response.send('Olá, mundo XD!');
})

app.get('/songs', async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
})

app.get('/artists', async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
})