/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// ===> Global Variables <===
// List of sections selected
const sections = document.querySelectorAll('section');

// ID of the ul element
let unorderedList = document.querySelector('#navbar__list');

// Array of sections with the appended a elements
let elementsArray = [];

// build the nav
const bulidMenu = (sections) => {
   sections.forEach((section) => {
      // Creation of li & a Tags
      let liTag = document.createElement('li');
      let aTag = document.createElement('a');

      // Add class to the 'a' tag
      aTag.classList.add("menu__link");
      aTag.textContent = section.getAttribute('data-nav');

      // append a tag to li tag then append it to the ul tag
      liTag.appendChild(aTag);
      unorderedList.appendChild(liTag);
      aTag.style.setProperty('cursor', 'pointer');

      elementsArray.push(aTag);
   });
};

bulidMenu(sections);

// Add class 'active' to section when near top of viewport 
// Used getBoundingClientRect method for better performance
window.addEventListener('scroll', () => {
   sections.forEach((section, index) => {
      let bounds = section.getBoundingClientRect();
      let sectionTop = bounds.top + 650;
      let sectionBot = bounds.bottom;
      let condition = sectionTop >= 0 && sectionBot <= (window.innerHeight || document.documentElement.clientHeight);
      if (condition) {
         section.classList.add('your-active-class');
         elementsArray[index].classList.add('active__anchor');
      } else {
         section.classList.remove('your-active-class');
         elementsArray[index].classList.remove('active__anchor');
      }
   });
});

// Scroll to anchor ID using scrollTO event
elementsArray.forEach(function (event, i) {
   // Event listener when click
   event.addEventListener("click", function () {
      sections[i].scrollIntoView({ behavior: "smooth" });
   });
});