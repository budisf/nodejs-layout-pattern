const path = require('path');
const studentRepo = require(path.resolve('app/student/repositories/studentsRepository'))

//untuk logic
exports.getStudents = async (page,limit) => {

    try{
        
        let data = await studentRepo.getAllStudents();
        return data.rows;

    }catch(err){

        throw new Error(err);

    }

}


exports.createStudents = async (data) => {

    try{
        
        let result = await studentRepo.createStudents(data);
        return result;

    }catch(err){

        throw new Error(err);

    }
    
}
