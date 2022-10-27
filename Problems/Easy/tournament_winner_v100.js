function getResults(competitions, results) {
  let teamResults = {};

  for (let i=0; i<competitions.length; i++){
    if (results[i] === 1) {
      if (teamResults[competitions[i][0]]) {
        teamResults[competitions[i][0]] += 3;
      } else {
        teamResults[competitions[i][0]] = 3;
      }
    } else {
      if (teamResults[competitions[i][1]]) {
        teamResults[competitions[i][1]] += 3;
      } else {
        teamResults[competitions[i][1]] = 3;
      }
    }
  };

  return teamResults;
}

function getWinner(results) {
  const teams = Object.keys(results);
  let highScore = 0;
  let highTeam = "";

  for (let k=0; k<teams.length; k++){
    const score = results[teams[k]];

    if (score > highScore) {
      highScore = score;
      highTeam = teams[k];
    }
  }
  
  return highTeam;
}

function tournamentWinner(competitions, results) {
  const teamResults = getResults(competitions, results);

  return getWinner(teamResults);
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;

//Upgrade: track games played by team for testing
//  teamResults team name keys now point to objects w/ game count and score, update getWinner