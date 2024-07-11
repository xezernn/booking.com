const express = require("express")
const dbConnection = require("./config/db")
const router = require("./router/hotelRouter")
const app = express()
require("dotenv/config")

// middlewear
app.use(express.json())
app.use(require("cors")())

app.use("/hotel", router)

async function startServer() {
    const PORT = process.env.PORT1 || process.env.PORT2
    try {
        await dbConnection()
        app.listen(PORT, () => {
            console.log(PORT, "Bu portda server acildi");
        })
    } catch (error) {
        console.log(error);
    }
}

startServer()

