let imagen = document.querySelector('img');
imagen.style.visibility = 'visible'
const originalStyles = {
    display: btn1.style.display,
    background: imagen.style.background,
    borderRadius: imagen.style.borderRadius,
    transform: imagen.style.transform,
    btn2BackG: btn2.style.background
};

btn1.addEventListener('click',()=>{
    btn1.style.display = 'none';
    imagen.style.background = '#1162ac';
    imagen.style.borderRadius = '50%';
    imagen.style.transform = 'rotate(10deg)';
})

btn2.addEventListener('click',()=>{
    console.log(imagen.style.visibility)
    if (imagen.style.visibility == 'visible'){
        imagen.style.visibility = 'hidden'
        btn2.style.background = '#a9fffbcb'

    } else if(imagen.style.visibility == 'hidden'){
        imagen.style.visibility = 'visible'
        btn2.style.background = originalStyles.btn2BackG
    }
})


btn3.addEventListener('click',()=>{
    btn1.style.display = originalStyles.display
    imagen.style.background = originalStyles.background
    imagen.style.borderRadius = originalStyles.borderRadius
    imagen.style.transform = originalStyles.transform
    btn2.style.background = originalStyles.btn2BackG
    imagen.style.visibility = 'visible'
})