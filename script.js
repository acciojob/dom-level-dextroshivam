//your JS code here. If required.
let ele=document.getElementById("level");
let level=0;
while(ele.parentNode!=null){
    level++;
    ele=ele.parentNode;
}
alert(`The level of the element is: ${level}`);