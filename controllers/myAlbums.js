const axios = require('axios')

const getMyAlbums = (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(({ data }) => {
      res.render('myAlbums', { albums: data.slice(0, 10) })
    })
    .catch(error => {
      res.render('myAlbums', { albums: [] })
    })
}

module.exports = {
  getMyAlbums
}