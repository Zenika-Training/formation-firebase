## Lab 3: the quacks database

For this third lab, we will add data to our project (finally !).

First of all, open [Firebase Console](https://console.firebase.google.com/), select your project and go to the Cloud Firestore page.

Make sure you have a database and check its rules to make sure you can read and write it.

Edit the file `apps/quacker/src/app/services/quacks.service.ts` and implement the `createQuack(quack: Quack): Observable<DocumentReference>` method.

*Because the project uses Observables and AngularFire returns Promises, return* `from(<your AngularFire call>)`
