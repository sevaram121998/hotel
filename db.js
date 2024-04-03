const mongoose =  require('mongoose');
const mongodbURL = 'mongodb://localhost:27017/hotels';
mongoose.connect(mongodbURL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("connected");
});

 module.exports = db;