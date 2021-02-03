# Storage

<!-- .slide: class="page-title" -->

Notes :



## Summary

<!-- .slide: id = "master-toc" class="toc" -->

- [Presentation](#/1)
- [Getting Started](#/2)
- [Authentication](#/3)
- [Cloud Firestore](#/4)
- [Realtime Database](#/5)
- [Hosting](#/6)
- **[Storage](#/7)**
- [Messaging](#/8)
- [To go further](#/9)

Notes :



## Presentation

- File storage system.
- Uses cloud storage under the hood.

<img src="resources/cloud_storage_logo.png" height="300">

Notes :



## Usage

```ts
function uploadFile(event: any): void {
  const file = event.target.files[0];
  const filePath = 'name-your-file-path-here';
  const task = this.storage.upload(filePath, file);
}
```

Notes : You can also upload blobs using put or putString, see https://github.com/angular/angularfire/blob/master/docs/storage/storage.md



## Demo

<!-- .slide: class="page-demo" -->

Notes : tour of the storage page, quick presentation of the rules, the stats, and the files manager



## Pricing

- Free tier:
  - *5GB* data stored.
  - *1GB*/day downloaded.
  - *20k*/day upload operations.
  - *50k*/day download operations.
- After that:
  - *$0.026*/GB data stored.
  - *$0.12*/GB downloaded.
  - *$0.05*/10k upload operations.
  - *$0.004*/10k download operations.


Notes : Don't forget this applies after free tier, so everything is paid after free tier has been reached.



<!-- .slide: class="page-tp6" -->
