const sortingIcon = document.querySelector('#sorting');
const sortingOption = document.querySelector('.frame-sorting');
const closeSorting = document.querySelector('#close-sorting');

const filtersIcon = document.querySelector('#filters-icon');
const filtersOption = document.querySelector('.filters');
const closeFilters = document.querySelector('#close-filters');

const toggle =document.querySelector('.toggle');
const indicator = document.querySelector('.indicator');

const sexOption = document.querySelector('.sex-option');
const sexArrow = document.querySelector('.sex-arrow');
const sexOptions = document.querySelector('.sex-options');

const colorOption = document.querySelector('.title-color-option');
const colorArrow = document.querySelector('.color-arrow');
const colorOptions = document.querySelector('.color-options');
const moreColorOption = document.querySelector('.more-color-option');
const moreColorArrow = document.querySelector('.more-color-arrow');

const sizeOption = document.querySelector('.size-option');
const sizeArrow = document.querySelector('.size-arrow');
const sizeOptions = document.querySelector('.size-options');
const moreSizeOption = document.querySelector('.more-size-option');
const moreSizeArrow = document.querySelector('.more-size-arrow');

const brandOption = document.querySelector('.brand-option');
const brandArrow = document.querySelector('.brand-arrow');

const priceOption = document.querySelector('.price-option');
const priceArrow = document.querySelector('.price-arrow');
const priceOptions = document.querySelectorAll('.price-options');

const usedOption = document.querySelector('.used-option');
const usedArrow = document.querySelector('.used-arrow');
const usedOptions = document.querySelector('.used-options');

// start functions
function redirect_to_homepage () {
    window.location = "./index.html";
}

// start show sorting section
sortingIcon.addEventListener('click', function () {
    // console.log("is Good.");
    sortingOption.classList.add('show-sorting-option');
});
closeSorting.addEventListener('click', function (){
    // console.log("closed");
    sortingOption.classList.remove('show-sorting-option');
});
// end show sorting section

// start show filters section
filtersIcon.addEventListener('click', function () {
    // console.log("show filters");
    filtersOption.classList.add('show-filters-option');
});
closeFilters.addEventListener('click', function () {
    // console.log("close filters");
    filtersOption.classList.remove('show-filters-option');
});
// end show filters sectoin

// start toggle button only existing
toggle.addEventListener('click', function () {
    // console.log('on');
    indicator.classList.toggle('only-existing');
    toggle.classList.toggle('toggle-on');
});
// end toggle button only existing

// start show filter options
sexOption.addEventListener('click', function () {
    sexArrow.classList.toggle('close-icon');
    sexOptions.classList.toggle('close-option');
});

colorOption.addEventListener('click', ()=> {
    colorArrow.classList.toggle('close-icon');
    colorOptions.classList.toggle('close-option');
});
moreColorOption.addEventListener('click', ()=> {
    moreColorArrow.classList.toggle('close-icon');
    // moreColorOptions.classList.toggle('close-option');
});

sizeOption.addEventListener('click', ()=> {
    sizeArrow.classList.toggle('close-icon');
    sizeOptions.classList.toggle('close-option');
});
moreSizeOption.addEventListener('click', ()=> {
    moreSizeArrow.classList.toggle('close-icon');
    // moreSizeOptions.classList.toggle('close-option');
});

brandOption.addEventListener('click', ()=> {
    brandArrow.classList.toggle('close-icon');
    // brnadOptions.classList.toggle('close-option');
});

priceOption.addEventListener('click', ()=> {
    priceArrow.classList.toggle('close-icon');
    priceOptions[0].classList.toggle('close-option');
    priceOptions[1].classList.toggle('close-option');
});

usedOption.addEventListener('click', ()=> {
    usedArrow.classList.toggle('close-icon');
    usedOptions.classList.toggle('close-option');
});
// end functions