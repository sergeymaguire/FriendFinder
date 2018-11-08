let friendsData = require('../data/friends.js');

function apiRoutes(app) {
    app.get('/api/friendExist', function (req, res) {
        if (friendAlreadyExist(req.body.name))
            res.json({
                result: true
            });
        else {
            addNameToList(req.body);
            res.json({
                result: false
            });
        }

    });

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });



    app.post('/api/friends', function (req, res) {
        var friendIndex = 0;
        friendIndex = getBestMatch(req.body.scores, req.body.name);
        if (!friendAlreadyExist(req.body.name)) {
            addNameToList(req.body);
         } 

       
        res.json(friendsData[friendIndex]);
    });

}

function addNameToList(body) {

    var newFriend = {
        name: body.name,
        photo: body.photo,
        scores: []
    };

    for (var i = 0; i < body.scores.length; i++) {
        newFriend.scores[i] = parseInt(body.scores[i]);
    }
    newFriend.added = true;
    friendsData.push(newFriend);
    //friendsData.push(friendsData.js)




}
//return index of best match to friendsData
function getBestMatch(scores, name) {
    var total = 0,
        bestTotal = 99999,
        bestIndex = 0;
        name = name.toLowerCase();
    for (var i = 0; i < friendsData.length; i++) {
        //console.log("friendsData[i] " + friendsData[i].scores);
        //console.log("scores " + scores);
        if(name === friendsData[i].name.toLowerCase() && ('added' in friendsData[i])) {
            continue;
        }
        total = matchFriends(friendsData[i], scores);
        if (total < bestTotal) {
            //console.log("bestTotal " + bestTotal);
            bestTotal = total;
            bestIndex = i;
        }
    }
    return bestIndex;
}



var friendAlreadyExist = function (name) {
    name = name.toLowerCase();
    for (var i = 0; i < friendsData.length; i++) {
        if (friendsData[i].name.toLowerCase() === name) {
            console.log("this already exists! " + name);

            return true;
        }
    }
    return false;

}

function matchFriends(friend, scores) {
    var total = 0;
    for (var i = 0; i < scores.length; i++) {
        var score = parseInt(scores[i]);
        total = total + Math.abs(score - friend.scores[i]);
    }
    //console.log("scores " + scores);
    return total;

}

module.exports = apiRoutes;