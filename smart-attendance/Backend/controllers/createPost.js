
const client = require("../configs/db");


//createPost Function

exports.createPost = async (req, res) => {
  const {user_id,title,post,post_date} = req.body;
  try {
        //Inserting data into the database
        const data = await client.query(
          `INSERT INTO posts (user_id,title,post,post_date) VALUES ($1,$2,$3,$4);`,
          [user_id,title,post,post_date],
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
                .send({ message: `Post for user ${user_id} have been added to the database`});
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

