require("dotenv/config")
const mongoose = require("mongoose")


async function dbConnection(){
    const URL = process.env.MONGO_URI
    try {
        await mongoose.connect(URL)
        console.log("mongo db ye qosuldu");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnection