const { default: mongoose } = require("mongoose")

module.exports = {
    mutipleMongooseToOject: function (mongoose) {
        return mongoose.map(mongoose => mongoose.toOject())
    },
    mongooseToOject: function (mongoose) {
        return mongoose ? mongoose.toOject() : mongoose
    }
}