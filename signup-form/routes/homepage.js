var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login to Doodlebob' });
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage', { title: 'Home Page'});
});

router.post("/insert", function(req, res, next) {
  const { name,time1, time2, time3, time4,time5,time6,time7,time8,time9,time10 } = req.body;

  // 1. Validate the user data
  // 2. Subscribe the user to the mailing list
  // 3. Send a confirmation email

  res.render("homepage", {
    title: "Successfully Added",
    name,
    email
  });
});

module.exports = router;
