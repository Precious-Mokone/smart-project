
const client = require("../configs/db");


//createPost Function

exports.createAttendance = async (req, res) => {
    const {name,status,reason,date,user_id}= req.body;
  try {
        //Inserting data into the database
        const data = await client.query(
          `INSERT INTO attendance (name,status,department,date,admin_id) VALUES ($1,$2,$3,$4,$5);`,
          [name,status,reason,date,user_id],
          (err) => {
            if (err) {
           //If post is not inserted is not inserted to database
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              res
                .status(200)
                .send({ message: `attendance for user ${user_id} have been added to the database`});
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

