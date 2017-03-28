
var carousel = document.querySelector('.carousel');
var seats = document.querySelector('.carousel-seat');
var carouselChildren = carousel.children;
function  next() {
  document.querySelector('.carousel').classList.remove('is-reversing');
  carousel.classList.remove('is-set');
  setTimeout(() =>{
    carousel.classList.add('is-set')
  },50)
  for (var i=0;i<carouselChildren.length;i++)
    {
      if (carouselChildren[i].classList.contains('is-ref')) {
        if (i === carouselChildren.length - 1){
          carouselChildren[0].classList.add('is-ref');
          carouselChildren[0].style.order = 1
          for (var j=1;j<carouselChildren.length;j++) {
            carouselChildren[j].classList.remove('is-ref');
            carouselChildren[j].style.order = j+1;
          }
          break;
        }
        else{
          var count = 0;
          carouselChildren[i+1].classList.add('is-ref');
          carouselChildren[i+1].style.order = 1;
          for(var j=i+2;j<carouselChildren.length;j++) {
              count++;
              carouselChildren[j].classList.remove('is-ref');
              carouselChildren[j].style.order = Number(carouselChildren[j-1].style.order) + 1;
          }
          for(var j=0;j<i+1;j++) {
            count++;
            carouselChildren[j].classList.remove('is-ref');
            carouselChildren[j].style.order = count + 1;
          }
          break;
        }
      }
    }
}
function prev() {
  document.querySelector('.carousel').classList.add('is-reversing');
  carousel.classList.remove('is-set');
  setTimeout(() =>{
    carousel.classList.add('is-set')
  },50)
  for(var i=0;i<carouselChildren.length;i++) {
    if (carouselChildren[i].classList.contains('is-ref')) {
      if(i === carouselChildren.length - 1) {
        var count = carouselChildren.length - 2;
        carouselChildren[i-1].classList.add('is-ref');
        carouselChildren[i-1].style.order = 1;
        carouselChildren[i].classList.remove('is-ref');
        carouselChildren[i].style.order = 2;

        for(var j=0;j<i-1;j++){
          carouselChildren[j].style.order = carouselChildren.length - count + 1;
          count --;
        }
        break;
      }
      else if(i === 0) {
        carouselChildren[carouselChildren.length - 1].classList.add('is-ref');
        carouselChildren[carouselChildren.length - 1].style.order = 1;
        for(var j=0;j<carouselChildren.length - 2;j++) {
          carouselChildren[j].classList.remove('is-ref');
          carouselChildren[j].style.order = j + 2;
        }
        break;
      }
      else {
        carouselChildren[i-1].classList.add('is-ref');
        carouselChildren[i-1].style.order = 1;
        for(var j=i;j<carouselChildren.length;j++) {
          carouselChildren[j].classList.remove('is-ref');
          carouselChildren[j].style.order = Number(carouselChildren[j].style.order) + 1;
        }
        for(var j=0;j<i-1;j++) {
          carouselChildren[j].classList.remove('is-ref');
          carouselChildren[j].style.order = Number(carouselChildren[j].style.order) + 1;
        }
      }
      break;
    }
  }
}
function submit() {
  var slideNum = document.getElementById('jump-slide').value - 1;
  if(slideNum < 0 || slideNum >= carouselChildren.length)
    return;
  carouselChildren[slideNum - 1].classList.add('is-ref');
  carouselChildren[slideNum - 1].style.order = 1;
  for(var i=slideNum - 2;i>=0;i--) {
    carouselChildren[i].classList.remove('is-ref');
    carouselChildren[i].style.order = Number(carouselChildren[i + 1].style.order) - 1 === 0 ? carouselChildren.length : Number(carouselChildren[i + 1].style.order) - 1;
  }
  for(var i=slideNum;i<carouselChildren.length;i++) {
    carouselChildren[i].classList.remove('is-ref');
    carouselChildren[i].style.order = Number(carouselChildren[i - 1].style.order) + 1;
  }
}
