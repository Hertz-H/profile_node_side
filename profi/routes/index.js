var express = require('express');
var router = express.Router();
const app = express();
/* GET home page. */
app.set("view engine","ejs");
router.get('/', function(req, res, next) {
  res.write('profile');
  res.end();
  console.log("start")
});

module.exports = router;
