const client = require("../configs/db");


//getPost Function

exports.getAll = async (req, res) => {
  try {
        //get all post form the database
        const data = await client.query(
          `SELECT * FROM attendance`,
          
          (err,result) => {
            if (err) {
           //If post are not available is not inserted to database
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              res
                .status(200)
                .send(result.rows);
            }
          }
        );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error while creating post!", //Database connection error
    });
  }
};