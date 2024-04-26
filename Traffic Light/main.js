var i=0;
var n=5;
var cArray=["red", "yellow", "green"];

function trafficLight()
{
    var l=document.getElementsByClassName("light");

    for(var j=0; j<l.length;j++)
    {
        l[j].style.background="black";
        l[j].innerHTML = "";
    }
    l[i].style.background=cArray[i];
    if(i<l.length)
    {
        if(n>=0)
        {
            n--;
        }
    }

    if(i<l.length)
    {
        i++;
    }
    if(i==3)
    {
        i=0;
    }
}

setInterval(trafficLight,6000);