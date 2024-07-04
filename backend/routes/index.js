const { Router }= require("express");
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
//  Importation of every routers in this index router file

const mainRouter = new Router();

mainRouter.get('/', (_, res) => {
    res.send('Hello World, ceci est un test');
});
// Sending with the hello world in homepage http://localhost:8000

// mainRouter.use(userRouter);
mainRouter.use(authRouter);
mainRouter.use(userRouter);
// Using our differents routers

module.exports = mainRouter;
// Exporting the mainRouter in server.js
