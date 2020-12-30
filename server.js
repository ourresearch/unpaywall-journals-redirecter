const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

let app = express();


// this was helpful for configs:
// https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
app.use(serveStatic(__dirname + "/dist"));



app.get('*', function (req, res) {
    const redirectUrl = "https://unsub.org" + req.path;
    res.redirect(301, redirectUrl);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port ' + port)
});