var React=require("react");

       var Button=React.createClass({
       
           render:function(){
           
               return(
                     <button className="btn btn-info">{this.props.name}</button>
                 )
           }
       });

module.exports=Button;