const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('landing')
})

app.get("/paintings", function(req, res){

  var paintings = [
        {image: "https://farm5.staticflickr.com/4723/28030729449_628313e79b_z.jpg"},
        {image: "https://farm5.staticflickr.com/4746/39809208521_6d303dbaf3_z.jpg"},
        // {image: "./assets/IMG_8578-1.JPG"}
      ];

      res.render("paintings", {paintings:paintings});

});

app.listen(3000, function(){
  console.log('listening');
});
