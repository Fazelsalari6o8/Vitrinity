const sortingIcon = document.querySelector('#sorting');
const sortingOption = document.querySelector('.frame-sorting');
const closeSorting = document.querySelector('#close-sorting');

const filtersIcon = document.querySelector('#filters-icon');
const filtersOption = document.querySelector('.filters');
const closeFilters = document.querySelector('#close-filters');


function redirect_to_homepage () {
    window.location = "../src/index.html";
}

// start show sorting section
sortingIcon.addEventListener('click', function () {
    console.log("is Good.");
    sortingOption.classList.add('show-sorting-option');
});
closeSorting.addEventListener('click', function (){
    console.log("closed");
    sortingOption.classList.remove('show-sorting-option');
});
// end show sorting section

// start show filters section
filtersIcon.addEventListener('click', function () {
    console.log("show filters");
    filtersOption.classList.add('show-filters-option');
});
closeFilters.addEventListener('click', function () {
    console.log("close filters");
    filtersOption.classList.remove('show-filters-option');
});
// end show filters sectoin