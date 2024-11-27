const Categoria = require('../models/categoria')

const getCategoria = async(req, res) => {
    try {
        const { id } = req.params;

        const categoria = await Categoria.findById(id);
        console.log(categoria);

        res.send(categoria);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getCategoria
};