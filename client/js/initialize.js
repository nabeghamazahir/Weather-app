const state ={}

fetch('/api/suggestions/top')
  .then(res => res.json())
  .then(tops => {
    state.tops = tops
    renderTopsList()
  })


fetch('/api/sessions')
  .then(res => res.json())
  .then(data => {
    if (data.result === 'successful') {
      state.loggedInUser = data.email
    }
})