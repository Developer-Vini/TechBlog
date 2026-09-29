const Card = require("../models/Card");
const User = require("../models/User");


module.exports = {
    async getProfile(req, res) {
        try {
            const { id } = req.params;

            const profile = await User.findByPk(id, {
                include: {
                    model: Card,
                    attributes: ['id', 'title', 'content', 'createdAt']
                }
            });

            if (!profile) {
                return res.status(404).json({ error: "Perfil não encontrado" })
            }
            return res.json(profile)
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar perfil" });
        }
    },
    async createCard(req, res) {
        try {
            const  id  = req.params;
            const { title, content } = req.body;

            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({ error: "Usuario não existe" });
            }

            const newCard = await user.createCard({ title, content });

            return res.status(201).json(newCard);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao criar card" })
        }
    }
}
