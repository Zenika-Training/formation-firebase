## Lab 2: Adding authentication

For this second lab, we will add authentication to our project.

First of all, open [Firebase Console](https://console.firebase.google.com/), select your project and go to the authentication configuration page.

Then enable google sign-in as authentication method, and open the quacker project's code in your code editor.

Edit the file `apps/quacker/src/app/services/auth.service.ts` and implement the `loginWithGoogle(): Observable<UserCredential>` method.

*Because the project uses Observables and AngularFire returns Promises, return* `from(<your AngularFire call>)`
