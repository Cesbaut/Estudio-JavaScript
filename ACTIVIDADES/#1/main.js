let div = document.querySelector('div');



let borrarCont = () => {
    div.innerHTML = '';
};

btn1.addEventListener('click',()=>{
    borrarCont();
    div.innerHTML = `<p>Hola mundo</p>`;
});


btn2.addEventListener('click', ()=>{
    borrarCont();
    div.innerHTML = `<img src="Unofficial_JavaScript_logo_2.svg.png" alt="">`;
});

btn3.addEventListener('click', ()=>{
    let boton = document.createElement('button');
    boton.innerHTML = 'Boton';
    div.appendChild(boton);
});

btn4.addEventListener('click', ()=>{
    borrarCont();
});