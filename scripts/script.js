'use strict';

const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad');

addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
});