# Authentication

<!-- .slide: class="page-title" -->

Notes :



## Summary

<!-- .slide: id = "master-toc" class="toc" -->

- [Presentation](#/1)
- [Getting Started](#/2)
- **[Authentication](#/3)**
- [Cloud Firestore](#/4)
- [Realtime Database](#/5)
- [Hosting](#/6)
- [Storage](#/7)
- [Messaging](#/8)
- [To go further](#/9)

Notes : 



## Users

 - Listing of all the users, including anonymous ones.
 - Can find a user ID by email.
 - Can find a user email by user ID.
 - Main administration page for users (ban, reset password, etc).

Notes : 



## Sign-in methods

 - Several methods available.
 - Client libraries provide implementation.
 - Don't forget to configure authorized domains.
 - Hosts configurations for maximum accounts created per day, email unicity, etc.

Notes : 



## Usage

```ts
// Google oauth
this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
// Facebook oauth
this.angularFireAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
// Email/password auth
this.angularFireAuth.signInWithEmailAndPassword(email, password)
// Sign out
this.angularFireAuth.signOut();
```

Notes :



## Templates

 - Administration emails (password reset, email verification, email modification).
 - SMTP configuration.
 - SMS configuration.

Notes : 



## Pricing

 - Free for *almost* everything.
 - <i class="fa fa-warning"></i> 10 000 free phone verifications, $0.06/verification afterwards.
 - Still has some [limits](https://firebase.google.com/docs/auth/limits)

Notes : 



<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp2" -->
