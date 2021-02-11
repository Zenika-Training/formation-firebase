## Lab 4: vote counters

For this third lab, we will add data to our project (finally !).

First of all, open [Firebase Console](https://console.firebase.google.com/), select your project and go to the Realtime Database page.

Make sure you have a database and check its rules to make sure you can read and write it.

Edit the file `apps/quacker/src/app/services/quacks.service.ts` and implement the methods below:

 - `getQuackScore(quack: Quack): Observable<number>`
 - `upvote(quack: Quack): void`
