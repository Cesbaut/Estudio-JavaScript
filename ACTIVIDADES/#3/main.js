const nombre = 'cesar';
let NewBtn = document.createElement('button')


boton.addEventListener('click',()=>{
    let input = entrada.value
    let inputMinuscula = input.toLowerCase();
    if(inputMinuscula == 'cesar'){
        NewBtn.innerHTML = 'Ir a la web'
        divi.innerHTML = `<p>Hola Cesar</p>`;
        divi.appendChild(NewBtn)
    }else{
        divi.innerHTML = '';
        entrada.value = ''
        entrada.focus();
    }
})

NewBtn.addEventListener('click',()=>{
    window.location.href = 'https:www.google.com';
})