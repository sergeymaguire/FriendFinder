let express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    app = express(),
    PORT = process.env.PORT || 3000,
    apiRoutes = require('./app/routing/apiRoutes.js'),
    htmlRoutes = require('./app/routing/htmlRoutes.js');


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

    apiRoutes(app); 
    htmlRoutes(app);
    

app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
  });
  