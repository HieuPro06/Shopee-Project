const login = document.querySelector('.header__navbar-item__login');
const register = document.querySelector('.header__navbar-item__register');
const modal = document.querySelector('.modal');
const registerForm = document.querySelector('.auth-form__register');
const loginForm = document.querySelector('.auth-form__login');
const overlay = document.querySelector('.modal_overlay');
const back = document.querySelectorAll('.btn__back');
const loginSwt = document.querySelector('.auth_form__sw-btn__login');
const registerSwt = document.querySelector('.auth_form__sw-btn__register');
login.addEventListener('click',function(){
    modal.style.display = "flex";
    loginForm.style.display = "block";
    registerForm.style.display = "none";
})
register.addEventListener('click',function(){
    modal.style.display = "flex";
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
})
overlay.addEventListener('click',function(){
    modal.style.display = 'none';
})
back.forEach(function(ele,ind){
    ele.addEventListener('click',function(){
        modal.style.display = 'none';
    })
})
loginSwt.addEventListener('click',function(){
    loginForm.style.display = "block";
    registerForm.style.display = "none";
})
registerSwt.addEventListener('click',function(){
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
})

/* Lọc shop */
var ind = 0 ;
const itemShop = document.querySelectorAll('.header__option-item');
const shopSelect = document.querySelector('.header__search_-text');
itemShop.forEach(function(item,index){
    item.addEventListener('click',function(){
        const tick = item.querySelector('.tick');
        const oldTick = itemShop[ind].querySelector('.tick');
        oldTick.innerHTML = '';
        tick.innerHTML = '<i class="fas fa-check"></i>';
        ind = index;
        const text = item.querySelector('.header__option__text').innerText;
        // shopSelect.innerText = text;
        shopSelect.innerText = `${text}`;
    });
})

/*Search lại lịch sử */

var inputSearch = document.querySelector('.header__search-input');
const listOfHistory = document.querySelectorAll('.header__search-item');
listOfHistory.forEach(function(element,index){
    element.addEventListener('click',function(){
        let textSearch = element.querySelector('.header__seatch-item__link').innerText;
        console.log(textSearch);
        inputSearch.value = textSearch;
    })
})