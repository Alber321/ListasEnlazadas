var btnadd = document.querySelector("#btnadd");
var btnborrar = document.querySelector("#btnborrar");
var btnbuscar = document.querySelector("#btnbuscar");
var btnlistar = document.querySelector("#btnlistar");
var btnlistarinv = document.querySelector("#btnlistarinv");
var lista = document.querySelector("#lista");

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
    add(codigo, nombre, desc, cantidad, coste)
};