const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config();

const routes = require('./routes/ToDoRoute')



const app = express();
app.use(express.json());
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Mongo Db is connected"))
    .catch((err) => console.log(err))

app.use(routes)
const PORT = process.env.port || 5000


app.listen(PORT, () => console.log(`Listening on ${PORT} `))

