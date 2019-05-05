const router = require('express').Router();
const passport = require("passport");


router.get('', (req, res)=> {
    res.sendFile('../firebaseURL/dist/index.html');
})

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;