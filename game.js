var scores, activePlayer, roundScore, dice;

scores = [5, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//document.querySelector('#score-0').textContent = 20;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;


//roll dice using anonymous function
document.querySelector('.btn-roll').addEventListener('click', function() {

    //generate random number
    dice = Math.floor(Math.random() * 6) + 1;

    //display result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //update round score if rolled dice is not 1

    if(dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        nextPlayer();
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        //roundScore = 0;
    }
});
//console.log(scores[0]);

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    //roundScore = 0;
    nextPlayer();
});

function nextPlayer() {
    document.querySelector('#current-' + activePlayer).textContent = roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}