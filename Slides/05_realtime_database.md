# Realtime Database

<!-- .slide: class="page-title" -->

Notes :



## Summary

<!-- .slide: id = "master-toc" class="toc" -->

- [Presentation](#/1)
- [Getting Started](#/2)
- [Authentication](#/3)
- [Cloud Firestore](#/4)
- **[Realtime Database](#/5)**
- [Hosting](#/6)
- [Storage](#/7)
- [Messaging](#/8)
- [To go further](#/9)

Notes :



## Presentation

 - Synchronized in realtime to every connected client.
 - key:value storage.
 - Can be seen as a giant realtime JSON file.
 - **Not** designed for queries, search and relational behavior.
 - Useful to store small data that's updated very often.

<img src="resources/realtime_database_logo.png" height="300">

Notes : 



## Data structure

 - Design it like a JSON file.
 - Keep it small and meaningful.
 - Make it easy to access (REST-like).

<img src="resources/data_modeling_rtdb.png" height="300">

Notes : Getting smaller data means less bandwidth usage



## Usage - Create

```ts
this.angularFirebase
  .list<User>('users')
  .push({name: 'James Holden', crew: 'Rocinante'});
```

Returns the unique identifier of the document that has been added.

Notes : Disclaimer: examples are using angularFirebase, but other languages and implementations are available on officiel docs website



## Usage - Read

```ts
// Get one element
this.angularFirebase
  .object<User>('users/00086tE6xfgyC1RCqJ2EaTncmXx1')
  .valueChanges();

// Get a list of elements
this.angularFirebase
  .list<User>('users')
  .valueChanges();
```

Notes : Disclaimer: examples are using angularFirebase, but other languages and implementations are available on officiel docs website



## Usage - Update
```ts
// Partial update, non destructive
this.angularFirebase
  .object<User>('users/00086tE6xfgyC1RCqJ2EaTncmXx1')
  .update({name: 'Fred Johnson'});

// Full overwrite
this.angularFirebase
  .object<User>('users/00086tE6xfgyC1RCqJ2EaTncmXx1')
  .set({name: 'Fred Johnson', crew: 'APE'});
```

Some transactional operations are also possible, to increment a field value server-side.

Notes : Disclaimer: examples are using angularFirebase, but other languages and implementations are available on officiel docs website



## Usage - Delete

```ts
this.angularFirebase
  .object<User>('users/00086tE6xfgyC1RCqJ2EaTncmXx1')
  .remove();
```

Notes : Disclaimer: examples are using angularFirebase, but other languages and implementations are available on officiel docs website



## Security

<!-- .slide: class="page-demo" -->

Notes : small tour of the rules system.



## Pricing

- Free tier:
  - *100* max simultaneous connections.
  - *1GB* data stored.
  - *10GB* data downloaded.
- After that:
  - *250k* max connections per database if using a paid plan.
  - *$5*/GB of data stored.
  - *$1*/GB downloaded.


Notes : Don't forget this applies after free tier, so everything is paid after free tier has been reached.



<!-- .slide: class="page-tp4" -->
