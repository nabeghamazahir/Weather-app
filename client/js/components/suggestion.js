let bottom_images;
var bottom_currentIndex = 0;
var bottom_imageElement;

let top_images;
var top_currentIndex = 0;
var top_imageElement;

let shoe_images;
var shoe_currentIndex = 0;
var shoe_imageElement;

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
        <section class="bottoms"> <div class="carousel">
        <button class="carousel__btn carousel__btn--prev" onclick="shoe_prevImage()">&lt;</button>
        <img id="shoe_carousel__image" src="" alt="Image">
        <button class="carousel__btn carousel__btn--next" onclick="shoe_nextImage()">&gt;</button>
      </div></section>
    `
}

function renderShoes() {
    shoe_images = state.shoes;
}

// Bottom Carousel Logic

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

// Shoe Carousel Logic

function shoe_showImage(index) {
    if (index >= 0 && index < shoe_images.length) {
      var imageUrl = shoe_images[index]['image_url'];
      shoe_imageElement.src = imageUrl;
      shoe_currentIndex = index;
    }
  }

function shoe_prevImage() {
  var prevIndex = shoe_currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = shoe_images.length - 1;
  }
  shoe_showImage(prevIndex);
}

function shoe_nextImage() {
  var nextIndex = shoe_currentIndex + 1;
  if (nextIndex >= shoe_images.length) {
    nextIndex = 0;
  }
  shoe_showImage(nextIndex);
}

setTimeout(revealCarousel_shoe,1000)

function revealCarousel_shoe(){
    renderShoes()
    console.log(shoe_images)
    renderShoesList()
    reveal_shoe_img()    
}

function reveal_shoe_img(){
    shoe_imageElement = document.querySelector('#shoe_carousel__image');
    console.log(shoe_imageElement)
    shoe_imageElement.src = shoe_images[0]['image_url']
}