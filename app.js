/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 50(default) can be changed points on GLOBAL score wins the game

*/


var player , currentScore , isPlaying , totalScore;

function init(){
    isPlaying=true;
    totalScore = [0,0];
currentScore = 0;
player = 0
document.querySelector('#dice1').style.display = 'none';
document.querySelector('#dice2').style.display = 'none';
document.querySelector('#current-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#name-0').textContent = "Player 1";
document.querySelector('#name-1').textContent = "Player 2";
document.querySelector('.player-1-panel').classList.remove("winner");
document.querySelector('.player-0-panel').classList.remove("winner");
document.querySelector('.player-0-panel').classList.remove("active");
document.querySelector('.player-1-panel').classList.remove("active");
document.querySelector('.player-0-panel').classList.add("active");



}

init();

//new game button
document.querySelector('.btn-new').addEventListener('click' , init);

//roll dice button

document.querySelector('.btn-roll').addEventListener('click' , function(){
    if(isPlaying){
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector('#dice1').style.display = 'block';
        document.querySelector('#dice2').style.display = 'block';
        document.querySelector('#dice1').src = 'dice-'+ dice1 +'.png';
        document.querySelector('#dice2').src = 'dice-'+ dice2 +'.png';
        
        
        if(dice1!==1 && dice2!==1){
            currentScore+=dice1+dice2;
            document.querySelector('#current-'+player).textContent = currentScore;
            
            
        }else{
           
           changePlayer();

        }
    }
});

function changePlayer(){
    document.querySelector('#current-'+player).textContent = '0';
    currentScore = 0;
    player === 0 ? player = 1 : player = 0;
    
    document.querySelector('.player-1-panel').classList.toggle("active");
    document.querySelector('.player-0-panel').classList.toggle("active");

    

}


document.querySelector('.btn-hold').addEventListener('click' , function(){
    if(isPlaying){
        totalScore[player] += currentScore;
        document.querySelector('#score-'+player).textContent = totalScore[player];  
        
        var winningScore = document.querySelector('.winn').value;
        var finalScore;
        if(winningScore){
            finalScore = winningScore;
        }
        else{
            finalScore = 50;
        }

        console.log(finalScore);


        if(totalScore[player] >= finalScore){
            isPlaying=false;
            document.querySelector('.player-1-panel').classList.remove("active");
            document.querySelector('.player-0-panel').classList.remove("active");
            document.querySelector('.player-'+player+'-panel').classList.add("winner");
            document.querySelector('#name-'+player).textContent = "Winner!";
            document.querySelector('#dice1').style.display = 'none';
            document.querySelector('#dice2').style.display = 'none';
            
            
            
        }else{
        changePlayer();
        }
    }
})


