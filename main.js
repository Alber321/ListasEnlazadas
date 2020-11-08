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
    constructor(codigo, nombre, desc, cantidad, coste, total, siguiente){
    this.codigo = codigo;
    this.nombre = nombre;
    this.desc = desc;
    this.cantidad = cantidad;
    this.coste = coste;
    this.total = total;
    this.siguiente = siguiente;
    };
    
};
class Inventario{
    constructor(){
        this.inicio = null;
        this.size = 0;
    };
    AgregarInicio(item){
        let nuevop = new Producto (item[0], item[1], item[2], item[3], item[4], item[5], this.inicio)
        Mostrar.inicio = nuevop;
        this.size++;
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
            if(current.codigo == codigo){
                return current;
            };
            current = current.siguiente;
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
            Mostrar.inicio = Mostrar.inicio.siguiente;
        };
        this.size--
    };
    posEspecifico(posi, item)
  {
    let nuevop = new Producto(item[0], item[1], item[2], item[3], item[4], item[5], posi.siguiente)
    posi.siguiente = nuevop
    this.size++
  }
    AgregarFinal(codigo, nombre, desc, cantidad, coste){
        let nuevop = new Producto(codigo, nombre, desc, cantidad, coste, null)
        if(!this.inicio){
            this.inicio = nuevop
        }else{
            let current = this.head;
            while(current.siguiente){
                current = current.siguiente;
            };
            current.siguiente = nuevop
        };
        this.size++;
    };
};
const Mostrar = new Inventario();

btnagregar.addEventListener("click", () => {
    if(Mostrar.Verificar(codigo.value)==false){
        let p = new Array (codigo.value,nombre.value,desc.value,cantidad.value,coste.value,(Number(cantidad.value)* Number(coste.value)))
        Mostrar.AgregarFinal(p)
        lista.innerHTML = p[0]+"-"+p[1]+"-"+p[2]+"-"+p[3]+"-"+p[4]+"-"+p[5]+"-"+ "</br > Agregado con exito!"
    }else{
        alert ("Error! Codigo repetido")
    };
});
btnborrar.addEventListener("click", () =>{
    let d = Mostrar.BuscarCode(codigo.value)
    if(d!=null){
        lista.innerHTML = d.codigo+"-"+d.nombre+"-"+d.desc+"-"+d.cantidad+"-"+d.coste+"-"+d.total+"-"+"</br > Eliminado con exito"
        Mostrar.EliminarCode(d)
    }else{
        alert("El producto seleccionado no Existe!")
    }
})