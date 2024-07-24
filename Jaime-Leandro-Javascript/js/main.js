
//APP LISTA DE SUPERMERCADO
//1.Agregar productos
// 



const articulosDisponibles = [
    {
        id: 1,
        producto: "Pan",
        precio: 1000
    },
    {
        id: 2,
        producto: "Leche",
        precio: 2000
    },
    {
        id: 3,
        producto: "Agua",
        precio: 2500
    },
    {
        id: 4,
        producto: "Manteca",
        precio: 500
    },
    {
        id: 5,
        producto: "Yogurt",
        precio: 3000
    },
    {
        id: 6,
        producto: "Cafe",
        precio: 3500
    },
    {
        id: 7,
        producto: "Harina",
        precio: 500
    },
    {
        id: 8,
        producto: "Arroz",
        precio: 1000
    },
    {
        id: 9,
        producto: "Fideos",
        precio: 1200
    },
    {
        id: 10,
        producto: "Coca-Cola",
        precio: 2700
    },
    {
        id: 11,
        producto: "Cerveza",
        precio: 3100
    },
    {
        id: 12,
        producto: "Jabon",
        precio: 800
    },
    {
        id: 13,
        producto: "Galletitas",
        precio: 1200
    },
    {
        id: 14,
        producto: "Hamburguesa",
        precio: 2800
    },
    {
        id: 15,
        producto: "Salchichas",
        precio: 900
    },
    {
        id: 16,
        producto: "Shampoo",
        precio: 3400
    },
    {
        id: 17,
        producto: "Vino",
        precio: 4000
    },
    {
        id: 18,
        producto: "Jugo",
        precio: 500
    },
    {
        id: 19,
        producto: "Manzana",
        precio: 400
    },
    {
        id: 20,
        producto: "Banana",
        precio: 800
    },
    {
        id: 21,
        producto: "Bolsa de residuos",
        precio: 1500
    },
    {
        id: 22,
        producto: "Carne",
        precio: 5800
    },
    {
        id: 23,
        producto: "Pollo",
        precio: 3600
    },
    {
        id: 24,
        producto: "Dulce de leche",
        precio: 2500
    },


]


const lista = [];

let recomendados = document.getElementById('disponibles');

function añadirProductosDisponibles() {
    articulosDisponibles.forEach((articulo) => {
        let contenedor = document.createElement('div')
        contenedor.className = 'card'
        contenedor.innerHTML = `<h3> ${articulo.producto}</h3>
                                <h4> $${articulo.precio}</h4>
                                <button class='añadir' id=${articulo.id}>Añadir</button>`
    disponibles.appendChild(contenedor)
        
    });


    añadirProductos();

}

añadirProductosDisponibles();






function añadirProductos(){

    añadirBoton = document.querySelectorAll('.añadir');
    añadirBoton.forEach(button => {
        button.onclick = (e) => {
            const articuloId = e.currentTarget.id
            const articuloSeleccionado = articulosDisponibles.find(articulo => articulo.id == articuloId)
            lista.push(articuloSeleccionado)
            

            console.log(lista);

            localStorage.setItem("lista", JSON.stringify(lista))
        }
    })

};




