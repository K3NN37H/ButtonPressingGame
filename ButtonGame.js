$("#startgame").click(startClick);
var ticker = 0;
var timer = 60;
var numButtons = 3

function startClick()
{    
    $("#startgame").css("top","150%")
    for(var i = 0;i<numButtons;i++)
    {
        buttonMaker();
    }
}

function buttonMaker()
{
    var left=Math.random()*85, top = Math.random()*85, size=Math.random()*15;
    $("body").append("<button id="+ticker+">bbbbbbbbbb</button>");
    $("#"+ticker).css("position", "absolute");
    $("#"+ticker).css("left",left+"%");
    $("#"+ticker).css("top",top+"%");
    $("#"+ticker).css("height",size+"%");
    $("#"+ticker).css("width", size+"%");
    $("#"+ticker).css("width", size+"%");
    //$("style").append("#"+ticker+"{position:absolute;left:"+left+"%;top:"+top+"%;width:"+size+"%;height:"+size+"%;}");
    //var button = document.getElementbyID(ticker);
   
    ticker++;
}    