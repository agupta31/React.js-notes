var React=require("react");

var Button=React.createClass({
    
    
       render:function(){
           
           return(
                <button onClick={this.props.handleClick} className="btn btn-primary">{this.props.name}</button>
            )
            
            
       }
});

module.exports=Button;