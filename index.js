require("dotenv").config();

const express = require('express');
const app = express();

app.use(express.json()); //traduce los json de express de binario a formato legible (normalmente de Body)

const articleRouter = require("./routers/articles");
const userRouter = require("./routers/users");
const commentRouter = require("./routers/comments");

app.use(articleRouter);
app.use(userRouter);
app.use(commentRouter);

app.listen(process.env.SERVER_PORT, function(){
    console.log("> Listening port: "+ process.env.SERVER_PORT);
});

