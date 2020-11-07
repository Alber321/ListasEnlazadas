var btnadd = document.querySelector("#btnadd")
var btnborrar = document.querySelector("#btnborrar")
var btnbuscar = document.querySelector("#btnbuscar")
var btnlistar = document.querySelector("#btnlistar")
var btnlistarinv = document.querySelector("#btnlistarinv")

var lista = document.querySelector("#lista")

var p1 = new Array()
var maximo = 10
class Producto{
    constructor(posicion, codigo, nombre, desc, cantidad, coste){
    this.posicion = posicion
    this.codigo = codigo
    this.nombre = nombre
    this.desc = desc
    this.cantidad = cantidad
    this.coste = coste
    }
}