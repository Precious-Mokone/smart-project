
const client = require("../configs/db");


//deletePost Function

exports.deletePost = async (req, res) => {
  const {post_id,user_id} = req.body;
  try {
        //Inserting data into the database
        const data = await client.query(
          `DELETE FROM posts WHERE post_id=$1 AND user_ID=$2;`,
          [post_id,user_id],
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
                .send({ message: `Post for user ${user_id} have been deleted from the database`});
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

