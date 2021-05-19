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

// Array of sections with the appended a elements
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
window.addEventListener('scroll', () => {
   sections.forEach((section, index) => {
       let bounds = section.getBoundingClientRect();
       let sectionTop = bounds.top;
       let sectionBot = bounds.bottom;
       let sectionRight = bounds.right;
       let sectionLeft = bounds.left;
       let conditionsHeight = ((sectionBot >= 150) && (sectionTop <= (window.innerHeight || document.documentElement.clientHeight)));
       let conditionsWidth = ((sectionRight >= 0) && (sectionLeft <= (window.innerHeight || document.documentElement.clientHeight)));
       if (conditionsHeight && conditionsWidth) {
           section.classList.add('your-active-class');
           elementsArray[index].classList.add('active__anchor');
       } else {
           section.classList.remove('your-active-class');
           elementsArray[index].classList.remove('active__anchor');
       }
   })
})


// Scroll to anchor ID using scrollTO event
elementsArray.forEach(function (event, i) {
   // Event listener when click 
   event.addEventListener("click", function () {
      sections[i].scrollIntoView({ behavior: "smooth" });
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


