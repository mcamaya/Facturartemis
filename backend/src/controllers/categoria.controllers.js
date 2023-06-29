import getConnection from "../db/database.js";

const structure = async (res, sqlQuery) => {
    const connection = await getConnection();
    const result = await connection.query(...sqlQuery);
    res.json(result);
}

const getCategorias = async (req, res) => {
    try {
        structure(res, ["SELECT * FROM categorias"]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getUnicaCategoria = async (req, res) => {
    try {
        const {id} = req.params;
        structure(res, ["SELECT * FROM categorias WHERE CategoriaID = ?", id]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const postCategorias = async (req, res) => {
    try {
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        const nuevaCategoria = {CategoriaNombre, Descripcion, Imagen}
        structure(res, ["INSERT INTO categorias SET ?", nuevaCategoria]);
        
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
        structure(res, ["UPDATE categorias SET ? WHERE CategoriaID = ?", [categoriaActualizada, id]]);
        
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const deleteCategoria = async (req, res) => {
    try {
        const {id} = req.params;
        structure(res, ["DELETE FROM categorias WHERE CategoriaID = ?", id]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getCategorias,
    getUnicaCategoria,
    postCategorias,
    updateCategorias,
    deleteCategoria
}