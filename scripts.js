const assignAssets = () => {
  const userImages = document.querySelectorAll('.user-image')
  userImages.forEach(image => {
    id = image.id
    image.style.backgroundImage =  'url('+`./assets/${id}.jpg`+')'
  })
}

window.addEventListener('load', assignAssets)
