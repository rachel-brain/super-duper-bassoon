// const { template } = require("handlebars");

var topFiveUsersArray = [];
var userDataRaw = [];

getHighscores = function () {
    return fetch('/api/leaderboardsR/users')
        .then(function (response) {
            return response.json();
        })
        .then(async function (data) {
            return sortArray(data);
        })
        .catch(function () {
            console.log("Booo");
        });
}

topFiveUsers = function (userDataRaw) {
    for (i = 0; i < 6; i++) {
        topFiveUsersArray.unshift(userDataRaw[i]);
    }
    console.log(topFiveUsersArray);

}

sortArray = function (userDataRaw) {
    return userDataRaw.sort(function (a, b) {
        return b.highscore - a.highscore;
    });

}

getHighscores().then(userData => {
    userDataRaw = userData;
    topFiveUsersArray = userData.slice(0,5)
});
