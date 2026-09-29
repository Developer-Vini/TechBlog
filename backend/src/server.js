const sequelize = require("./database/db")
const express = require("express");
const cors = require('cors')
require("./models/Card")
require("./models/User")

const app = require("./app");
const routes = require("./routes/routes");


app.use(cors())
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3001


async function start() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });


        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        });
    } catch (error) {
        console.error("Erro ao iniciar: ", error)
    }
}


start();