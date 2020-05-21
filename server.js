const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

let app = express();


// this was helpful for configs:
// https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
app.use(serveStatic(__dirname + "/dist"));



app.get('*', function (req, res) {
    res.redirect("https://unsub.org" + req.path)
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port ' + port)
});