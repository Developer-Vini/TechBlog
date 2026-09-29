const sequelize = require("./database/db")
const express = require("express");
const routes = require("./routes");

require("./models/Card")
require("./models/User")

const app = require("./app")

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