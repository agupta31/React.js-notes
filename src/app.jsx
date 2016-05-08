var React=require("react");
var Dropdown=require("./dropDown");


var items={
          name:"food menu",
          menu:[
              "biryani",
              "rosogolla",
              "chicken kasha"  
          ]
}

var target=document.getElementById("target");
var element=React.createElement(Dropdown,items);

ReactDOM.render(element,target);