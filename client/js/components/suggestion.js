let bottom_images;
var bottom_currentIndex = 0;
var bottom_imageElement;

let top_images;
var top_currentIndex = 0;
var top_imageElement;

function renderTopsList() {
    document.querySelector('#tops').innerHTML = `
        <section class="tops"> <div class="carousel">
        <button class="carousel__btn carousel__btn--prev" onclick="top_prevImage()">&lt;</button>
        <img id="top_carousel__image" src="" alt="Image">
        <button class="carousel__btn carousel__btn--next" onclick="top_nextImage()">&gt;</button>
      </div></section>
    `
}

function renderTops() {
    top_images = state.tops;
}

function renderBottomsList() {
    document.querySelector('#bottoms').innerHTML = `
    <section class="bottoms"><div class="carousel">
    <button class="carousel__btn carousel__btn--prev" onclick="btm_prevImage()">&lt;</button>
    <img id="btm_carousel__image" src="" alt="Image">
    <button class="carousel__btn carousel__btn--next" onclick="btm_nextImage()">&gt;</button>
  </div></section>
`
}

function renderBottoms() {
    bottom_images = state.bottoms;
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

function btm_showImage(index) {
    if (index >= 0 && index < bottom_images.length) {
      var imageUrl = bottom_images[index]['image_url'];
       
      bottom_imageElement.src = imageUrl;
      bottom_currentIndex = index;
    }
  }

function btm_prevImage() {
  var prevIndex = bottom_currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = bottom_images.length - 1;
  }
  btm_showImage(prevIndex);
}

function btm_nextImage() {
  var nextIndex = bottom_currentIndex + 1;
  if (nextIndex >= bottom_images.length) {
    nextIndex = 0;
  }
  btm_showImage(nextIndex);
}

setTimeout(revealCarousel_Bottom,1000)

function revealCarousel_Bottom(){
    renderBottoms()
    console.log(bottom_images)
    renderBottomsList()
    reveal_bottom_img()    
}

function reveal_bottom_img(){
    bottom_imageElement = document.querySelector('#btm_carousel__image');
    console.log(bottom_imageElement)
    bottom_imageElement.src = bottom_images[0]['image_url']
}



// Top Carousel Logic


function top_showImage(index) {
    if (index >= 0 && index < top_images.length) {
      var imageUrl = top_images[index]['image_url'];
      top_imageElement.src = imageUrl;
      top_currentIndex = index;
    }
  }

function top_prevImage() {
  var prevIndex = top_currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = top_images.length - 1;
  }
  top_showImage(prevIndex);
}

function top_nextImage() {
  var nextIndex = top_currentIndex + 1;
  if (nextIndex >= top_images.length) {
    nextIndex = 0;
  }
  top_showImage(nextIndex);
}

setTimeout(revealCarousel_top,1000)

function revealCarousel_top(){
    renderTops()
    console.log(top_images)
    renderTopsList()
    reveal_top_img()    
}

function reveal_top_img(){
    top_imageElement = document.querySelector('#top_carousel__image');
    console.log(top_imageElement)
    top_imageElement.src = top_images[0]['image_url']
}