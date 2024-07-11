const hotelSchema = require("../model/hotelSchema")

async function getAllHotel(req, res) {
    try {

        const hotel = await hotelSchema.find()
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json({
            msg: "Müəyyən oluna bilməyən server xətası",
            error
        })
    }
}


async function addHotel(req, res) {
    try {
        const newHotel = new hotelSchema(req.body)
        const saveData = await newHotel.save()
        res.status(201).json(saveData)
    } catch (error) {
        res.status(500).json({
            msg: "Müəyyən oluna bilməyən server xətası",
            error
        })
    }
}

async function deleteHotel(req, res) {
    try {
        const { id } = req.params
        const deleteHotel = await hotelSchema.findByIdAndDelete(id)
        res.status(200).json({ msg: "Product ugurla silindi", deleteHotel })
    } catch (error) {
        res.status(500).json({
            msg: "Müəyyən oluna bilməyən server xətası",
            error
        })
    }
}

module.exports = {
    getAllHotel, addHotel, deleteHotel
}