const http = require("http");
const express = require("express");

const app = express();
app.use(express.json());

const host = "localhost";
const PORT = process.env.PORT || 8000;

// define endpoints
// add book
// remove book
// display books
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT} on host ${host}`);
});

app.post("/addBook", (request, response) => {
    const status = {
        "Status": "success"
    };

    response.send(status);
});
