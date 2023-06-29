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


const getUnicaCategoria = async (req, res) => {
    try {
        console.log(req.params);
        const {id} = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias WHERE CategoriaID = ?", id);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteCategoria = async (req, res) => {
    try {
        const {id} = req.params;

        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?", id);
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
        res.send(err.message);
    }
}

const updateCategorias = async (req, res) => { 
    try {
        const {id} = req.params;
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const categoriaActualizada = {CategoriaNombre, Descripcion, Imagen}

        const connection = await getConnection();

        const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?", [categoriaActualizada, id]);

        res.json(result);

    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

export const methodsHTTP = {
    getCategorias,
    getUnicaCategoria,
    postCategorias,
    updateCategorias,
    deleteCategoria
}