const state ={}




fetch('/api/suggestions/top')
  .then(res => res.json())
  .then(tops => {
    state.tops = tops
    renderTopsList()
  })

fetch('/api/suggestions/bottom')
  .then(res => res.json())
  .then(bottoms => {
    state.bottoms = bottoms
    renderBottomsList()
})

fetch('/api/suggestions/shoe')
  .then(res => res.json())
  .then(shoes => {
    state.shoes = shoes
    renderShoesList()
})

fetch('/api/sessions')
  .then(res => res.json())
  .then(data => {
    if (data.result === 'successful') {
      state.loggedInUser = data.email
    }
})