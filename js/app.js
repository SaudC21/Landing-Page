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

/**
 * Define Global Variables
 * 
*/

// List of sections selected
const sections = document.querySelectorAll('section');

// ID of the ul element
let unorderedList = document.querySelector('#navbar__list');

// Array of sections with the appended li & a elements
let elementsArray = [];

const navLi = document.querySelectorAll('nav ul li');

let currentView = '';

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const bulidMenu = (sections) => {
   sections.forEach((sections) => {
      // Creation of li & a Tags
      let liTag = document.createElement('li');
      let aTag = document.createElement('a');

      // Add class to the 'a' tag
      aTag.classList.add("menu__link");
      aTag.textContent = sections.getAttribute('data-nav');

      // append a tag to li tag then append it to the ul tag
      liTag.appendChild(aTag);
      unorderedList.appendChild(liTag);
      aTag.style.setProperty('cursor', 'pointer');

      elementsArray.push(aTag);
   });
};

bulidMenu(sections);

// Add class 'active' to section when near top of viewport
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
window.addEventListener('scroll', () => {
   elementsArray.forEach((sections) => {

      if (window.pageYOffset >= sectionTop) {
         current = section.getAttribute('id');
      }
   })
   elementsArray.forEach(function (event, index) {
      if (event.classList.contains(currentView)) {
         sections[index].classList.add('your-active-class')
      }
      else {
         sections[index].classList.remove('your-active-class')
      }
   })
})

// Scroll to anchor ID using scrollTO event
elementsArray.forEach(function (event, index) {
   // Hover is turned on when mouse is over the element
   event.addEventListener("mouseover", function () {
      event.classList.add('hover');
   });
   // Hover is turned off when mouse is out of the element
   event.addEventListener("mouseout", function () {
      event.classList.remove('hover');
   });
   // Event listener when click 
   event.addEventListener("click", function () {
      sections[index].scrollIntoView({ behavior: "smooth" });
   });
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


