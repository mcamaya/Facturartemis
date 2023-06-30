import getConnection from "../db/database.js";

const structure = async (res, sqlQuery) => {
    const connection = await getConnection();
    const result = await connection.query(...sqlQuery);
    res.json(result);
}

const getClientes = async (req, res) => {
    try {
        structure(res, ["SELECT * FROM clientes"]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getUnicoCliente = async (req, res) => {
    try {
        const {id} = req.params;
        structure(res, ["SELECT * FROM clientes WHERE ClienteID = ?", id]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const postCliente = async (req, res) => {
    try {
        const {ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax} = req.body;
        const nuevoCliente = {ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax}
        structure(res, ["INSERT INTO clientes SET ?", nuevoCliente]);
        
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const updateClientes = async (req, res) => { 
    try {
        const {id} = req.params;
        const {ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax} = req.body;
        const clientesActualizado = {ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax}
        structure(res, ["UPDATE clientes SET ? WHERE ClienteID = ?", [clientesActualizado, id]]);
        
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const deleteCliente = async (req, res) => {
    try {
        const {id} = req.params;
        structure(res, ["DELETE FROM clientes WHERE ClienteID = ?", id]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getClientes,
    getUnicoCliente,
    postCliente,
    updateClientes,
    deleteCliente
}