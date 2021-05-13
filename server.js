const express = require ("express");

const app = express();

app.get ("/", function() {
console.log ("Hola mundo");
});

app.listen(3656);