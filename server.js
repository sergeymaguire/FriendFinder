let express = require("express"),
    path = require("path"),
    app = express(),
    PORT = process.env.PORT || 3000;

    

app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
  });