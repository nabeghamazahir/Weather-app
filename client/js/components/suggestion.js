function renderTopsList() {
    document.querySelector('#tops').innerHTML = `
        <section class="tops"> ${renderTops()}</section>
    `
}

function renderTops() {
    return state.tops.map(top => `
    <div class="top" data-id='${top.id}'>
        <img src= "${top.image_url}" alt="">
    </div>
    ` 
    ).join('')
}

function renderBottomsList() {
    document.querySelector('#bottoms').innerHTML = `
    <section class="bottoms"> ${renderBottoms()}</section>
`
}

function renderBottoms() {
    return state.bottoms.map(bottom => `
    <div class="bottom" data-id='${bottom.id}'>
        <img src= "${bottom.image_url}" alt="">
    </div>
    ` 
    ).join('')
}

function renderShoesList() {
    document.querySelector('#shoes').innerHTML = `
    <section class="shoes"> ${renderShoes()}</section>
`
}

function renderShoes() {
    return state.shoes.map(shoe => `
    <div class="shoe" data-id='${shoe.id}'>
        <img src= "${shoe.image_url}" alt="">
    </div>
    ` 
    ).join('')
}