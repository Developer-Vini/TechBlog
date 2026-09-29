const express = require('express');
const dotenv = require('dotenv');

const app = express();

//Oxi, não tava funcionando, tava undefined... ai quando vou ver, o .env estava fora da pasta, é mola.
//console.log(process.env.DATABASE_URL)

module.exports = app;