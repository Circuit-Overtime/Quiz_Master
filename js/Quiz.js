class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  question.hide();
  background("cyan");
  fill("blue");
  textSize(30);
  text("Result", 340,50);


  Contestant.getPlayerInfo();
  if(allContestants !== undefined)
{   
  debugger;
  var display_Answers = 230;
  fill("blue");
  textSize(20);
  text("Correct Answers are Highlighted With Green", 130,230);

  for (var plr in allContestants)
  {
 debugger;
    var correctAns = "2";
    if(correctAns === allContestants[plr].answer)
    fill("green");
    //text(allContestants[plr].name + "Right Answer is 2", 230, 130);
    else
   fill("red");
    
    display_Answers += 30;
    textSize(20)
    fill
    text(allContestants[plr].name + ":" + allContestants[plr].answer, 230, 270); 

  }
}


}

}
