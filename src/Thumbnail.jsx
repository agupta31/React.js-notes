var React=require("react");
var Button=require("./button");

var Thumbnail=React.createClass({
        
            render:function(){
            
            
               return (
               <div className="col-sm-6 col-md-4">
                      <div className="thumbnail">
                        <img src={this.props.imageUrl}/>
                        
                         <div className="caption">
                         
                           <h1>{this.props.title}</h1>
                         
                         </div>
                         
                         <Button name={this.props.name}></Button>
                      
                      </div>
                      
                 </div>      
                  )
            }
        });   
        
module.exports=Thumbnail;