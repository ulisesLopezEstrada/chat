import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Datos } from '../modelo/datos';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  private itemsCollection: AngularFirestoreCollection<Datos>;
  items: Observable<Datos[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Datos>('personas');
    this.items = this.itemsCollection.valueChanges();
  }

  addItem(item:Datos) {
   
    console.log('item:',item);
    this.itemsCollection.add(item);
  }
}
