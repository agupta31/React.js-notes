var gulp=require("gulp"),
    gulpUtil=require("gulp-util"),
    reactify=require("reactify"),
    browserify=require("browserify"),
    source=require("vinyl-Source-Stream"),
    watchify=require("watchify");

//creating my bundler obejct which is responsible for running browserify on my base code
gulp.task("default",function(){
     
      var bundler=watchify(browserify({
           
            entries:["./src/app.jsx"],
            transform:[reactify],
            extensions:[".jsx"],
            debug:true,
            cache:{},
            packageCache:{},
            fullPaths:true
            
      }));
    
      //build funtion which executes my build file
      function build(file){
            if(file)gulpUtil.log("recompiling"+file);
            return bundler
               .bundle()
               .on("error",gulpUtil.log.bind(gulpUtil,"browserfiy error"))
               .pipe(source("main.js"))
               .pipe(gulp.dest("./"));
          
          } 
    
      build();
      bundler.on("update",build);
    
    
});