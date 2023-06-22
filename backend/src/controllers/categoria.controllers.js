const getCategorias = (req, res) => {
    res.json({"Categoria": "Electrodomésticos"}); // simulamos conexion a la db
}

export const methodsHTTP = {
    getCategorias
}