const app = require("./app")
const sequelize = require("./database/db")

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

    