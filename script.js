'use strict';
const secretnumber=(Math.trunc(Math.random()*20)+1);
var score=20;
var highscore=0;



document.querySelector('.check').addEventListener('click',function()
{
const guess =Number(document.querySelector('.guess').value);
if(!guess)
{
    document.querySelector('.message').textContent='⛔ No Number';
}

    if(guess==secretnumber)
    {
        
        document.querySelector('.message').textContent=' 👍 Correct Number ';
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
          if(highscore<score)
    {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
         }
     if(guess>secretnumber)
    {
        if(score>0)
        {
        document.querySelector('.message').textContent='😖 Too High ! ';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent='🥺 You Lost the game !';

        }
    }
    if(guess<secretnumber && secretnumber!=0)
    {
        if(score>0)
        {
    document.querySelector('.message').textContent='😕 Too Low !';
    score--;
    document.querySelector('.score').textContent=score;
     }
    else
    {
        document.querySelector('.message').textContent='🥺 You Lost the game !';

    }

    }

}
);
document.querySelector('.again').addEventListener('click',function()
{
    const secretnumber=(Math.trunc(Math.random()*20)+1);
    score=20;
    document.querySelector('.message').textContent=' Start guessing... ';
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value=' ';
 }



);