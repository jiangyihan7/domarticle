//为文档所支持的快捷键显示为一份“快捷键清单”
function displayAccessKey() {
    if(!document.getElementsByTagName) return false;
    //取得文档所有链接
    var links = document.getElementsByTagName("a");
    //保存访问键
    var akeys = new Array()
    for (var i=0;i<links.length;i++){
        if(!links[i].getAttribute("accesskey")) continue;
        //取得accesskey的值
        var key = links[i].getAttribute("accesskey");
        //取得链接文本
        var key_text = links[i].lastChild.nodeValue;
        akeys[key]=key_text;
    }
    //创建列表
    var list = document.createElement("ul");
    for(var i in akeys){
        var text = akeys[i];
        var str = i + ":" + text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    //创建标题
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLoadEvent(displayAccessKey);