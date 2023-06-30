import getConnection from "../db/database.js";

const structure = async (res, sqlQuery) => {
    const connection = await getConnection();
    const result = await connection.query(...sqlQuery);
    res.json(result);
}

const getEmpleados = async (req, res) => {
    try {
        structure(res, ["SELECT * FROM empleados"]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getUnicoEmpleado = async (req, res) => {
    try {
        const {id} = req.params;
        structure(res, ["SELECT * FROM empleados WHERE EmpleadoID = ?", id]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const postEmpleado = async (req, res) => {
    try {
        const {Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto} = req.body;
        
        const nuevoEmpleado = {Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto}
        structure(res, ["INSERT INTO empleados SET ?", nuevoEmpleado]);
        
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const updateEmpleado = async (req, res) => { 
    try {
        const {id} = req.params;
        const {Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto} = req.body;
        const empleadosActualizado = {Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto}
        structure(res, ["UPDATE empleados SET ? WHERE EmpleadoID = ?", [empleadosActualizado, id]]);
        
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const deleteEmpleado = async (req, res) => {
    try {
        const {id} = req.params;
        structure(res, ["DELETE FROM empleados WHERE EmpleadoID = ?", id]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getEmpleados,
    getUnicoEmpleado,
    postEmpleado,
    updateEmpleado,
    deleteEmpleado
}