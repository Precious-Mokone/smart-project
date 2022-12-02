const bcrypt = require("bcrypt");

const pool = require("../configs/db");

const jwt = require("jsonwebtoken");

//Register Function

// {
//   "contacts": "0989878909",
//   "department": "Full stack"
//   "email":"samson@gmail.com"
//   "name": "Samson"
//   "password": "12345"
//   "surname": "Samuels"
//   "usertype": "client"
//   }
    

exports.createUser = async (req, res) => {
  const {name,surname,contacts, email, password,department , usertype} = req.body;

  try {
    const data = await pool.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]); //Check if user exist
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(400).json({
        error: "Email already there, No need to register again.",
      });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err)
          res.status(400).json({
            error: "Sever Error",
          });

        const user = {
            name,
            surname,
            contacts,
            email,
            password: hash,
            usertype
        };

        var flag = 1;

        //Inserting data into the database
        pool.query(
          `INSERT INTO users (name,surname,contacts, email, password ,department, usertype) VALUES ($1,$2,$3,$4,$5,$6,$7);`,
          [user.name, user.surname,user.contacts, user.email,user.password, user.password,user.usertype],
          (err) => {
            if (err) {
              flag = 0; //If user is not inserted is not inserted to database assigning flag as 0/false.
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              flag = 1;
              res
                .status(200)
                .send({ message: `User called ${name} have been added to the database` });
            }
          }
        );
        if (flag) {
          const token = jwt.sign(
            //Signing a jwt token
            {
              email: user.email,
            },
            process.env.SECRET_KEY
          );
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error while registring user!", //Database connection error
    });
  }
};
