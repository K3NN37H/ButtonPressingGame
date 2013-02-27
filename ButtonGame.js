$("#startgame").click(startClick);
var ticker = 0;
var timerLength = 60;
var timer;
var timeClock;
var timeRemaining = timerLength;
var score = 0;
var highscore = 0;
var numButtons = 6;
var largestnumber = 0 ;
var multiplier = 1;

function startClick()
{    
    $("#startgame").hide();
    $("#gamearea").show();
    //$("body").append('<p id="score">Score: '+score+'</p>');
    for(var i = 0;i<numButtons;i++)
    {
        buttonMaker();
    }
    timer = window.setTimeout(endGame, timerLength*1000);
    timeClock = window.setInterval(function () {
        timeRemaining -= 1;
        $("#timeClock").text("Remaining: "+timeRemaining);
    }, 1000);
    /**hiiiiii**/
}

function buttonMaker()
{   
    do
    {
        var randomnumber= Math.round(Math.random()*30);  
    }    
    while(randomnumber == largestnumber);
    if (randomnumber>largestnumber)
    { 
         largestnumber=randomnumber;
    }
        
    var left=Math.random()*80, top = Math.random()*80, size=Math.random()*15+5;
    $("#gamearea").append("<button id="+ticker+">"+randomnumber+"</button>");
    $("#"+ticker).css("position", "absolute");
    $("#"+ticker).css("left",left+"%");
    $("#"+ticker).css("top",top+"%");
    $("#"+ticker).css("height",size+"%");
    $("#"+ticker).css("width", size+"%");
    $("#"+ticker).css("width", size+"%");
    $("#"+ticker).css("min-height", "30px");
    $("#"+ticker).css("min-width", "30px");
    //$("style").append("#"+ticker+"{position:absolute;left:"+left+"%;top:"+top+"%;width:"+size+"%;height:"+size+"%;}");
    //var button = document.getElementbyID(ticker);
    
    $("#"+ticker).click(gameButtonClick);
    ticker++;
}

function gameButtonClick(event)
{
    //$("#test").text("moooo");
    var buttonNum = parseInt($(this).text());
    if (buttonNum == largestnumber)
    {
        score+=parseInt(20*numButtons*multiplier);  
        $("#score").text("Score: "+score);
        multiplier+=.2;
    }
    else
    {
        score-=parseInt(50*numButtons*multiplier); 
        if(score<0)
        {
            score=0;
        }
        $("#score").text("Score: "+score);
        if(multiplier>1.5)
        {
            multiplier-=.4;
        }
        
    }
    $("#gamearea").empty();
    for(var i = 0;i<numButtons;i++)
    {
        buttonMaker();
    }
}

function endGame()
{
    $("#gamearea").hide();
    if (score > highscore)
    {
        highscore = score;
        $("#test").text("High Score: "+highscore);
    }
    window.clearInterval(timeClock);
    timeRemaining = timerLength;
    $("#startgame").show();
    alert("ded");
}





















