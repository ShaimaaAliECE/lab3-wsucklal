var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login to Doodlebob' });
});

router.post("/login", function(req, res, next) {
  const { password, email } = req.body;

  // 1. Validate the user data

  // 2. Subscribe the user to the mailing list
  
  // 3. Send a confirmation email

  res.render("homepage", {
    title: "Home page",
    password,
    email
  });
});

module.exports = router;
