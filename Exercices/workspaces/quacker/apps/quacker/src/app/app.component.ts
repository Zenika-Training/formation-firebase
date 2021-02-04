import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Quack } from './models/quack';
import { QuacksService } from './services/quacks.service';
import firebase from 'firebase/app';
import { AuthService } from './services/auth.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { StorageService } from './services/storage.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'quacker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentInputContent = '';

  currentQuackFiles = [];

  imageUrl: string;

  quacks$: Observable<Quack[]> = this.quacksService.quacks$;

  user$ = this.authService.user$;

  constructor(private quacksService: QuacksService, private authService: AuthService,
              private storage: StorageService) {
  }

  beforeUpload = (file: NzUploadFile) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        observer.complete();
        return;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  customRequest = (req) => {
    return this.storage.upload(`images/${req.file.name}`, req.file).subscribe();
  };

  createQuack(authorName: string, photoURL: string): void {
    const quack: Quack = {
      authorName: authorName,
      authorAvatar: photoURL,
      date: firebase.firestore.Timestamp.now(),
      content: this.currentInputContent
    };
    if (this.currentQuackFiles[0]) {
      quack.image = this.currentQuackFiles[0].name;
    }
    this.quacksService.createQuack(quack).subscribe(() => {
      this.currentInputContent = '';
      this.currentQuackFiles = [];
    });
  }

  upvote(quack: Quack): void {
    this.quacksService.upvote(quack);
  }

  googleOauth(): void {
    this.authService.loginWithGoogle();
  }
}
