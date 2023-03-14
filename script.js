function label(tagname,atttname,attvalue,content){
    var label=document.createElement(tagname);
    label.innerHTML=content;
    label.setAttribute(atttname,attvalue);
    
    return label;
}
function inputs(tagname,attname,attvalue,attname1,attvalue1,attname2,attvalue2){
    var inputs=document.createElement(tagname);
    inputs.setAttribute(attname, attvalue);
    inputs.setAttribute(attname1, attvalue1);
    inputs.setAttribute(attname2, attvalue2);
    return inputs;
}
function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
}
var Firstname=label("label","for","firstname","Firstname");
var br=linebreak("br");
var input=inputs("input","type","text","name","firstname","id","firstname");
var br1=linebreak("br");
var email=label("label","for","email","Email");
var br2=linebreak("br");
var input1=inputs("input","type","email","name","email","id","email");
var br3=linebreak("br");
var password=label("label","for","password","Password");
var br4=linebreak("br");
var input2=inputs("input","type","password","name","password","id","password");
var br5=linebreak("br");
document.body.append(Firstname,br,input,br1,email,br2,input1,br3,password,br4,input2);
