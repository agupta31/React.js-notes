var React=require("react");
var Button=require("./button");
var List=require("./list");
var visible;
var Dropdown=React.createClass({
         handleClick:function(){
             //set state not only sets the value of open it also forces our component to re render which otherwise would not have ben possible
           this.setState({open:!this.state.open});
             
         },
    //get inital state is invoked only once whne the component is first created
    getInitialState:function(){
        
         return {
             open:false
         }
       },
        render:function(){
              
              return (
                 
                <div className="dropdown">
                     <Button whenClicked={this.handleClick} name={this.props.name}/>
              
                     <List items={this.props.items} getState={this.state.open}/>
        
                  </div>
                   
               )
          }
});

module.exports=Dropdown;