const allLinks = document.querySelectorAll('.tabs-container a');
const rightArrow = document.querySelector('.tabs-container .right-arrow svg');
const leftArrow = document.querySelector('.tabs-container .left-arrow svg');
const tabList = document.querySelector('.tabs-container ul');

const removeAllLinkActive = () => {
  allLinks.forEach(link => {
    link.classList.remove('active');
  })
}

allLinks.forEach(link => {
  link.addEventListener('click', () => {
    removeAllLinkActive();
    link.classList.add('active');
  });
});

tabList.addEventListener('scroll', handleScroll);

function handleScroll() {
  const MIN_SCROLL = 20;
  if (tabList.scrollLeft >= MIN_SCROLL) {
    leftArrow.parentElement.classList.add('active');
  } else {
    leftArrow.parentElement.classList.remove('active');
  }

  const max = tabList.scrollWidth - tabList.clientWidth - MIN_SCROLL;

  if (tabList.scrollLeft >= max) {
    rightArrow.parentElement.classList.remove('active');
  } else {
    rightArrow.parentElement.classList.add('active');
  }
}

leftArrow.addEventListener('click', function () {
  tabList.scrollLeft -= 200;
});

rightArrow.addEventListener('click', function () {
  tabList.scrollLeft += 200;
  handleScroll();
});