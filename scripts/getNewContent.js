function getNerContent() {
    var request=getHTTPObject();
    if(request){
        request.open("GET","example.txt",true);
        request.onreadystatechange=function(){
            if (request.readyState==4){
                alert("response received");
                var para=document.createElement("p");
                var txt=document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("your browser doesn\'t support XMLHTTPRequest");
    }
    alert("done");
}
addLoadEvent(getNerContent);