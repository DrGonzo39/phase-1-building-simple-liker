// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heartSymbols = document.querySelectorAll('.like-glyph')

for (const element of heartSymbols) {
  element.addEventListener('click', likeClick)
}

function likeClick(event) {
  let heart = event.target
  console.log('Hello, world!')
  mimicServerCall()
    .then(() => {
      if (heart.textContent === EMPTY_HEART) {
        heart.className = "activated-heart"
        heart.textContent = FULL_HEART
      }
      else {
        heart.classList.remove("activated-heart")
        heart.textContent = EMPTY_HEART
      }
    })
    .catch(function (errorMessage) {
      let error = document.querySelector('div')
      error.classList.remove("hidden")
      setTimeout(() => error.className = ("hidden"), 3000);
    });
  }

  function hideError() {
    let error = document.querySelector('div');
    error.className = ("hidden");
  };
  hideError();


  //------------------------------------------------------------------------------
  // Don't change the code below: this function mocks the server response
  //------------------------------------------------------------------------------

  function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }
