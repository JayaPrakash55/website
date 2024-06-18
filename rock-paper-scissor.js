const score = {
    wins : 0,
    lose : 0,
    ties : 0
};

  updateScoreElement();


function playGame(playerMove){
   
    pickComputerMove();

                      
let result = '';


if(playerMove==='scissor'){

if(computerMove === 'rock')
{
    result = 'you lose';
}
else if (computerMove === 'paper')
{
    result = 'you win';
}
else if(computerMove === 'scissor')
{
    result = 'tie';
}
}


else if(playerMove === 'paper'){

if(computerMove === 'rock')
{
    result = 'you win';
}
else if (computerMove === 'paper')
{
    result = 'tie';
}
else if(computerMove === 'scissor')
{
    result = 'you lose';
}
}



else if(playerMove ==='rock'){
    if(computerMove === 'rock')
    {
        result = 'tie';
    }
    else if (computerMove === 'paper')
    {
        result = 'you lose';
    }
    else if(computerMove === 'scissor')
    {
        result = 'you win';
    }
        }

    if(result === 'you win'){
        score.wins = score.wins + 1;
    }
    else if (result === 'you lose'){
        score.lose = score.lose + 1;
    }
    else if(result === 'tie'){
        score.ties = score.ties + 1;
    }

    updateScoreElement();
    
    document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-moves')
    .innerHTML = `You Chose: ${playerMove}  
       Computer Picked: ${computerMove}`;



            }
function updateScoreElement() {
    document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins}, losses:${score.lose}, ties:${score.ties}`;
}




let computerMove = '';

function pickComputerMove(){

const randomNumber = Math.random();



if(randomNumber >=0 && randomNumber < 1 / 3)
{
computerMove = 'rock';
}

else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3)
{
computerMove = 'paper';
}
else if(randomNumber >= 2 / 3 && randomNumber < 1)
{
computerMove = 'scissor';
}


}