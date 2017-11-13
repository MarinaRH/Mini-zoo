var image = document.getElementsByClassName('animal');
var select = document.getElementById('select');

function toggleTab(elem) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', onchange);
    }
}
select.onchange = function() {
    if(select.value === 'white-black') {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.add('white-black');
            image[i].classList.remove('negative-colors');
            image[i].classList.remove('sepia');
        }
    }else if(select.value === 'sepia') {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.add('sepia');
            image[i].classList.remove('negative-colors');
            image[i].classList.remove('white-black');
        }
    }else if(select.value === 'negative-colors') {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.add('negative-colors');
            image[i].classList.remove('black-white');
            image[i].classList.remove('sepia');
        }
    }
}

window.onload = function () {
    toggleTab(select);
}


/*
var image = document.getElementsByClassName('animal');
var select = document.getElementById('select');

select.onchange = function() {
    if(select.value == 'white-black') {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.remove('negative-colors');
            image[i].classList.remove('sepia');
            image[i].classList.add('white-black');
        }
    }else if(select.value == 'sepia') {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.add('sepia');
            image[i].classList.remove('negative-colors');
            image[i].classList.remove('white-black');
        }
    }else if(select.value == 'negative-colors') {
        for (var i = 0; i < image.length; i++) {
            image[i].classList.add('negative-colors');
            image[i].classList.remove('black-white');
            image[i].classList.remove('sepia');
        }
    }
}
*/