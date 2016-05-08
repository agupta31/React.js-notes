var React=require("react");
var Button=require("./button");
var List=require("./list");

var DropDown=React.createClass({
     handleClickEv:function(){
         this.setState({open:!this.state.open});
            
     },
    getInitialState:function(){
        
        return{
            open:false,
            
        }
    },
    handleSelectionEv:function(item){
      
       this.setState({open:false,
                      itemName:item,
                    
                      
                     });
            
       
        
      },
      render:function(){
           
          
           return (
           
                   <div className="dropdown">
                         <Button name={this.state.itemName||this.props.name} handleClick={this.handleClickEv}/>
                 <List menu={this.props.menu} getState={this.state.open} handleSelection={
                this.handleSelectionEv} />
    
                    </div>       
                   
           )
      }
});

module.exports=DropDown;