var path = require('path');

function htmlRoutes(app) {


  app.get('/survey', function (req, res) {
    console.log("survey");
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  app.get('/friends', function (req, res) {
  
    res.sendFile(path.join(__dirname + '/../public/friends.html'));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });


}

module.exports = htmlRoutes;