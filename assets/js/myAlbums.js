const images = document.getElementById('images')
const preview = document.getElementById('preview')
const previewImage = document.getElementById('preview-image')

const albumLinkClicked = id => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `https://jsonplaceholder.typicode.com/albums/${id}/photos`, true);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        images.innerHTML = ''
        preview.innerHTML = ''
        JSON.parse(this.responseText).slice(0, 8).forEach(item => {
          const image = document.createElement('img')
          image.setAttribute('src', item.url)
          image.setAttribute('onclick', `albumImageClicked('${item.url}')`)
          images.appendChild(image)
        })
    }
  }
  xhr.send();
}

const albumImageClicked = url => {
  preview.innerHTML = ''
  const image = document.createElement('img')
  image.setAttribute('src', url)
  preview.appendChild(image)
}