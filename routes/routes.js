/**
*** Basic Modules
**/
const path = require('path');

module.exports = app => {

    require(path.resolve('app/student/routes/routes'))(app)
    require(path.resolve('app/teacher/routes/routes'))(app)

    };
