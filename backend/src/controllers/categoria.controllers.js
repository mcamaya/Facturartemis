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

export const methodsHTTP = {
    getCategorias
}