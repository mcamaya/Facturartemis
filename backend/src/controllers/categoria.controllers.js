import getConnection from "../db/database.js"

const getCategorias = async (req, res) => {
    try {

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias");
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const postCategorias = async (req, res) => {
    try {
        /* console.log(req.body); */
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const nuevaCategoria = {
            CategoriaNombre,
            Descripcion,
            Imagen
        }

        const connection = await getConnection();

        const result = await connection.query("INSERT INTO categorias SET ?", nuevaCategoria);

        res.json(result);

    } catch (err) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getCategorias,
    postCategorias
}