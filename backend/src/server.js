const app = require("./app")
const sequelize = require("./database/db")

const Card = require("./models/Card")
const User = require("./models/User")

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})



/*
async function start(){
    try{
        await sequelize.authenticate();
        console.log("Conectado ao Neon!");

        await sequelize.sync({alter: true});
        console.log("Tabelas criadas com sucesso")
    }catch(error){
        console.error("Erro: ",error)
    }}
 */
