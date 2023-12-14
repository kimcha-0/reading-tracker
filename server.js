var http = require("http");
var express = require("express");
var router = express.Router();
var app = express();
app.use(express.json());
var host = "localhost";
var PORT = process.env.PORT || 8000;

//
// define endpoints
// https://openlibrary.org/search.json
// https://openlibrary.org/dev/docs/api/covers
