const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');


const router = express.Router();
const Registration = mongoose.model('Registration');

router.get('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
});

router.post('/', 
//validating input
[
  body('name')
    .isLength({ min: 1 })
    .withMessage('Please enter a name'),
  body('email')
    .isLength({ min: 1 })
    .withMessage('Please enter an email'),
],

(req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    
    //create new instance of the value entered 
    const registration = new Registration(req.body);
    registration.save()
      .then(() => { res.send('Thank you for your registration!'); })
      .catch(() => { res.send('Sorry! Something went wrong.'); });


  } else {
    res.render('form', {
      title: 'Registration form',
      errors: errors.array(),
      data: req.body,
    });
  }
  
  console.log(req.body);
  res.render('form', { title: 'Registration form' });
});



module.exports = router;