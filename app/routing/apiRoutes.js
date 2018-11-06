let friendsData = require('../data/friends.js');

function apiRoutes(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res) {
        let friendIndex = getBestMatch(req.body.scores);
        //console.dir("req " + req);
        //console.log("req.scores " + req.body.scores);
        res.json(friendsData[friendIndex]);
    });

}

//return index of best match to friendsData
function getBestMatch(scores) {
    var total = 0,
        bestTotal = 99999,
        bestIndex = 0;
    for(var i = 0; i < friendsData.length; i++) {
        //console.log("friendsData[i] " + friendsData[i].scores);
        //console.log("scores " + scores);
        total = matchFriends(friendsData[i], scores);
        if(total < bestTotal) {
            //console.log("bestTotal " + bestTotal);
            bestTotal = total;
            bestIndex = i;
        }
    }
    return bestIndex;
}

function matchFriends(friend, scores) {
    var total = 0;
    for(var i = 0; i < scores.length; i++) {
      var score = parseInt(scores[i]);
        total = total + Math.abs(score - friend.scores[i]);
    }
    //console.log("scores " + scores);
    return total;

}






module.exports = apiRoutes;