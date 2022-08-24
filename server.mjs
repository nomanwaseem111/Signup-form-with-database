import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000

let userBase = []

app.post('/signup', (req, res) => {


    let body = req.body

    if (!body.fname || !body.lname || !body.email || !body.password) {

        res.status().send(`Please fill all required fields, for example
        
            {
                fname : "john",
                lname : "doe",
                email : "john@abc.com",
                fname : "1234"
            }
          `)
        return
    }


    let isFound = false

    for (let i = 0; i < userBase.length; i++) {
        if (userBase[i].email === body.email.toLowerCase()) {
            isFound = true
            break;
        }

    }

    if (isFound) {
        res.status(401).send({message : "This Email is Already Registered"})
        return;
    }


    let userName = {

        fname: body.fname,
        lname: body.lname,
        email: body.email.toLowerCase(),
        fname: body.password,
    }

    userBase.push(userName);

    res.status(201).send({message : "User is Created"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})