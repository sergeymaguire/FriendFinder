function apiRoutes(app) {
    app.get('/api/friends', function (req, res) {
      res.json(friendsData);
    }); 
  }

  module.exports = apiRoutes;