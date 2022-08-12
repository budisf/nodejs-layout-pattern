
/**
*** Basic Modules
**/
const path = require('path');

const studentService = require(path.resolve('app/student/service/student_service'))

exports.index = async (req, res) => {

    studentService.fetchStudent({id: '1'})
	.then((r)=> {
		res.json(r);
	});

    const results = await client
      .query("SELECT * FROM books")
      .then((payload) => {
        return payload.rows;
    })
      .catch(() => {
        throw new Error("Query failed");
      });
      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.send(JSON.stringify(results));
  }
