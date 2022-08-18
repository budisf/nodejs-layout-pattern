
/**
*** Basic Modules
**/
const path = require('path');

const studentService = require(path.resolve('app/student/services/studentService'))

exports.index = async (req, res) => {
  
    let page = req.params.page ? req.params.page : 1;
    let limit = req.params.limit ? req.params.limit : 10;

  try {

    studentService.getStudents(res,page,limit);

  }catch(err){

    return res.status(400).json({ status: 400, message: err.message });

  }

}

exports.store = async (req, res) => {

  studentService.createStudents(req,res);

}
