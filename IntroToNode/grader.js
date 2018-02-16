function average(score){
    // add all scores
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    // divide by total numbers
    var avg = total / score.length;
    // round
    return Math.round(avg);
};

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 59];
console.log(average(scores2)); // should return 66