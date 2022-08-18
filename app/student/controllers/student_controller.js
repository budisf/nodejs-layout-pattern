
/**
*** Basic Modules
**/
const path = require('path');

const studentService = require(path.resolve('app/student/services/studentService'))

exports.index = async (req, res) => {

  studentService.getStudents(req,res);

}

exports.store = async (req, res) => {

  studentService.createStudents(req,res);

}
