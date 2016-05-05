var React=require("react");
var ListItems=require("./ListItems");

var List=React.createClass({
    
       render:function(){
              listItems=this.props.items.map(function(item){
                       return <ListItems item={item}/>
              });
             var state1=this.props.getState;
           console.log(state1);
             return(
                       <ul className={"dropdown-menu " + (state1?"show" :"")}>
                        {listItems} 
                       </ul>
                 
                  )
       }
});

module.exports=List;