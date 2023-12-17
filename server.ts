const http = require("http");
const express = require("express");

const router = express.Router();

const app = express();
app.use(express.json());

const host: string = "localhost";
const PORT = process.env.PORT || 8000;

// define endpoints


// https://openlibrary.org/search.json
// https://openlibrary.org/dev/docs/api/covers
