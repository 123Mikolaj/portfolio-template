const darkBtn = document.querySelector('.header__theme-btn--dark');
const lightBtn = document.querySelector('.header__theme-btn--light');

const profileBorder = document.querySelector('.header__profile-picture');

const darkIcons = document.querySelectorAll('.header__profile-icon--dark');
const lightIcons = document.querySelectorAll('.header__profile-icon--light');

const profileFactsNumbers = document.querySelectorAll('.main__profile-facts-number');
const profileFactsTitles = document.querySelectorAll('.main__profile-facts-title');

const downloadBtn = document.querySelector('.main__buttons-item--download');
const contactBtn = document.querySelector('.main__buttons-item--contact');

const tabs = document.querySelectorAll('.main__tabs-item');
const tabsContent = document.querySelector('.main__tabs');

// Dark Mode

darkBtn.addEventListener('click', function (){

  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');

  profileBorder.style.border = '4px solid #F7D039';

  darkBtn.classList.add('hidden');
  lightBtn.classList.remove('hidden');

  lightIcons.forEach(icon => icon.classList.remove('hidden'));
  darkIcons.forEach(icon => icon.classList.add('hidden'));

  profileFactsNumbers.forEach(number => number.style.color = '#3D3D3D');
  profileFactsTitles.forEach(title => title.style.color = '#575757');

  downloadBtn.style.background = '#FBD144';
  downloadBtn.style.color = '#3D3D3D';
  contactBtn.style.background = '#FFFFFF';
  contactBtn.style.color = '#3D3D3D';

  tabsContent.style.background = '#FFFFFF';
});

// Light Mode

lightBtn.addEventListener('click', function (){

  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');

  profileBorder.style.border = '4px solid #FFE071';

  lightBtn.classList.add('hidden');
  darkBtn.classList.remove('hidden');

  darkIcons.forEach(icon => icon.classList.remove('hidden'));
  lightIcons.forEach(icon => icon.classList.add('hidden'));

  profileFactsNumbers.forEach(number => number.style.color = '#A3ABB2');
  profileFactsTitles.forEach(title => title.style.color = '#A3ABB2');

  downloadBtn.style.background = '#FFE071';
  downloadBtn.style.color = '#3D3D3D';
  contactBtn.style.background = '#171F26';
  contactBtn.style.color = '#A3ABB2';

  tabsContent.style.background = '#171F26';
});

// Tab Click

tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    tabs.forEach(t => {
      if (t.classList.contains('main__tabs-item--active')) {
        t.classList.remove('main__tabs-item--active');
        t.classList.add('main__tabs-item--disabled');
      } else if (t.classList.contains('main__tabs-item--disabled')) {
        t.classList.remove('main__tabs-item--disabled');
        t.classList.add('main__tabs-item--active');
      }
    });
  });
});

// Scroll Up Button

window.addEventListener('scroll', function() {
  const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

  if (window.innerWidth <= 600) {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.remove('visually-hidden');
    } else {
      scrollToTopBtn.classList.add('visually-hidden');
    }
  }
  else {
    scrollToTopBtn.classList.add('visually-hidden');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
