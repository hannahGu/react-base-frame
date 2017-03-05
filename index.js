var Koa = require('koa');
var path = require('path');
var staticCache = require('koa-static-cache');
var app = new Koa();
app.use(staticCache(path.join(__dirname,'dist')));
app.listen(4000,function(){
  console.log("react-app-self listen at 4000!");
});
