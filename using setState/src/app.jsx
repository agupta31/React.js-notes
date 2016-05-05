var React=require("react");
var Dropdown=require("./dropDown");

var target=document.getElementById("target");

var content={
       name:"news",
       items:[
            "movies",
             "sports",
             "politics",
             "halleluajh"
    
           ]
};
var element=React.createElement(Dropdown,content);

ReactDOM.render(element,target);