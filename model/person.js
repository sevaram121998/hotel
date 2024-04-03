const mongoose =  require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    post:{
        type: String,
        enum: ['chef','manager','waiter'],
        require: true
    },
    mobileNumber:{
        type:Number,
        require: true
    },
    adddress:{
        type: String,
        require: true
    }
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
