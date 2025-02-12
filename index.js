const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 5000;
const databaseConnection = require('./DB/DB');

databaseConnection();

app.use(express.json());
app.use(cookieParser());
app.use('/networksgmc',require('./Router/User'));
app.use('/networksgmc/posts',require('./Router/Post'));
app.use('/networksgmc',require('./Router/Like'));


app.get('/', (req, res) => {
    res.end("<div>The Server is Running! </div>");
})

app.listen(PORT, ()=>{

    console.log(`The Server is Running at [${PORT}] !`);

})



