const Orden = require('../models/orden');

// Obtener detalles de una orden por ID
const getOrden = async (req, res) => {
    try {
        const { id } = req.params;

        const orden = await Orden.findById(id);
        console.log(orden);

        res.send("Orden encontrada: ", orden);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Crear una nueva orden
const addOrden = async (req, res) => {
    try {
        const { idMesa, platillos, estado } = req.query; // Se usará req.query como en el ejemplo de categoría

        const nuevaOrden = await Orden.create({
            idMesa,
            platillos,
            estado,
        });

        console.log("Orden creada: ", nuevaOrden);
        res.status(201).send(nuevaOrden); // Respuesta igual al ejemplo
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Actualizar el estado de una orden
const updateOrden = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body; // Se mantiene req.body aquí para enviar datos más estructurados

        const ordenActualizada = await Orden.findByIdAndUpdate(
            id,
            { estado },
            { new: true, runValidators: true }
        );

        console.log("Orden actualizada: ", ordenActualizada);
        res.status(200).send(ordenActualizada);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Eliminar una orden
const deleteOrden = async (req, res) => {
    try {
        const { id } = req.params;

        const ordenEliminada = await Orden.deleteOne({ _id: id });
        console.log(ordenEliminada);

        res.send("Orden eliminada correctamente: ", ordenEliminada);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getOrden,
    addOrden,
    updateOrden,
    deleteOrden,
};
