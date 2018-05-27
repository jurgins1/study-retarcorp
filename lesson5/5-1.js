var elements = document.body.childNodes;
var el=0; var text=0; var comment =0;
for(var i=0;i<elements.length;i++){
    var elem = elements[i];
    if(elem.nodeType===1){
        el++;
    }else if(elem.nodeType===3){
        text++;
    }else if(elem.nodeType===8){
        comment++;
    }else{
        console.log(elem.nodeType);
    }
}
console.log("Элементов: "+el+", Teкстовых узлов: "+text+" , Комментариев: "+comment);