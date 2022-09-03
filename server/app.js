const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');

const authRoutes = require('./Routes/authRoutes')
const postsRoutes = require('./Routes/postsRoutes')

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/api/auth', authRoutes)
app.use('/api/posts', postsRoutes)

app.get("/", (req,res) => {
    res.status(200).json({
        message: 'Hello!!'
    })
})

const PORT = 5000;
const CONNECTION_URL = "mongodb+srv://Garvit:Garvit18@cluster0.wva2c.mongodb.net/EcoHacks?retryWrites=true&w=majority"

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running to port ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));