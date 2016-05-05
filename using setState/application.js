  var target=document.querySelector(".target");
     
          var content={
          
                   thumbnailData:[
                   
                                {
                                  name:"react.js",
                                  title:"learn react",
                                  imageUrl:"http://devstickers.com/assets/img/pro/cew3.png"
                                  
                                 },
                                
                                 {
                                  name:"angular.js",
                                  title:"learn angular",
                                  imageUrl:"https://avatars0.githubusercontent.com/u/6200624?v=3&s=400"
                                 },
                                 
                                 {
                                  name:"gulp.js",
                                  title:"learn gulp",
                                  imageUrl:"http://www.w3schools.com/angular/pic_angular.jpg"
                                 }
                            
                               ]
              
                         }
           
            var element=React.createElement(ThumbnailList,content);
            
            ReactDOM.render(element,target);
        
  
       var Button=React.createClass({displayName: "Button",
       
           render:function(){
           
               return(
                     React.createElement("button", {className: "btn btn-info"}, this.props.name)
                 )
           }
       });
 var Thumbnail=React.createClass({displayName: "Thumbnail",
        
            render:function(){
            
            
               return (
               React.createElement("div", {className: "col-sm-6 col-md-4"}, 
                      React.createElement("div", {className: "thumbnail"}, 
                        React.createElement("img", {src: this.props.imageUrl}), 
                        
                         React.createElement("div", {className: "caption"}, 
                         
                           React.createElement("h1", null, this.props.title)
                         
                         ), 
                         
                         React.createElement(Button, {name: this.props.name})
                      
                      )
                      
                )      
                  )
            }
        });   
        
var ThumbnailList=React.createClass({displayName: "ThumbnailList",
        
           render:function(){
             var list=this.props.thumbnailData.map(function(thumbData){
               return React.createElement(Thumbnail, React.__spread({},  thumbData))
             
              
                          });
               
               return (
                  
                  React.createElement("div", null, 
                  list
                  )
                )
              
           
                 }
                 
                });
           
              
    