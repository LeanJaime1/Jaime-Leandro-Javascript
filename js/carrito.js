let carritoStorage = localStorage.getItem('lista')
carritoStorage = JSON.parse(carritoStorage)



let contenedorCarrito = document.getElementById('añadidos')

function armarCarrito (items) {
        items.forEach(articulo => {
        const card = document.createElement("div")
        card.className = 'cards'
        card.innerHTML = `<h3>${articulo.producto}</h3>
                                <p>$${articulo.precio}</p>
                                <p><button class='eliminar'>X</button></p>`
                            
       contenedorCarrito.appendChild(card)
        })
}


armarCarrito(carritoStorage)



//TOTAL



const totalCarrito = () => {
    const totalesCarrito = carritoStorage.reduce((total,articulo) => total + articulo.precio, 0);

    let tarjeta = document.createElement('h2')
    tarjeta.innerHTML = `<hr>
                        <div class="total-carrito">
                        <h3>TOTAL</h3>
                        <p>$${totalesCarrito}</p>
                        </div>`
                        
    añadidos.appendChild(tarjeta)

} 


totalCarrito();




//ELIMINAR 



/*

const eliminarProductos = () => {

    eliminarBoton = document.querySelectorAll('eliminar');
    eliminarBoton.forEach(button => {
        button.onclick = (e) => {
            const articuloId = e.currentTarget.id
            const articuloEliminado = carritoStorage.find(articulo => articulo.id == articuloId)
            carritoStorage.splice(articuloEliminado)
            
        }
        
    })
    console.log(carritoStorage);
};

eliminarProductos();

*/
