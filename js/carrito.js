let carritoStorage = localStorage.getItem('lista')
carritoStorage = JSON.parse(carritoStorage)



let contenedorCarrito = document.getElementById('añadidos')

function armarCarrito (items) {
        items.forEach(articulo => {
        const card = document.createElement("div")
        card.className = 'cards'
        card.innerHTML = `<h3>${articulo.producto}</h3>
                                <p>$${articulo.precio}</p>
                                <p><button class='eliminar' id=${articulo.id}>X</button></p>`
                            
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

const botonesEliminar = document.querySelectorAll('.eliminar');

botonesEliminar.forEach(button => {
  button.onclick = (e) => {
    const articuloId = e.currentTarget.id
    const indiceArticulo = carritoStorage.findIndex(articulo => (articulo.id) == articuloId)
    if (indiceArticulo !== -1) {
      carritoStorage.splice(indiceArticulo, 1)
      console.log(carritoStorage)
      localStorage.setItem("carritoStorage", JSON.stringify(carritoStorage))
      
      // Actualizar el carrito
      contenedorCarrito.innerHTML= ''
      armarCarrito(carritoStorage)
      totalCarrito(carritoStorage)
    }
  }
})


