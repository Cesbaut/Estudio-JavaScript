//opcion 1
fetch('https://dummyjson.com/products')
.then(response=>response.json())
.then(data=>dibujarData(data))
.catch(error=>console.log(error))


//opcion 2

// async function obtenerProductos(){
//     const res = await fetch('https://dummyjson.com/products')
//     const data = await res.json();
//     console.log(data)
// }

const obtenerProductos = async () => {
    try{
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json();
    dibujarData(data);
    } catch(error){
        console.log(error)
    }
}

obtenerProductos();


function dibujarData(data){
    //logica dibujar
}