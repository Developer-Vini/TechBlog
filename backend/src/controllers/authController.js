const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports = {
    async register(req, res) {
        try {
            const { name, email, password } = req.body;

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({ name, email, password: hashedPassword });

            user.password = undefined;

            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({ error: "Erro ao registrar usuario" })
        }
    },



    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email

            }
        })

        if(!user){
            return res.status(400).json({ error: "Usuario não encotrado"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(400).json({ error: 'Senha invalida'})
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT, {
            expiresIn: '2d',
        })

        return res.json({ user: { id: user.id, name: user.name}, tokens});
    }

}