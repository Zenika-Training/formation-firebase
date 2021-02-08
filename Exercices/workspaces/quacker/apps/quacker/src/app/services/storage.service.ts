import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private angularFireStorage: AngularFireStorage) {
  }

  public upload(filePath: string, file: File): Observable<void> {
    return from(this.angularFireStorage.upload(filePath, file).then());
  }
}
