import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from sum server!");
});

app.get("/sum", (req, res) => {
    const {a, b} = req.query;
    return res.json({
        "message": "Sum is calculated!",
        "sum": parseInt(a) + parseInt(b)
    })
})
app.listen(3000, () => {
    console.log("server is listening at 3000");
})