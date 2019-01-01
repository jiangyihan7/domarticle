function moveElement(element_ID,final_l,final_t,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(element_ID)) return false;
    var elem = document.getElementById(element_ID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.left){
        elem.style.left = "0px";
    }
    if(!elem.style.top){
        elem.style.top = "0px";
    }
    var lpox = parseInt(elem.style.left);
    var tpox = parseInt(elem.style.top);
    var dist = 0;
    if (lpox == final_l && tpox == final_t) {
        return true;
    }
    if (lpox < final_l) {
        dist = Math.ceil((final_l-lpox)/10);
        lpox += dist;
    }
    if (lpox > final_l) {
        dist = Math.ceil((lpox-final_l)/10);
        lpox -= dist;
    }
    if (tpox < final_t) {
        dist = Math.ceil((final_t-tpox)/10);
        tpox += dist;
    }
    if (tpox > final_t){
        dist = Math.ceil((tpox-final_t)/10);
        tpox -= dist;
    }
    elem.style.left = lpox + "px";
    elem.style.top = tpox + "px";
    var repeat = "moveElement('" + element_ID + "'," + final_l + "," + final_t + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}
function prepareSlideshow() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("linklist")) return false;

    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("id","preview");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("src","image/topic.gif");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
    var links = list.getElementsByTagName("a");
    //为mouseover事件添加动画效果
    links[0].onmouseover = function () {
        moveElement("preview",-210,0,10);
    };
    links[1].onmouseover = function () {
        moveElement("preview",-420,0,10);
        };
    links[2].onmouseover = function () {
         moveElement("preview",-630,0,10);
        };
}
addLoadEvent(prepareSlideshow);