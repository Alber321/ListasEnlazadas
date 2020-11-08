var btnagregar = document.querySelector("#Agregar");
var btnborrar = document.querySelector("#borrar");
var btnbuscar = document.querySelector("#Buscar");
var btnmostar = document.querySelector("#Mostrar");
var btnmostrarinv = document.querySelector("#MostrarInverso");
var btninsertar = document.querySelector("#Insertar");
var btnagregarprimero = document.querySelector("#addPrimero")
var btneliminarprimero = document.querySelector("#EliminarPrimero")

var codigo = document.querySelector("#codigo");
var nombre = document.querySelector("#nombre");
var desc = document.querySelector("#desc");
var cantidad = document.querySelector("#cantidad");
var coste = document.querySelector("#coste");
var posicion = document.querySelector("#posicion")

var lista = document.querySelector("#Lista")

class Producto{
    constructor(codigo, nombre, desc, cantidad, coste, siguiente){
    this.codigo = codigo;
    this.nombre = nombre;
    this.desc = desc;
    this.cantidad = cantidad;
    this.coste = coste;
    this.siguiente = siguiente;
    };
    
};
class Inventario{
    constructor(){
        this.inicio = null;
        this.size = 0;
    };
    add(codigo, nombre, desc, cantidad, coste){
        const nuevop = new Producto(codigo, nombre, desc, cantidad, coste, null);
        if(!this.inicio){
            this.inicio = nuevop;
        }else{
            let current = this.inicio;
            while(current.siguiente){
                current = current.siguiente;
            };
            current.siguiente = nuevop;
        };
        this.size++
    };
    ingresarP(codigo, nombre, desc, cantidad, coste, index){
        if(index<0 || index > this.size){
            return null
        };
        const nuevop = nuevop(codigo, nombre, desc, cantidad, cantidad, coste)
        let current = this.inicio;
        let previo;
        if(index === 0){
            nuevop.siguiente = current;
            this.inicio = nuevop;
        }else{
            for(let i = 0; i < index; i++){
                previo = current;
                current = current.siguiente;
            };
            nuevop = current;
            previo.siguiente = nuevop;
        };
        this.size++;
    };

};