var x = document.getElementsByClassName("hours")[0].innerHTML = "00";
var y = document.getElementsByClassName("minites")[0].innerHTML = "00"
var z = document.getElementsByClassName("seconds")[0].innerHTML = "00"
// function timer(){
//     var date = new Date();
//     x.innerHTML = date.getHours();
//     y.innerHTML = date.getMinutes();
//     z.innerHTML = date.getSeconds();
// }
// var inter = setInterval(timer,1000);
var sec;
var min;
var hor;
sec = parseInt(z)
min = parseInt(y)
hor = parseInt(x)

function start(){
    // sec += 1
    // var secc = sec.toString();
    // console.log(secc)
    var v = parseInt(document.getElementsByClassName("seconds")[0].innerHTML)
    if(v < 10){
        document.getElementsByClassName("seconds")[0].innerHTML = "0" + (parseInt(document.getElementsByClassName("seconds")[0].innerHTML) + 1).toString()
    }
    else{
        document.getElementsByClassName("seconds")[0].innerHTML = (parseInt(document.getElementsByClassName("seconds")[0].innerHTML) + 1).toString()

    }
    // ent.getElementsByClassName("seconds")[0].innerHTML) + 1).toString()
    
}

function work(){
    var inter = setInterval(start,1000)
}
function stopp(){
    clearInterval(inter);
}
function reset(){
    clearInterval(inter);
    x.innerHTML = "00";
    y.innerHTML = "00";
    z.innerHTML = "00";
}
