//为文档所支持的缩略语显示为一份“缩略语列表”
function displayAbbreviations() {
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length<1) return false;
    var defs=new Array();
    //遍历缩略词
    for (var i=0;i<abbreviations.length;i++){
        //IE浏览器统计abbr元素的子节点个数时总会返回0，该语句让其不继续执行循环中的后续代码
        if(abbreviations[i].childNodes.length<1)continue;
        definition = abbreviations[i].getAttribute("title");
        key = abbreviations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
     var dlist = document.createElement("dl");
    for(var i in defs){
        var definition = defs[i];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(i);
        //创建定义描述
        var ddata = document.createElement("dd");
        var ddata_text = document.createTextNode(definition);
        dtitle.appendChild(dtitle_text);
        //添加到定义列表
        ddata.appendChild(ddata_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddata);
    }
    if(dlist.childNodes.length<1) return false;
    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //把标题添加到页面主体
    document.body.appendChild(header);
    //把定义列表加到页面主体
    document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);