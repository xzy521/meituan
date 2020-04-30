var s=0
var shoppNode=document.getElementById("shopp");
var fat;
//加入购物车
function add(obj){
    alert("加入购物车成功")
    var i=0;i++
    s+=i;
    shoppNode.innerHTML=s;
    fat=obj.parentNode;
    var cs=fat.children[1];
    var inName=cs.children[0];
    var inNamet=cs.children[1];
    var tabNode=document.getElementById("tul");
    var trNode=tabNode.insertRow();
    trNode.insertCell(0).innerHTML="<input type='checkbox' onclick='radio(this)'>";
    trNode.insertCell(1).innerHTML=inName.innerHTML;
    trNode.insertCell(2).innerHTML=inNamet.innerHTML;
    trNode.insertCell(3).innerHTML="<input type='button' value='删除' onclick='delt(this)'>"
    payadd();
    var rowss=0;
    for(var i=trNode.length-1;i>0;i--){
        if(trNode[i].cells[0].childNodes[0].checked == true){
            rowss++;
        }
    }
    
    if(rowss==trNode.length-1){
        document.getElementById("allradi").checked = true;
        document.getElementById("alldell").disabled = false;
    }else{
        document.getElementById("allradi").checked = false;
        document.getElementById("alldell").disabled = true;
    }
}
var spN=document.getElementById("sp");
var uponeN=document.getElementById("upone")
var uperN=document.getElementById("uper")
//我的购物车
function sp(obj){
    uponeN.style.display="none"
    uperN.style.display="none"
    var fomN=document.getElementById("fom");
    fomN.style.display="inline"
}
//每一行的删除
function delt(del){
    alert("删除成功")
    var tr=del.parentNode.parentNode;
    var tb=document.getElementById("tul")
    tb.deleteRow(tr.rowIndex);
    var j=0;j++;
    s-=j
    shoppNode.innerHTML=s;
    payadd();
}
//判断全选
function allpitch(obj){
    var tabNode=document.getElementById("tul");
    var trNode=tabNode.rows;
    var ssp=parseFloat(document.getElementById("money").innerHTML)
        for(var i=trNode.length-1;i>0;i--){
            if(obj.checked){
                trNode[i].cells[0].childNodes[0].checked = true;
                var a = trNode[i].cells[2].innerHTML;
                var b = parseFloat(a.split("元")[0]);
                ssp+=b;
                document.getElementById("money").innerHTML=ssp
                document.getElementById("alldell").disabled = false
            }else{
                trNode[i].cells[0].childNodes[0].checked = false;
                document.getElementById("money").innerHTML=0;
                document.getElementById("alldell").disabled = true;

            }
        }
}
//全部删除
function alldel(){
    var msg = "您真的确定要删除吗？";  
    if (confirm(msg)==true){ 
        var tabNode=document.getElementById("tul");
        var trNode=tabNode.rows;
        for(var i=trNode.length-1;i>0;i--){
            tabNode.deleteRow(i)
        }
        document.getElementById("money").innerHTML=0;
        document.getElementById("allradi").checked = false;
        alert("删除成功");
        document.getElementById("alldell").disabled = true;
        shoppNode.innerHTML="0";
        s=0;
    }   
    payadd(); 
}
function payfo(){
    var ssp=parseFloat(document.getElementById("money").innerHTML)
    alert("总共付款"+ssp+"元")
}
//继续购物
function contin(){
    var fomN=document.getElementById("fom");
    fomN.style.display="none";
    uponeN.style.display="grid"
    uperN.style.display="grid"
}
//判断单选和全选
function radio(obj){
    var tabNode=document.getElementById("tul");
    var trNode=tabNode.rows;
    var rowss=0;
    // var a = trNode[1].cells[2].innerHTML;
    // var b = parseInt(a.split("元")[0]);
    // debugger;
    var ssp=parseFloat(document.getElementById("money").innerHTML);
    var a = obj.parentNode.parentNode.cells[2].innerHTML;
        var b = parseFloat(a.split("元")[0]);
        if(obj.checked==true){
            ssp+=b;
        }else{
            ssp-=b;
        }
        document.getElementById("money").innerHTML=ssp;
    for(var i=trNode.length-1;i>0;i--){
        if(trNode[i].cells[0].childNodes[0].checked == true){
            rowss++;
        }
    }
    
    if(rowss==trNode.length-1){
        document.getElementById("allradi").checked = true;
        document.getElementById("alldell").disabled = false;
    }else{
        document.getElementById("allradi").checked = false;
        document.getElementById("alldell").disabled = true;
    }
}
//判断购物车是否有东西
function payadd(){
    var tabNode=document.getElementById("tul");
    var trNode=tabNode.rows;
    if(trNode.length>1){
        document.getElementById("rightbo").style.display="block"
    }else{
        document.getElementById("rightbo").style.display="none"
    }
}




