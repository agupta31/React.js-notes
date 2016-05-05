var React=require("react");
var Button=React.createClass({
    
          
          
       render:function(){
           
             return <button onClick={this.props.whenClicked} className="btn btn-info">{this.props.name}</button>
       }
    
     
});
module.exports=Button;