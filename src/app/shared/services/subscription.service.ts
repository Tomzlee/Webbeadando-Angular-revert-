import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Image } from '../../shared/models/Image';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  collectionName = 'Subscriptions';

  constructor(private afs: AngularFirestore) { }

  getSubsciptionsById(id: string) {
    return this.afs.collection<Image>(this.collectionName).doc(id).valueChanges();
  }
}
