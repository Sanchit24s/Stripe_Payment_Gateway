const express = require("express");
const app = express();

var cors = require("cors");

const corsOut = {
    origin: "*",

    methods: ["POST"],

    allowedHeaders: ["Content-Type", "Access-Control-Allow-Origin", "Origin"],
};

app.use(cors(corsOut));

app.use(express.json());

app.use("/api", require("./routes/app.routes"));

app.listen(4000, () => {
    console.log("Server started!!");
});
