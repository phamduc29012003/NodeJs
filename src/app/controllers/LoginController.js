const User = require("../models/Course").User;


class LoginController {
  login(req, res) {
      res.render('login/login',{layout: false});
  }
  loginSuccess(req,res) {
    console.log(req.body.email)
    User.findOne(req.body.email)
    .then
    res.render('home');
  }
  //[GET] /news/:slug
  register(req, res) {
      res.send('â');
  }
   //[POST] /news/:slug
  newAcc(req, res) {
    const user = new User(req.body)
    user.save()
    .then(()=>res.redirect('back'))
    .catch()
}
}

module.exports = new LoginController();
