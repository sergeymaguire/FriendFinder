let friendsData = require('../data/friends.js');
function apiRoutes(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData[0]);
      }); 
  
    app.post('/api/friends', function (req, res) {
      console.dir("req " + req);
      //console.log("req.scores " + req.scores);
      res.json(friendsData[0]);
    }); 

  }

  
  
  
  
  
  
  
  module.exports = apiRoutes;