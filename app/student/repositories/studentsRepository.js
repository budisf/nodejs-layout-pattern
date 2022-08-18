const path = require('path');
const { responseStudent } = require('../../../response/responses');
const Responses = require(path.resolve('response/responses'))
const config = require(path.resolve('config/connection.js'));
const client = config.data;

module.exports.getAllStudents = async (res) => {

        const sql = 'SELECT * FROM coba ORDER BY id ASC';
        await client.query( sql, (error, results ) =>  res.json(responseStudent(error, results)));

}

module.exports.createStudents = async (req, res) => {

    const { name, deskripsi } = req.body;
    const sql = 'INSERT INTO coba (name, deskripsi) VALUES ($1, $2)';
    await client.query( sql,  [name, deskripsi], (error, results ) =>  res.json(Responses.responseCreateStudent(error, results)));

}


