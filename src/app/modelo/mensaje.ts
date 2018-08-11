export class Mensaje {
    nombre: string;
    inicial: string;
    mensaje: string;
    fecha:number;
    uid?: string; 
    edit_flag?: boolean;
    constructor(nombre:string,mensaje:string){
        this.nombre=nombre;
        this.inicial= this.nombre.slice(0,1);
        this.mensaje=mensaje;
        }
}
