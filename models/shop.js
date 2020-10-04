var mongoose = require("mongoose");
var shopSchema = new mongoose.Schema({
    user: {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        user_name: String
    },
    items: [{
        item_id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shop"
        },
        no_of_items: {
            type: Number,
            default: 1,
            required: true
        }
    }]
});
module.exports = mongoose.model("Shop",shopSchema);