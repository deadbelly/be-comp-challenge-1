const userCards = document.querySelector('.usercards')

const loadCardHTML = () => {for (var i = 1; i < 9; i++) {
  userCards.innerHTML +=   `<article class="usercard">
      <div class="user-image" id="${'0'+i}">
        <button type="button" class="share-arrow">
            <img class="arrow-icon" src="./assets/arrow.png" alt="share arrow">
        </button>
        <div class="cluster view-count">
          <p>VIEWS</p>
          <h2>02</h2>
        </div>
      </div>
      <div class="user-info">
      <div class="cluster">
        <h3>Recipient's Namehere</h3>
        <p>Monday 01/23/16 10:22am</p>
      </div>
      <div class="link-box">
        <p>http://2win.2stage.com/p/recipients_namehere</p>
      </div>
      <div class="cluster">
        <p>Playlist</p>
        <h3>Name of Playlist</h3>
      </div>
      <div class="cluster">
        <p>ATTACHMENTS</p>
        <h2>04</h2>
      </div>
      </div>
    </article>`
}}

const assignAssets = () => {
  const userImages = document.querySelectorAll('.user-image')
  userImages.forEach(image => {
    id = image.id
    image.style.backgroundImage =  'url('+`./assets/${id}.jpg`+')'
  })
}

window.addEventListener('load', function() {
  loadCardHTML()
  assignAssets()
})
