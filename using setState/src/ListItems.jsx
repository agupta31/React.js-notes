var React=require("react");
var ListItems=React.createClass({
    
       render:function(){
           
             return (
                 <li>{this.props.item}</li>
              )
       }
});

module.exports=ListItems;