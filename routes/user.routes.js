const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/user/no-permission');
  }
};

router.get('/logged', (req, res) => {
  console.log(req.user);
  res.render('logged', {
    firstName: req.user.name.givenName,
    lastName: req.user.name.familyName,
    profileImg: req.user.photos[0].value,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  //   if (req.user) {
  res.render('profile');
  //   } else {
  //     res.redirect('/user/no-permission');
  //   }
});

router.get('/profile/settings', isLogged, (req, res) => {
  //   if (req.user) {
  res.render('profileSettings');
  //   } else {
  //     res.redirect('/user/no-permission');
  //   }
});

module.exports = router;
