const btn1 = document.querySelector('#btn1');

btn1.onclick = function(){
    console.log("Not touch me!!!!")
    console.log("AAAAHHHHHH!!!")
}

const btn3 = document.querySelector('.btn3')
btn3.onmouseenter = function(){
    console.log("You enter button 3")
}

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    console.log('Submit')
    e.preventDefault();
})