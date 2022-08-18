const path = require('path');
const studentRepo = require(path.resolve('app/student/repositories/studentsRepository'))

//untuk logic
exports.getStudents = async (req, res) => {

    try{
        
        studentRepo.getAllStudents(res);

    }catch(err){

        responseServerError(err);

    }


}


exports.createStudents = async (req, res) => {

    studentRepo.createStudents(req,res);
}
