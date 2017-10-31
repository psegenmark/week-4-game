  function getRandomArbitrary(){
      return Math.floor(Math.random() * (120-19) + 19);
  }
  

  function crystal(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
  }

  var wins = 0;
  var losses = 0;
  var crystal1 = crystal(1, 12);
  var crystal2 = crystal(1, 12);
  var crystal3 = crystal(1, 12);
  var crystal4 = crystal(1, 12);

  var totalScore = 0;
  

  function ifs(){
    if(totalScore === targetNumber){
        alert("You Win!");
        wins++;
        $("#wins").text(wins);
        reset();
    }
    else if (totalScore > targetNumber) {
        alert("You Lose!")
        losses++;
        $("#losses").text(losses);
        reset();
    }
    }

  var targetNumber = (getRandomArbitrary());
  $("#number-to-guess").text(targetNumber);
  
  document.getElementById("crystal1").onclick = function() {
    totalScore += crystal1;
    console.log(totalScore);
    $("#totalScore").text(totalScore);
    ifs();
      };
  document.getElementById("crystal2").onclick = function() {
    totalScore += crystal2;
    console.log(totalScore);
    $("#totalScore").text(totalScore);
    ifs();
    };
  
  document.getElementById("crystal3").onclick = function() {
    totalScore += crystal3;
    console.log(totalScore);
    $("#totalScore").text(totalScore);
    ifs();
    };
  
  document.getElementById("crystal4").onclick = function() {
    totalScore += crystal4;
    console.log(totalScore);
    $("#totalScore").text(totalScore);
    console.log( targetNumber)
    ifs();

    }

    function reset(){
    totalScore = 0;
    targetNumber = 0;
    $("#totalScore").text(totalScore);
    targetNumber = (getRandomArbitrary());
    $("#number-to-guess").text(targetNumber);
    }