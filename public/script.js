/* Слайдеры */
var slider = document.querySelectorAll('.slider');
var z = 3;


/* Первый слайдер */
var slide = slider[0].querySelectorAll('.slide');
var prew = slider[0].querySelector('.prew');
var next = slider[0].querySelector('.next');
var i = 0;

  prew.addEventListener('click', back);
  next.addEventListener('click', forward);

  function back() {
    i--;
    if (i < 0) {
      i = slide.length-1;
    }
    slide[i].animate([
      {
        left: '-50%',
      }],{
      duration: 1000,
    })
    slide[i].animate([
      {
        left: '50%',
      }],{
      duration: 1000,
    })
    slide[i].style.zIndex = z;
    z++
  }

  function forward() {
    i++;
    if (i > slide.length - 1) {
      i = 0;
    }
    slide[i].animate([
      {
        left: '150%',
      }],{
      duration: 1000,
    })
    slide[i].animate([
      {
        left: '50%',
      }],{
      duration: 1000,
    })
    slide[i].style.zIndex = z;
    z++
  }


/* Второй слайдер */
var slide2 = slider[1].querySelectorAll('.slide');
var prew2 = slider[1].querySelector('.prew');
var next2 = slider[1].querySelector('.next');
var k = 0;

  prew2.addEventListener('click', back2);
  next2.addEventListener('click', forward2);

  function back2() {
    k--;
    if (k < 0) {
      k = slide2.length-1;
    }
    slide2[k].animate([
      {
        left: '-50%',
      }],{
      duration: 1000,
    })
    slide2[k].animate([
      {
        left: '50%',
      }],{
      duration: 1000,
    })
    slide2[k].style.zIndex = z;
    z++
  }

  function forward2() {
    k++;
    if (k > slide2.length - 1) {
      k = 0;
    }
    slide2[k].animate([
      {
        left: '150%',
      }],{
      duration: 1000,
    })
    slide2[k].animate([
      {
        left: '50%',
      }],{
      duration: 1000,
    })
    slide2[k].style.zIndex = z;
    z++
  }


/* Третий слайдер */
var slide3 = slider[2].querySelectorAll('.slide');
var prew3 = slider[2].querySelector('.prew');
var next3 = slider[2].querySelector('.next');
var j = 0;

  prew3.addEventListener('click', back3);
  next3.addEventListener('click', forward3);

  function back3() {
    j--;
    if (j < 0) {
      j = slide3.length-1;
    }
    slide3[j].animate([
      {
        left: '-50%',
      }],{
      duration: 1000,
    })
    slide3[j].animate([
      {
        left: '50%',
      }],{
      duration: 1000,
    })
    slide3[j].style.zIndex = z;
    z++
  }

  function forward3() {
    j++;
    if (j > slide3.length - 1) {
      j = 0;
    }
    slide3[j].animate([
      {
        left: '150%',
      }],{
      duration: 1000,
    })
    slide3[j].animate([
      {
        left: '50%',
      }],{
      duration: 1000,
    })
    slide3[j].style.zIndex = z;
    z++
  }


/* Плавная прокрутка */
var anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    var blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


