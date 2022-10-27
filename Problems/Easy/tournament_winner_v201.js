const HOME_TEAM_WINS = 1;

function tournamentWinner(competitions, results) {
  let highTeam = "";
  let teamResults = { [highTeam]: 0 };

  for (let i=0; i<competitions.length; i++){
    const winner = results[i] === HOME_TEAM_WINS ? competitions[i][0] : competitions[i][1];

    if (teamResults[winner]) {
      teamResults[winner] += 3;
    } else {
      teamResults[winner] = 3;
    }

    if (teamResults[winner] > teamResults[highTeam]) highTeam = winner;
  };

  return highTeam;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;

//Upgrade: track games played by team for testing
//  teamResults team name keys now point to objects w/ game count and score, update getWinner

tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ],
  result = [0, 0, 1]
);