
//APP LISTA DE SUPERMERCADO



//1-Preguntar al usuario si desea ingresar un producto
//2-Ingresar el producto
//3-Comprobar si el producto ingresado es correcto
//4-Añadir el producto a la lista
//5-Preguntar si desea ingresar un nuevo producto
//6-En el caso de que si, permitirle ingresar el nuevo producto, en el caso de que no indicarle que finalizo con la lista
//7-Mostrar la lista e informarle la cantidad de objetos que tiene 




const lista = [];

let bienvenido = confirm('Bienvenido ¿Desea agregar un producto?');

let articulo,i

function agregarProductos() {
    if (bienvenido){
        do{
            do{
                articulo = prompt('Ingrese por favor un producto');
                lista.push(articulo);
            } while(!isNaN(articulo));
            
            
        
        
            i++
            
        } while (confirm('¿Desea agregar otro producto?'));
    } else {
        alert('Hasta luego!');
    }
}


agregarProductos();



function cantidadDeProductos() {
    console.log(lista.length);
}

cantidadDeProductos();


console.log(lista);
