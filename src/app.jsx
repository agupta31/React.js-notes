var React=require("react");
var ThumbnailList=require("./thumbnailList");

var target=document.querySelector(".target");
     
          var content={
          
                   thumbnailData:[
                   
                                 {
                                  name:"react.js",
                                  title:"learn react",
                                  imageUrl:"http://devstickers.com/assets/img/pro/cew3.png"
                                  
                                 },
                                
                                 {
                                  name:"gulp.js",
                                  title:"learn gulp",
                                  imageUrl:"https://avatars0.githubusercontent.com/u/6200624?v=3&s=400"
                                 },
                                 
                                 {
                                  name:"angular.js",
                                  title:"learn angular",
                                  imageUrl:"http://www.w3schools.com/angular/pic_angular.jpg"
                                 }
                            
                               ]
              
                         }
         
           
            var element=React.createElement(ThumbnailList,content);
            
            ReactDOM.render(element,target);
        