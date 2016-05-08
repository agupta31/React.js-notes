var React=require("react");
var ListItems=require("./ListItems");

var List=React.createClass({
    
       handlelistEv:function(item){
            
       
           this.props.handleSelection(item);
           
       },
        
       render:function(){
            listItems=this.props.menu.map(function(menuItems){
                 return <ListItems item={menuItems} handlelist={this.handlelistEv}/>
           }.bind(this));
           var listState=this.props.getState;
//           var classState=this.props.classState;
           console.log(listState);
             return(
                 <ul className={"dropdown-menu " + (listState?"show" :"")}>
                     {listItems}
                 </ul>
                
              )
       }
});

module.exports=List;