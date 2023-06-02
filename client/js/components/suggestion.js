function renderTopsList() {
    document.querySelector('#page').innerHTML = `
        <section class="tops"> ${renderTops()}</section>
    `
}

function renderTops() {
    return state.tops.map(top => `
    <div class="top" data-id='${top.id}>
        <img src= "${top.image_url}" alt="">
    </div>
    ` 
    ).join('')
}