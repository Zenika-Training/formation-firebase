import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {combineLatest, from, Observable} from 'rxjs';
import {Quack} from '../models/quack';
import {map, switchMap} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class QuacksService {
    private collectionRef = this.angularFirestore.collection<Quack>('quacks', ref => ref.orderBy('date', 'desc'));

    public quacks$ = this.collectionRef.snapshotChanges().pipe(
        map(changes => {
            return changes.map(change => {
                return {$key: change.payload.doc.id, ...change.payload.doc.data()};
            });
        }),
        switchMap(quacks => {
            return combineLatest(quacks.map(quack => {
                return this.getQuackScore(quack)
                    .pipe(
                        map(score => {
                            return {
                                ...quack,
                                score: score || 0
                            };
                        })
                    );
            }));
        })
    );

    public quacksCounter$ = this.angularFireRealtimeDatabase.object<number>(`quacks_counter`).valueChanges();

    constructor(private angularFirestore: AngularFirestore, private angularFireRealtimeDatabase: AngularFireDatabase) {
    }

    /**
     * Create a quack in the database from the mandatory data only.
     * @param quack the quack to create
     */
    public createQuack(quack: Quack): Observable<DocumentReference> {
        return from(this.collectionRef.add(quack));
    }

    /**
     * Get score reference for a given quack.
     * @param quack
     * @private
     */
    private getQuackScore(quack: Quack): Observable<number> {
        return this.angularFireRealtimeDatabase.object<number>(`scores/${quack.$key}`).valueChanges();
    }

    public upvote(quack: Quack): void {
        this.angularFireRealtimeDatabase.object<number>(`scores/${quack.$key}`).set(quack.score + 1);
    }
}
