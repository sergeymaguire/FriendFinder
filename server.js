let express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    app = express(),
    PORT = process.env.PORT || 3000,
    apiRoutes = require('./app/routing/apiRoutes.js'),
    htmlRoutes = require('./app/routing/htmlRoutes.js');


    dataParseExpress();
    apiRoutes(app); 
    htmlRoutes(app);
    

    function dataParseExpress() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.text());
        app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    }
      

app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
  });

