let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let imgplaceholder = document.querySelector('.imgplaceholder');


btn.addEventListener('click',function(){
    let inputValue = input.value;
    imgplaceholder.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}'
});