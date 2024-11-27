const express = require('express');
const { getCategoria } = require('../controllers/categoriaC');

const router = express.Router();

router.get("/api/categoria/:id", getCategoria);


module.exports = router;