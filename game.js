var scores, activePlayer, roundScore, dice;

scores = [0, 0];
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
    }
});
