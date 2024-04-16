class carritoDeCompras {
    constructor(){
    // Debe tener una propiedad llamada items que sea un array para almacenar los productos en el carrito.

        this.items = [];
    }
    //Debe tener un método llamado agregarProducto(producto) que permita agregar un producto al carrito.

    agregarProducto(producto){
        this.items.push(producto);
    }

    total(){
        let total = 0;
        for (let producto of this.items) {
            total += producto.precio;
        }
        return total; 

    }
    mostrarCarrito(){
        console.log("Carrito de compras");
        for (let producto of this.items) {
            console.log(`- ${producto.nombre}: $${producto.precio}`)
        }
        const total = this.total();
        console.log(`Total: $${total}`);

    }
}   

const micarrito = new carritoDeCompras();

micarrito.agregarProducto({nombre: "laptop", precio: 1500 })
micarrito.agregarProducto({nombre: "camara", precio: 3000})

micarrito.mostrarCarrito();
