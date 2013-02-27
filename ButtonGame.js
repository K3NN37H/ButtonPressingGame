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
var buttonCoord=[];
function startClick()
{    
    $("#startgame").hide();
    $("#gamearea").show();
    //$("body").append('<p id="score">Score: '+score+'</p>');
    for(var i = 0;i<numButtons;i++)
    {
        buttonMaker();
        
    }
    ticker=0;
    timer = window.setTimeout(endGame, timerLength*1000);
    timeClock = window.setInterval(function () {
        timeRemaining -= 1;
        $("#timeClock").text("Remaining: "+timeRemaining);
    }, 1000);
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
<<<<<<< Updated upstream
        
    var left=Math.random()*80, top = Math.random()*80, size=Math.random()*15+5;
    $("#gamearea").append('<button class="gamebutton" id='+ticker+'>'+randomnumber+'</button>');
=======
    
    var overlap=0, left, top, size;
    do 
    {
        left=Math.round(Math.random()*80);
        top= Math.round(Math.random()*80);
        size=Math.round(Math.random()*15+5);
        overlap=1;
        for(var i =0;i<ticker;i++)
        {
            if((left-3)<buttonCoord[i][0])
            {
                if((left+size+3)>buttonCoord[i][0])
                {
                    if((top-3)<buttonCoord[i][1])
                    {
                        if((top+size+3)>buttonCoord[i][1])
                        {
                            overlap=0;
                        }
                    }
                }
            }
        }
        console.log("overlap is: "+overlap);
    }while(overlap==0);
    buttonCoord[ticker]=[left+(size/2),top+size/2];
    $("#gamearea").append("<button id="+ticker+">"+randomnumber+"</button>");
>>>>>>> Stashed changes
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
    console.log("largest number on screen is "+largestnumber);
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
        score-=parseInt(10*numButtons*multiplier); 
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
    largestnumber=0;
    ticker=0;
    for(var i = 0;i<numButtons;i++)
    {
        buttonMaker();
    }
}

function endGame()
{
    $("#gamearea").hide();
    $("#gamearea").empty();
    if (score > highscore)
    {
        highscore = score;
        $("#test").text("High Score: "+highscore);
    }
    window.clearInterval(timeClock);
    timeRemaining = timerLength;
    $("#startgame").show();
    alert("Your final score is: "+score);
    score=0;
    $("#score").text("Score: "+score);
}





















