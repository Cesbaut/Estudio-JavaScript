// saludoBtn.addEventListener('click', saludo);

// function saludo(event){
//     console.log(event)
// }


userInput.addEventListener('keypress', (eve)=>{
    if(eve.key === "Enter"){ 
        console.log(eve.target.value);
    }
})