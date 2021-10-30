var fs = require('fs');
var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('html/public'));

app.get("/vtt.html", function (req, res) {
    res.sendFile(__dirname + "/html/vtt.html");
});

app.get("/ardl.html", function (req, res) {
    res.sendFile(__dirname + "/html/ardl.html");
});

app.get("/EnegeticOcto.html", function (req, res) {
    res.sendFile(__dirname + "/html/EnegeticOcto.html");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/index.html", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/clan-team_a.html", function (req, res) {
    res.sendFile(__dirname + "/html/clan-team_a.html");
});
app.get("/CurlyBrace.html", function (req, res) {
    res.sendFile(__dirname + "/html/CurlyBrace.html");
});

app.get("/games-team_a.html", function (req, res) {
    res.sendFile(__dirname + "/html/games-team_a.html");
});
app.get("/Saltbearer.html", function (req, res) {
    res.sendFile(__dirname + "/html/Saltbearer.html");
});

app.get("/sentinel.html", function (req, res) {
    res.sendFile(__dirname + "/html/sentinel.html");
});


var httpServer = http.createServer(app);

httpServer.listen(60000, "0.0.0.0");
