const path = require('path');
const ResponseClass = require(path.resolve('response/baseResponse'))

module.exports.responseStudent =  (error, results) => {
    let responseReturn = new ResponseClass();
    if (error) {
        throw error
    }

    responseReturn.status = true;
    responseReturn.code = 200;
    responseReturn.message = "Success";
    responseReturn.data = results.rows;

    return responseReturn;
}

module.exports.responseCreateStudent =  (error, results) => {
    let responseReturn = new ResponseClass();
    if (error) {
        throw error
    }

    responseReturn.status = true;
    responseReturn.code = 201;
    responseReturn.message = "Success Booking added";
    responseReturn.data = results.rows;

   return responseReturn;
}

module.exports.responseServerError =  (error) => {

    let responseReturn = new ResponseClass();
    responseReturn.status = false;
    responseReturn.code = 500;
    responseReturn.message = "500 server error";
    responseReturn.data = null;

   return responseReturn;
}

