function moveMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    var lpox=parseInt(elem.style.left);
    var tpox=parseInt(elem.style.top);
    if(lpox == 200 && tpox == 100)return true;
    if(lpox<200)lpox++;
    if(lpox>200)lpox--;
    if(tpox<100)tpox++;
    if(tpox>100)tpox--;
    elem.style.left = lpox + "px";
    elem.style.top = tpox + "px";
    movement = setTimeout("moveMessage()",10);
}

function moveElement(element_ID,final_l,final_t,interval) {
    if(!document.getElementById) return false;
    if(!document.getElementById(element_ID))  return false;
    var elem = document.getElementById(element_ID);
    var lpox = parseInt(elem.style.left);
    var tpox = parseInt(elem.style.top);
    if(lpox == final_l && tpox == final_t){
        return true;
    }
    if(lpox<final_l)lpox++;
    if(lpox>final_l)lpox--;
    if(tpox<final_t)tpox++;
    if(tpox>final_t)tpox--;
    elem.style.left = lpox +"px";
    elem.style.top = tpox + "px";
    var repeat = "moveElement('" + element_ID +"'," + final_l + "," +final_t +"," + interval + ")";
    movement = setTimeout(repeat,interval)
}
function positionMessage() {
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveElement("message",125,25,20);
}
addLoadEvent(positionMessage);