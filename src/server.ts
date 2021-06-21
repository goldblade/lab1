import express from 'express'
import packageJson from '../package.json'
const app = express();

app.get('/', (request, response) => {
  console.info('Teste1');


  return response.json({ message: 'Hello Quero', version: packageJson.version })
})

app.listen(3333);