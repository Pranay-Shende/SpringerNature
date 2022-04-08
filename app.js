const express = require('express');
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())


//Route to signUp
app.post('/signup', (req, res) => {
    const { firstName, lastName, password, email, checkBox } = req.body;

    let lPassword = password.length;

    if ((firstName && lastName && lPassword > 8)) {

        if (checkBox) {
            res.status(201).send(`Hello ${firstName} ${lastName}, Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email: ${email}`)
        } else {
            res.status(201).send(`Hello ${firstName} ${lastName}, Thank you for signing up. Your account is now created`)
        }
    } else {
        res.status(401).send("Validation fails for new user creation! Please try again.")
    }

})

app.listen(3000, () => {
    console.log("Connected to server")
})