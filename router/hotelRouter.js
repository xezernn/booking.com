const router = require("express").Router()
const { getAllHotel, addHotel, deleteHotel } = require("../controller/hotelController")

router.get("/api/all", getAllHotel)
router.post("/api/all", addHotel)
router.delete("/api/all/:id", deleteHotel)


module.exports = router