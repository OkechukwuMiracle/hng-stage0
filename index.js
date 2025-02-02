const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        email: "miracledamian15@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url:"https://github.com/OkechukwuMiracle/hng-stage0-api" 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`This server is running on port ${PORT}`));