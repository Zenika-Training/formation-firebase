import firebase from 'firebase/app';

export interface Quack {
  $key?: string;

  authorName: string;
  authorAvatar: string;
  content: string;
  date: firebase.firestore.Timestamp;
  score?: number;

  image?: string;
}
