import express from 'express';
import cors from 'cors';
import mysql from 'mysql2'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



//define our app with express
const app = express();
app.use(express.json());
app.use(cors());


//connecting with database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'medamb_services', 
});
//starting the server



//middlewares 

// signup with post 

app.post('/signup', (req, res) => {
    const {name, email, password} = req.body;
    console.log(password);
    bcrypt.hash(password, 8, (err, hassedPassword) => {
        console.log(err)
        const sql = 'INSERT INTO signup (name,email,password) values(?,?,?) ';
        db.query(sql, [name, email, hassedPassword], (err) => {
            if (err) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            res.status(201).json({ message: 'User Created successfully' });
        });
    });
});


//login middleware here... using post

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    console.log(password);
    const sql = 'SELECT * from signup where email=? ';
    db.query(sql, [email, password], (err, users) => {
       if(err) console.log(err)
       
        if (users?.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = users[0]
        console.log({password, hash:user.password})
        bcrypt.compare(password, user.password, (err, result) => {
            console.log({err,result})
            if (!result) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }
            const token = jwt.sign({ id: user.id, email: user.email }, 'secretkey', { expiresIn: '1h' });
            res.json({ token, user: { id: user.id, name: user.name, email: user.email } });


        })

    });

});
app.listen(5000, () => {
    console.log("server is running");
})