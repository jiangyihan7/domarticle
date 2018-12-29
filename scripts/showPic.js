addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

//共享onload事件
function  addLoadEvent(func) {
    var oldonload=window.onload;
    if (typeof oldonload != 'function'){
        window.onload=func;
    }else{
        window.onload = function (){
            oldonload();
            func();
        }
    }
}

//把一个节点插入到另一个节点之后
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","image/77.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("choose an image.");
    description.appendChild(desctext);
    var gallery=document.getElementById("imagegallery");
    // document.body.appendChild(placeholder);
    // document.body.appendChild(description);
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
        links[i].onclick = function () {
            return showPic(this) ? false:true;
        }
    }
}
function showPic(whichPic) {
    if(!document.getElementById("placeholder")) return false;
    var placeholder=document.getElementById("placeholder");
    var source=whichPic.getAttribute("href");
    if(placeholder.nodeName !="IMG")return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var text=whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        var description=document.getElementById("description");
        if (description.firstChild.nodeType==3){
            description.firstChild.nodeValue=text;
        }
    }
    return true;
}


// function countBodyChildren() {
//     var body_element=document.getElementsByTagName("body")[0]
//     alert(body_element.childNodes.length)
// }
//
// function popup(winUrl){
//     window.open(winUrl,"popup","width=230,height=480")
// }
// window.onload=popuplinks;
// function popuplinks() {
//     if(!document.getElementsByTagName) return false;
//     var links=document.getElementsByTagName("a");
//     for(var i=0;i<links.length;i++){
//         if(links[i].getAttribute('class')=="popup"){
//             links[i].onclick=function(){
//                 popup(this.getAttribute("href"));
//                 return false;
//             }
//         }
//
// }
// }
