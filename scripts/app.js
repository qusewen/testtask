const btn = document.querySelector('.btn');
const airplane = document.querySelector('.btn__img');
const btntext = document.querySelector('.btn__text')
const btnTextsub = document.querySelector('.btn__text_sub')
const hendleSubmit = () =>{ 
    airplane.classList.add('fly')
    btntext.style.opacity=0;
    
    btn.classList.add('btn__active')
    setTimeout(animationnone,800)
}
function animationnone () {
    airplane.style.display='none'
    btnTextsub.style.opacity=1;
}
btn.addEventListener('click', hendleSubmit)