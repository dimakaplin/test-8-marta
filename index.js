/**
 * Created by NEWMONTAGE1 on 06.03.2018.
 */
'use strict'
const buttons = document.getElementsByClassName('button'),
    body = document.getElementsByTagName('body')[0],
    reButtons = document.getElementsByClassName('re');
function showTests(event) {
    event.target.parentElement.classList.add('hidden');
    if(event.target.value === 'yes') {
       if(event.target.parentElement.classList.contains('location')) {
           document.getElementsByClassName('doing')[0].classList.remove('hidden');
           body.style.backgroundImage = 'url("img/doing.png")';
       }
       else if(event.target.parentElement.classList.contains('age')) {
           event.target.parentElement.nextElementSibling.classList.remove('hidden');
           body.style.backgroundImage = 'url("img/day.png")';
       }
       else if(event.target.parentElement.classList.contains('day')) {
           event.target.parentElement.nextElementSibling.classList.remove('hidden');
           body.style.backgroundImage = 'url("img/sex.png")';
       }
       else if(event.target.parentElement.classList.contains('sex')) {
           event.target.parentElement.nextElementSibling.classList.remove('hidden');
           body.style.backgroundImage = 'url("img/location.png")';
       }
       else if(event.target.parentElement.classList.contains('doing')) {
           document.getElementsByClassName('noAll')[0].classList.remove('hidden');
           body.style.backgroundImage = 'url("img/noAll.png")';
       }
    }
    else if (event.target.value === 'no') {
        if(event.target.parentElement.classList.contains('age')) {
            document.getElementsByClassName('noAge')[0].classList.remove('hidden');
            body.style.backgroundImage = 'url("img/noAge.png")';
        }
        else if (event.target.parentElement.classList.contains('day')) {
            document.getElementsByClassName('noDay')[0].classList.remove('hidden');
            body.style.backgroundImage = 'url("img/noDay.png")';
        }
        else if (event.target.parentElement.classList.contains('sex')) {
            document.getElementsByClassName('noSex')[0].classList.remove('hidden');
            body.style.backgroundImage = 'url("img/noSex.png")';
        }
        else if (event.target.parentElement.nextElementSibling.classList.contains('doing')) {
            body.style.backgroundImage = 'url("img/doing.png")';
            event.target.parentElement.nextElementSibling.classList.remove('hidden');
        }
        else if (event.target.parentElement.classList.contains('location')) {
            event.target.parentElement.nextElementSibling.classList.remove('hidden');
        }
        else if (event.target.parentElement.classList.contains('doing')) {
            document.getElementsByClassName('noLocation')[0].classList.remove('hidden');
            body.style.backgroundImage = 'url("img/noAll2.png")';
        }
    }
    else if(event.target.parentElement.classList.contains('end')) {
        document.getElementsByClassName('age')[0].classList.remove('hidden');
        body.style.backgroundImage = 'url("img/age.png")';
    }
}

Array.from(buttons).forEach((button) => {button.addEventListener('click', showTests)});
Array.from(reButtons).forEach((button) => {button.addEventListener('click', showTests)});

