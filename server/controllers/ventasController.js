const ventasService = require("../services/ventasService");

exports.ventasPorRegion = async (req, res) => {

    try {

        const datos = await ventasService.ventasPorRegion();

        res.json(datos);

    } catch (error) {

        res.status(500).json(error);

    }

};