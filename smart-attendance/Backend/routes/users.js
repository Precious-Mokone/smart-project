const express = require('express')
const app = express();
const bodyparser = require('body-parser')

const {register} = require('../controllers/register');
const {login} = require('../controllers/login');
const {createPost} = require('../controllers/createPost');
const {getPost} = require('../controllers/getPost')
const {deletePost} = require('../controllers/deletePost');
const { editPost } = require('../controllers/editPost');
const { getAttendance } = require('../controllers/getAttendance');
const { getUser } = require('../controllers/getUser');
const {createUser} = require('../controllers/createUser')
const {getAllUsers} = require('../controllers/getAllUsers')
const {createAttendance} = require('../controllers/createAttendance')
const {getAll} = require('../controllers/getAll')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



app.post('/register',register)
app.post('/login',login)
app.post('/createPost',createPost)
app.get('/getPost/:id',getPost)
app.post('/deletePost',deletePost)
app.put('/editPost',editPost)

//

app.get('/getAttendance/:id',getAttendance)
app.post('/createAttendance',createAttendance)
//get User details
app.get('/getUser/:id',getUser)
//get all users
app.get('/getAllUsers',getAllUsers)

//creating a user
app.post('/createUser',createUser)
app.get('/getAll',getAll)


module.exports = app