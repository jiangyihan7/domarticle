//为文档引用的每段文献节选显示为一份“文献来源链接”
function displayCitations() {
    if(!document.getElementsByTagName) return false;
    if(!document.createTextNode) return false;
    if(!document.createElement) return false;
    //取得所有引用
    var quotes = document.getElementsByTagName("blockquote");
    for (var i=0;i<quotes.length;i++){
        //若没有cite属性，继续循环
        if (!quotes[i].getAttribute("cite")) continue;
        //保存cite属性
        var url = quotes[i].getAttribute("cite");
        //把所有元素节点找出来
        var quoteChildren = quotes[i].getElementsByTagName("*");
        //若没有元素节点，继续循环
        if (quoteChildren.length<1) continue;
        //取得引用中最后一个元素节点
        var elem = quoteChildren[quoteChildren.length-1];
        //创建标记
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        //上标
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //把标记添加到引用中的最后一个元素节点
        elem.appendChild(superscript);

    }
}
addLoadEvent(displayCitations);