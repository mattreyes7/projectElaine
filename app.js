const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public/assets'));

app.get('/', function(req, res){
  res.render('landing')
})

app.get("/paintings", function(req, res){

  var paintings = [
        {image: "IMG_9410.JPG"}
      ];

      res.render("paintings", {paintings:paintings});

});

app.listen(3000, function(){
  console.log('listening');
});
