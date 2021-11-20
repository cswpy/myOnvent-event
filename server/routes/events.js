const express = require('express');
const moment = require('moment');

const eventRoutes = express.Router();

const dbo = require('../db/conn');

eventRoutes.route('/view').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  const pipeline = [
    {
      '$sort': {
        'createdAt': -1
      }
    }
  ];

  dbConnect
    .collection('events')
    .aggregate(pipeline)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching events!');
      } else {
        res.json(result);
      }
    });
});

eventRoutes.route('/register').post(function (req, res) {
  const dbConnect = dbo.getDb();
  console.log(req.body);

  const startDate = moment(req.body.startDate, 'YYYY-MM-DD');
  const endDate = moment(req.body.endDate, 'YYYY-MM-DD');

  if(!startDate.isValid() || !endDate.isValid() || startDate > endDate){
    res.status(400).send('Error: Invalid date(s)');
  }else{
    const matchDocument = {
      eventName: req.body.eventName,
      eventLocation: req.body.eventLocation,
      startDate: startDate.toDate(),
      endDate: endDate.toDate(),
      createdAt: new Date(),
    };

    dbConnect
    .collection('events')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting events!');
      } else {
        console.log(`Added a new event with id ${result.insertedId}`);
        res.status(204).send(`Successfully inserted an event with id ${result.insertedId}`);
      }
    });

  }

});

eventRoutes.route('/clear').get(function (req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
  .collection('events')
  .deleteMany({}, function (err, result) {
    if (err) {
      res.status(400).send('Error deleting events!');
    } else{
      console.log(`Cleared ${result.deletedCount} events.`);
      res.status(204).send(`Successfully deleted ${result.deletedCount} events`);
    }
  });
});

module.exports = eventRoutes;
