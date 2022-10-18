const getLogin = (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/myAlbums');
  }
  else {
    res.render('login');
  }
}

const postLogin = (req, res) => {
  const { email, password } = req.body;
  const dummyEmail = "admin@zingat.com";
  const dummyPassword = "Admin*123";
  if(email === dummyEmail && password === dummyPassword) {
    req.session.loggedIn = true;
    res.redirect('/myAlbums');
  }
  else {
    res.render('login', { email, password, errorMessage: 'Email or password is incorrect!' })
  }
}

module.exports = {
  getLogin,
  postLogin
}