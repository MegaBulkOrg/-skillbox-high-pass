window.addEventListener('DOMContentLoaded', function() {
  let emailRegEx = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
      mobMenuOpen = document.querySelector('.header__mobile-menu-open-btn'),
      mobMenuClose = document.querySelector('.header__mobile-menu-close-btn'),
      menu = document.querySelector('.header__nav-list'),
      searchOpen = document.querySelector('.header__search-open-btn'),
      searchClose = document.querySelector('.header__search-close-btn'),
      searchForm = document.querySelector('.header__search')
  mobMenuOpen.addEventListener('click', function(){
    menu.classList.add('header__mobile-menu-open')
  })
  mobMenuClose.addEventListener('click', function() {
    menu.classList.remove('header__mobile-menu-open')
  })
  searchOpen.addEventListener('click', function(event){
    searchForm.classList.add('search__form-open')
  })
  searchClose.addEventListener('click', function(event){
    searchForm.classList.remove('search__form-open')
  })
  let newsletterForm = document.querySelector('.about__newsletter-form'),
      newsletterFormInput = document.querySelector('.about__newsletter-form-field'),
      newsletterFormErrorMsg = document.querySelector('.about__newsletter-form-field-error-msg')
  newsletterFormInput.addEventListener('focus', function() {
    this.classList.remove('error')
    newsletterFormErrorMsg.style.opacity = 0
  })
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let newsletterEmail = newsletterFormInput.value.trim().toLowerCase()
    if (newsletterEmail.search(emailRegEx) === -1) {
      newsletterFormInput.classList.add('error')
      newsletterFormErrorMsg.style.opacity = 1
    } else {
      this.submit()
    }
  })
  let projectsIntrotexts = document.querySelectorAll('.projects__item-introtext'),
      it1 = null,
      it2 = null,
      it3 = null
  projectsIntrotexts.forEach((str, i) => {
    if (i === 0) it1 = str.textContent
    if (i === 1) it2 = str.textContent
    if (i === 2) it3 = str.textContent
  })
  function projectsItemsIntrotexts() {
    projectsIntrotexts.forEach((str, i) => {
      if (window.innerWidth > 900 && window.innerWidth <= 1170) {
        if (i === 0) str.textContent = it1.substring(0, 38) + '…'
        if (i === 1) str.textContent = it2.substring(0, 35) + '…'
        if (i === 2) str.textContent = it3
      }
      else {
        if (i === 0) str.textContent = it1
        if (i === 1) str.textContent = it2
        if (i === 2) str.textContent = it3.substring(0, 44) + '…'
      }
    })
  }
  projectsItemsIntrotexts()
  let feedbackForm = document.querySelector('.contacts__feedback-form'),
      feedbackFormInput = document.querySelector('.contacts__feedback-form .form-group input'),
      feedbackFormErrorMsg = document.querySelector('.contacts__feedback-form .form-group p')
  feedbackFormInput.addEventListener('focus', function() {
    this.classList.remove('error')
    feedbackFormErrorMsg.style.opacity = 0
  })
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let feedbackEmail = feedbackFormInput.value.trim().toLowerCase()
    if (feedbackEmail.search(emailRegEx) === -1) {
      feedbackFormInput.classList.add('error')
      feedbackFormErrorMsg.style.opacity = 1
    } else {
      this.submit()
    }
  })
  ymaps.ready(function () {
    var myMap = new ymaps.Map('contacts__map',
        {center: [55.767940, 37.621885], zoom: 14},
        {searchControlProvider: 'yandex#search'}
    ),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark([55.769535, 37.639985],
    {
        hintContent: 'Студия «High pass»',
        balloonContent: 'Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис № 82'
    },
    {
        iconLayout: 'default#image',
        iconImageHref: './img/map-icon.svg',
        iconImageSize: [12, 12],
        iconImageOffset: [0, 0]
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
  });
  document.querySelector('.contacts__info-close-btn').addEventListener('click', function() {
    document.querySelector('.contacts__info').style.display = 'none'
  })
  window.addEventListener('resize', projectsItemsIntrotexts)
  lazyload()
})
