import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { of, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private angularFireStorage: AngularFireStorage) {
  }

  public upload(filePath: string, file: File): Observable<void> {
    // TODO Implement me in TP6
    return of(null)
  }
}
