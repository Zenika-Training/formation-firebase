## Lab 6: adding images

For this lab, we will add images to the quacks that people can post.

First of all, open [Firebase Console](https://console.firebase.google.com/), select your project and go to the Storage page.

Make sure you have a bucket, or create one.

Edit the file `apps/quacker/src/app/services/storage.service.ts` and implement the `upload(filePath: string, file: File): Observable<void>` method.

*Because the project uses Observables and AngularFire returns Promises, return* `from(<your AngularFire call>)`
