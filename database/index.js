const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gamedb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const Schema = mongoose.Schema({
  'id': Number,
  'name': String,
  'description': String,
  'videoURL': String,
  'mainImageURL': String,
  'logoURL': String,
  'carouselImagesURL': String,
  'recentReviews': String,
  'allReviews': String,
  'releaseDate': String,
  'developer': String,
  'publisher': String,
  'tags': Array
});

const games = mongoose.model('games', Schema);

const getGame = function(gameId, callback) {
  games.find({id: gameId}).exec((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}


module.exports.getGame = getGame;
