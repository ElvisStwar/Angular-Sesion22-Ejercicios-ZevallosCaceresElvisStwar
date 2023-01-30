import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Ferreteria } from '../interfaces/ferreteria';

@Injectable({
  providedIn: 'root'
})
export class FerreteriaService {

  constructor(private fireStore:Firestore) { }

  addProducto(ferreteria:Ferreteria){

     const ferreteriaRef = collection(this.fireStore,'ferreteria');
     return addDoc(ferreteriaRef, ferreteria);

   }

   getFerreteria():Observable<Ferreteria[]>{

    const ferreteriaRef = collection(this.fireStore, 'ferreteria')
    return collectionData(ferreteriaRef, {idField:'id'}) as Observable<Ferreteria[]>

   }


}
