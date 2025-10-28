const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from sum server!");
});

app.get("/sum", (req, res) => {
    const {a, b} = req.query;
    const sum = parseInt(a) + parseInt(b);

    return res.json({
        "message": "Sum is calculated!",
        "sum": sum.toString()
    })
})

module.exports = app;
