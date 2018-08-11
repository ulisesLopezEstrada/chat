import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../modelo/mensaje';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<Mensaje[]>;
  //items: Observable<Item[]>;
  public chats: Mensaje[]=[];
  public usuario:any={};

  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth) {

      this.afAuth.authState.subscribe(user=>{
          /* console.log('El estado del usuario: ',user); */
          if (!user) { 
              return;
          }
          this.usuario.nombre=user.displayName;
          this.usuario.uid=user.uid;
         /*  console.log("usuario: ",this.usuario.nombre);
          console.log("uid: ",this.usuario.uid); */
        });
  
        

  }

   login(proveedor:string) {
         this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
            }
  logout() {
          this.usuario = {};
          this.afAuth.auth.signOut();
          console.log('saliendo');
         }


  
  cargarMensaje(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','asc'));
    return this.itemsCollection.valueChanges()
      .pipe(map((mensajes:Mensaje[])=>{
            /*  console.log("Men:",mensajes); */
             // cargamos los mensajes al arreglo chats
             this.chats=mensajes;
           })); 

  }

  // insertar un documento

  agregarMensaje(texto:string){

    // falta el udi del usuario
    let mensaje: Mensaje ={
      nombre:this.usuario.nombre,
      inicial:'e',
      mensaje:texto,
      fecha: new Date().getTime(),
      uid:this.usuario.uid
    }
    // insertamos el mensaje
    return this.itemsCollection.add(mensaje)

  }
 
  cargar(){

    // prueba

    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','asc'));
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Mensaje;
        const id = a.payload.doc.id;
       
        return { id, ...data };
      })));

    console.log("datos........",this.items);
    return this.items;
  }

}

