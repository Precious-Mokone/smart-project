
const client = require("../configs/db");


//editPost Function

exports.editPost = async (req, res) => {
  const {post_id,user_id,title,post,post_date} = req.body;
  try {
        //Inserting data into the database
        const data = await client.query(
          `UPDATE posts set title=$3, post=$4, post_date=$5 WHERE post_id=$1 AND user_id=$2;`,
          [post_id,user_id,title,post,post_date],
          (err) => {
            if (err) {
           //If post is not edited is not inserted to database
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              res
                .status(200)
                .send({ message: `Post for user ${user_id} have been edited to the database`});
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

