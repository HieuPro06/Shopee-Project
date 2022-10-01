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

/* Tạo QC */
const slider = document.querySelector('.slider__slide__content');
var arrSlide = ["./img/slide/slide1.jpg","./img/slide/slide2.png","./img/slide/slide3.png",
                "./img/slide/slide4.png","./img/slide/slide5.png"];
var i = 1 ;
var lengthS = arrSlide.length;
setInterval(function(){
    slider.style.backgroundImage = `url(${arrSlide[i]})`;
    if(i == lengthS - 1){
        i = 0 ;
    }
    else{
        ++i;
    }
},3000);
/*
    List CV : 
        1.Thêm thẻ a với logo Shopee
        2.Có chức năng bấm và hiện nội dung lên input - đồng thời
        lọc ra sản phẩm phù hợp theo input (Ko bắt buộc)
        3. Tạo chức năng cho nút tìm kiếm Kính lúp (Ko bắt buộc)
        4. Chèn sản phẩm vào giỏ hàng khi + (Ko bắt buộc)
        5. Tạo chức năng cho tất cả mục trong home-filter
        6. Tạo slide quảng cáo
        7.(KHÓ) Tạo Trang có chức năng để mua(Thêm giỏ hàng) cho từng sản phẩm khi click vào
*/