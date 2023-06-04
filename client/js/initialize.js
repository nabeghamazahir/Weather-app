const state ={}
let user_collection;
let div = document.querySelector(".data");
let logoutBtn = document.querySelector('.logout-btn');
let signupBtn = document.querySelector('.signup-btn')
let loginBtn = document.querySelector('.login-btn')



function displayMain(weather_type){
  console.log(weather_type)
}

function init(weather_type){
  renderMainContent()

  fetch(`/api/suggestions/top?weather=${weather_type}`)
  .then(res => res.json())
  .then(tops => {
    state.tops = tops
    renderTopsList()
    setTimeout(revealCarousel_top,1000)
  })

fetch(`/api/suggestions/bottom?weather=${weather_type}`)
  .then(res => res.json())
  .then(bottoms => {
    state.bottoms = bottoms
    renderBottomsList()
    setTimeout(revealCarousel_Bottom,1000)
    
    
})

fetch(`/api/suggestions/shoe?weather=${weather_type}`)
  .then(res => res.json())
  .then(shoes => {
    state.shoes = shoes
    renderShoesList()
    setTimeout(revealCarousel_shoe,1000)
})

fetch('/api/collection')
  .then(res => res.json())
  .then(collecton => {
    console.log('I am printing collections')
    state.collection = collecton
    user_collection = state.collection
    readCollection()
})

}

fetch('/api/sessions')
  .then(res => res.json())
  .then(data => {
    if (data.result === 'successful') {
      state.loggedInUser = data.email
      
      div.style.display = 'block'; 
      console.log('already logged in')
      getLocation()
      
      // Remove the "hidden" class
      logoutBtn.classList.remove('hidden');
      signupBtn.classList.add('hidden');
      loginBtn.classList.add('hidden')


    } else{

      console.log('HElllo')
    }
})



function renderMainContent(){ 
  document.querySelector('#page').innerHTML = `<div id="tops"></div>
    <div id="bottoms"></div>
    <div id="shoes"></div>
    <div class="controls">
      <div class="save-collection">
        <form action="" onSubmit=createCollection(event)>
          <input type="text" name="collection_input" placeholder="Enter collection name...">
          <button>Save Collection</button>
      </form>
      </div>
      <div class="read-collection">
        <select name="" id="drop-down"></select>
      </div>
    </div>`
  }