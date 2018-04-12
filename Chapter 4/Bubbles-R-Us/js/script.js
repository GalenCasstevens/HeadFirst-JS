var numScores = 0;
var highestScore = 0;
var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];
var highestScores = [];
var highestScoresOutput = "Solutions with highest score: ";

for(var i = 0; i < scores.length; i++) {
  console.log("Bubble solution #" + i + " score: " + scores[i]);
  numScores++;
  if(highestScore < scores[i]) {
    highestScore = scores[i];
  }
}

for(var i = 0; i < scores.length; i++) {
  if(scores[i] === highestScore) {
    highestScores.push(i);
  }
}

for (var i = 0; i < highestScores.length; i++) {
  if(i !== 0) {
    highestScoresOutput += ", ";
  }

  highestScoresOutput += "#" + highestScores[i];
}

function getMostCostEffectiveSolution(scores, costs, highestScore) {
  var lowestCost = 100;
  var index;

  for(var i = 0; i < scores.length; i++) {
    if(scores[i] === highestScore) {
      if(lowestCost > costs[i]) {
        index = i;
        lowestCost = costs[i];
      }
    }
  }

  return index;
}

console.log("");
console.log("Bubbles tests: " + numScores);
console.log("Highest bubble score: " + highestScore);
console.log(highestScoresOutput);
console.log("Most cost effective bubble solution: #" + getMostCostEffectiveSolution(scores, costs, highestScore));
