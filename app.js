/* Imports */
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
/* Get DOM Elements */

/* State */
/* Events */
searchBtn.addEventListener('click', () => {
    nameDisplay.textContent = searchInput.value;
    searchInput.value = '';
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
