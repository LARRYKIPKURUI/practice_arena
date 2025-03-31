// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
// Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats.
//  Check out the following example of the expected return value of the playerStats function:

function gameObject(){
    let obj = {
        home:{
            teamName: "Brooklyn Nets" ,
            colors: ["Black","White"],
            players: {
                "Alan Anderson" : {
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1,

                },
                "Reggie Evans" : {
                    number : 30,
                    shoe : 14,
                    points : 12 ,
                    rebounds : 12 ,
                    assists : 12,
                    steals :12 ,
                    blocks : 12,
                    slamDunks :7 ,

                },
                "Brook Lopez" : {
                    number : 11,
                    shoe : 17,
                    points : 17 ,
                    rebounds : 19 ,
                    assists : 10,
                    steals :3 ,
                    blocks : 1,
                    slamDunks :15 ,

                },
                "Mason Plumlee" : {
                    number : 1,
                    shoe : 19,
                    points : 26 ,
                    rebounds : 12 ,
                    assists : 6,
                    steals :3,
                    blocks : 8,
                    slamDunks :5 ,

                },
                "Jason Terry" : {
                    number : 31,
                    shoe : 15,
                    points : 19 ,
                    rebounds : 2 ,
                    assists : 2,
                    steals :4,
                    blocks : 11,
                    slamDunks :1 ,

                },
            }
        },


        away:{
            teamName: "Charlotte Hornets" ,
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien" : {
                    number : 4,
                    shoe : 18,
                    points : 10,
                    rebounds : 1,
                    assists : 1,
                    steals : 2,
                    blocks : 7,
                    slamDunks : 2,

                },
                "Bismak Biyombo" : {
                    number : 0,
                    shoe : 16,
                    points : 12,
                    rebounds : 4,
                    assists :7 ,
                    steals : 7,
                    blocks : 15,
                    slamDunks : 10,

                },
                "DeSagna Diop ": {
                    number : 2 ,
                    shoe :14 ,
                    points : 24,
                    rebounds :12 ,
                    assists : 12,
                    steals :4 ,
                    blocks : 5,
                    slamDunks : 5,

                },
                "Ben Gordon" : {
                    number : 8,
                    shoe :15 ,
                    points :33 ,
                    rebounds : 3,
                    assists :2 ,
                    steals : 1,
                    blocks :1 ,
                    slamDunks :0 ,

                },
                "Brendan Haywood" : {
                    number :33 ,
                    shoe :15 ,
                    points : 6,
                    rebounds :12 ,
                    assists : 12,
                    steals :22 ,
                    blocks : 5,
                    slamDunks : 12,

                },
            }
        }
    }
    return obj
}

// player Numbers Function
function playerNumbers (teamName) {

    let obj = gameObject()

    let jersey = []
    if (obj.home.teamName === teamName) {
        //Traverse to home .players then pick each jersey number from each player
        jersey = Object.values(obj.home.players).map(number => number.number)
        return jersey
    }  else if (obj.away.teamName === teamName) {
        //Traverse to home .players then pick each jersey number from each player
        jersey = Object.values(obj.away.players).map(number => number.number)
        return jersey
    } else {
        console.log('Team Not found !!')
    }
}

console.log(playerNumbers('Brooklyn Nets'));
console.log(playerNumbers('Charlotte Hornets'));


//player stats

function playerStats (name) {
    let obj = gameObject();

    let homePlayer = obj.home.players[name] 
    let awayPlayer = obj.away.players[name]

    if (homePlayer) {
        return homePlayer
    } else if (awayPlayer) {
        return awayPlayer
    } else {
        console.log('Undefined')
    }

}

console.log(playerStats('Alan Anderson'));
console.log(playerStats('Jeff Adrien'));


//
