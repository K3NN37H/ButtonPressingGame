$("#startgame").click(startClick);
var ticker = 0;
var timer = 60;
var score = 0;
var numButtons = 3;
var largestnumber = 0 ;

function startClick()
{    
    $("#startgame").css("top","150%")
    $("body").append('<p id="score">Score: '+score+'</p>');
    for(var i = 0;i<numButtons;i++)
    {
        buttonMaker();
    }
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
    $("body").append("<button id="+ticker+">"+randomnumber+"</button>");
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
    $("#test").text("moooo");
    var buttonNum = parseInt($(this).text());
    if (buttonNum == largestnumber)
    {
        score+=1;
        $("#score").text("Score: "+score);
    }
    

}






















