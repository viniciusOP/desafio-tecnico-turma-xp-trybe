const ClienteModel = require('../src/models/clienteModel');

const getById = (id) => ClienteModel.getById(id);

module.exports = { getById };