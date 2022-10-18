var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/myalbums');
  }
  else {
    res.redirect('/login')
  }
});

module.exports = router;
