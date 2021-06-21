import express from 'express'
import packageJson from '../package.json'
const app = express();

app.get('/', (request, response) => {
  console.info('Teste2');

  const msg = { message: 'Hello Quero', version: packageJson.version }

  return response.json(msg)
})

app.listen(3333);