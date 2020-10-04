var mongoose = require("mongoose");
var itemSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true
    },
    item_uom: {
        type: String,
        default: "units",
        required: false
    },
    item_img: {
        type: String,
        required: false
    }
});
module.exports = mongoose.model("Item",itemSchema);