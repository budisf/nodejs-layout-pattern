const path = require('path');
const config = require(path.resolve('config/connection.js'));
const client = config.data;

module.exports.getAllStudents = async () => {
    
    const sql = 'SELECT * FROM coba ORDER BY id ASC';
    let data = await client.query(sql);
    return data;

}

module.exports.createStudents = async (data) => {

    const { name, deskripsi } = data ;
    const sql = 'INSERT INTO coba (nama, deskripsi) VALUES ($1, $2)';
    let result = await client.query( sql,  [name, deskripsi]);
    return result;

}


