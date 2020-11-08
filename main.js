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
    PosEspecifico(codigo, nombre, desc, cantidad, coste, index){
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
    AgregarInicio(codigo, nombre, desc, cantidad, coste){
        const nuevop = new Producto(codigo, nombre, desc, cantidad, coste)
        console.log();
        let current = this.inicio;
        nuevop.siguiente = current;
        this.inicio = nuevop;
    }
    Recorrer(producto){
        if(producto==null){
            return this.inicio;
        }else {
            return producto.siguiente;
        };
    };
    Verificar(codigo){
      if(this.inicio == null){
          return false;
      };
      let current = this.inicio;
      while(current){
          if(current.codigo === codigo){
              return true;
          };
          current = current.siguiente;
      };
      return false;
    };
    BuscarCode(codigo){
        if(this.inicio == null){
            return null;
        };
        let current = this.inicio;
        while(current){
            if(current.codigo === codigo){
                return current;
            };
        };
        return null;
    };
    EliminarCode(codigo){
        let current = this.inicio;
        let previo = null;
        while(current != null){
            if(current.codigo == codigo){
                if(!previo){
                    this.inicio = current.siguiente;
                }else{
                    previo.siguiente = current.siguiente;
                };
                this.else--;
                return current.codigo;
            };
            previo = current;
            current = current.siguiente;
        };
        return null;
    };
    EliminarInicio(){
        if(this.size>1){
            Lista.index = Lista.inicio.siguiente;
        };
        this.size--;
    };
    
};