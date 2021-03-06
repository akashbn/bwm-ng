const express = require('express');
const router = express.Router();
const Rental = require('../model/rental');
const UserCtrl = require('../controllers/user');

router.get('/secret',UserCtrl.authMiddleware,(req,res) => {
  res.json({secret: true});
});

router.get('',(req,res) => {
  Rental.find({}, (error, foundRentals) => {
          res.json(foundRentals);
  });
});

router.get('/:id', (req, res) => {
    const rentalId = req.params.id;
    Rental.findById(rentalId, (err, foundRental) => {

      if(err){
        res.status(422).send({error:[{title: 'Rental Error!', detail: 'Could not found rental!'}]});
      }

      res.json(foundRental);
    });
});

module.exports =router;
