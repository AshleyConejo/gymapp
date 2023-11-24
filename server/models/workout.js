let mongoose = require('mongoose');

// create a model class
let workoutClass = mongoose.Schema({
    Workout:String,
    Reps:String,
    Sets:String,
    Weight:String
},
{
    collection:"workout"
});
module.exports = mongoose.model('test', workoutClass);