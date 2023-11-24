var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let workout = require('../models/workout');
let workoutController = require('../controllers/workout_split')

// Read Operation
router.get('/', workoutController.DislayWorkoutSplit);

router.get('/add', workoutController.AddWorkout); 

router.post('/add', workoutController.ProcessWorkout);

router.get('/edit/:id', workoutController.EditWorkout);

router.post('/edit/:id', workoutController.ProcessEditWorkout);

router.get('/delete/:id', workoutController.DeleteWorkout);
 module.exports = router;