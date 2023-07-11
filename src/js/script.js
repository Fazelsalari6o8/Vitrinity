const sortingIcon = document.querySelector('#sorting');
const sortingOption = document.querySelector('.frame-sorting');
const closeSorting = document.querySelector('#close-sorting');


function redirect_to_homepage () {
    window.location = "../src/index.html";
}

sortingIcon.addEventListener('click', function () {
    console.log("is Good.");
    sortingOption.classList.add('show-sorting-option');
});
closeSorting.addEventListener('click', function (){
    console.log("closed");
    sortingOption.classList.remove('show-sorting-option');
});