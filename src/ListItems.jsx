var React=require("react");

var ListItems=React.createClass({
      getItem:function(){
         
          this.props.handlelist(this.props.item);
          
      },
    
       render:function(){
            return <li >
                <a onClick={this.getItem}> {this.props.item}</a>
        </li>
       }
});

module.exports=ListItems;