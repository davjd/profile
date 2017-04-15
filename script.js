function randColor(min,max)
{
    if(Math.floor(Math.random()*(max-min+1)+min) % 2 == 0){
        document.body.style.backgroundColor = "blue";
    }
}