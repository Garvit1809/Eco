const express = require('express')

const app = express();

app.get("/", (req,res) => {
    res.status(200).json({
        message: 'Hello!!'
    })
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log('Listening to PORT :- ' + PORT);
})