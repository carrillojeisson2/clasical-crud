const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use("/api", userRoutes);

// routes
app.get("/", (req, res) => {
    res.send("welcome");
});

// db conection
mongoose
    .connect(process.env.MONGODB_CNN)
    .then(() => console.log("db ok"))
    .catch((error) => console.error(eroor));

app.listen(port, () => console.log("serve ok ", port));