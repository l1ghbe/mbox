const swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    slidesPerView: 6,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints : {

      200 : {
        slidesPerView: 1,
      },
      320 : {
        slidesPerView: 1,
      },
      400 : {
        slidesPerView: 2,
      },
      469 : {
        slidesPerView: 2,
      },
      616 : {
        slidesPerView: 3,
      },
      769 : {
        slidesPerView: 4,
      },
      930 : {
        slidesPerView: 5,
      },
      1400 : {
        slidesPerView: 6,
      },
      2568 : {
        slidesPerView: 6,
      }
  }


});

const searchBar = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

const header = document.querySelector('.header');
const headerBtn = document.querySelectorAll('.header__menu-link');
const footerLink = document.querySelectorAll('.footer__menu-item');

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const navUser = document.querySelector('.navigation-user');
const navSite = document.querySelector('.navigation-site');
const navDrop = document.querySelector('.notification-drop');
const notifications = document.getElementById('notifications');


const buttonWatch = document.querySelector('.button-watch');
const trailer = document.querySelector('.trailer');
const trailerBtn = document.querySelector('.trailer-close');
const trailerVideo = document.querySelector('.trailer-video');
const popupBack = document.querySelector('.popup-back');
const buttonMore = document.querySelector('.button-more');
const popup = document.querySelector('.popup');



const tvShows = document.getElementById('tvShows');
const movies = document.getElementById('movies');
const genres = document.getElementById('genres');
const tv = document.getElementById('tv');
const genre = document.getElementById('genr');
const genreCard = document.querySelectorAll('.genre-card');
const actor = document.querySelectorAll('.actor');


const images = document.querySelectorAll('.trendtv__show-item');



searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
});




images.forEach((image) => {
  image.addEventListener('click', (e) => {
    e.preventDefault()
  })
});
footerLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
  })
});




menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menuBtn.classList.toggle('active');
  navUser.classList.toggle('active');
  navSite.classList.toggle('active');
});

notifications.addEventListener('click', () => {
  navDrop.classList.toggle('active');
  notifications.classList.add('circle')
});

genreCard.forEach((card) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
  })
})

actor.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
  })
})

buttonWatch.addEventListener('click', () => {
  trailer.classList.add('active');
  trailerVideo.autoplay = true;
  trailerVideo.load()
})

trailerBtn.addEventListener('click', () => {
  trailer.classList.remove('active');
  trailerVideo.autoplay = false;
  trailerVideo.load()
})

buttonMore.addEventListener('click', () => {
  popup.classList.add('active')
})
popupBack.addEventListener('click', () => {
  popup.classList.remove('active')
})

const highlight = () => {

  const homeId = document.getElementById('homeId');
  const tvId = document.getElementById('tvId');
  const moviesId = document.getElementById('moviesId');
  const genresId = document.getElementById('genreId');

  let scrollPos = window.scrollY

  if (scrollPos < 600) {
    homeId.classList.add('active')
    tvId.classList.remove('active')
    moviesId.classList.remove('active')
    genresId.classList.remove('active')
  } else if (scrollPos < 800) {
    homeId.classList.remove('active')
    tvId.classList.add('active')
    moviesId.classList.remove('active')
    genresId.classList.remove('active')
  } else if (scrollPos < 1500) {
    homeId.classList.remove('active')
    tvId.classList.remove('active')
    moviesId.classList.add('active')
    genresId.classList.remove('active')
  } else if (scrollPos < 1800) {
    homeId.classList.remove('active')
    tvId.classList.remove('active')
    moviesId.classList.remove('active')
    genresId.classList.add('active')
  } 
}




window.addEventListener('scroll', highlight)
 


// if (window.innerWidth > 960 && scrollPos < 600) {
//   homeId.classList.remove('active')
//   tvShowsId.classList.add('active')
// }

console.log(scrollPos);
