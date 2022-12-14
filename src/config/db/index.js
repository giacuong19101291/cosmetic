const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/comestic_web', {
            useNewUrlParser: true,
            useUnifiedtopology: true
        });
        console.log('connect successfully!!!')
    } catch (error) {
        console.log('Connect failure!!!')
    }
}

module.exports = { connect}