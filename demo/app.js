const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => send("Hello wordl!"));

app.locals.title = "My express app";
//app.METHOD(ROUTE, (req, res, next))

app.use((req, res, next) => {
  console.log("App use was called");
  next();
});

app
  .use((req, res, next) => {
    console.log("App use was called");
    const {
      locals: { title }
    } = app;
    console.log("Title :", title);
    next();
  });
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => res.send("Hello world"));


/* 
  crud de usuarios
  crud de pokemones (pkm favo)
  validaciones (id, tipo, nombre, 4 moves)

  
*/