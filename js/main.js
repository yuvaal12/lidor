'use strict';
const selectColor = document.querySelector('.colors');
window.addEventListener('load',eventlistners)

function eventlistners(){
    document.querySelector('.gallery-btn').addEventListener('click',goToGallery);
    selectColor.addEventListener('change',onChangeColor);
}

function goToGallery(){
    document.location.href = 'gallery.html';
}
function renderForm(){
    renderColors();
}
function renderColors(){
    const colors = getColors();
    var strHtmls='';
    colors.forEach(color=>{
        strHtmls +=`<option value=${color.code}>${color.name}</option>`
    })
    selectColor.innerHTML = strHtmls;
}

function onChangeColor(){
    
}