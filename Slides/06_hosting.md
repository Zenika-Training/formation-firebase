# Hosting

<!-- .slide: class="page-title" -->

Notes :



## Summary

<!-- .slide: id = "master-toc" class="toc" -->

- [Presentation](#/1)
- [Getting Started](#/2)
- [Authentication](#/3)
- [Cloud Firestore](#/4)
- [Realtime Database](#/5)
- **[Hosting](#/6)**
- [Storage](#/7)
- [Messaging](#/8)
- [To go further](#/9)

Notes :



## Presentation

- Powerful CDN powered by Google.
- Included in the firebase CLI.
- Multiple release channels.
- Support for http 2 and 3.
- Automated https management.

<img src="resources/firebase_hosting_logo.png" height="300">

Notes :



## Advantages

- Very fast thanks to the large amount of CDN servers across the world.
- Easy to use, easy to configure.
- Easy integration in CI/CD environments.
- Multiple release channels.

Notes :



## Configuration

```json
{
  "hosting": {
    "public": "dist/apps/client",
    "ignore": [
      "firebase.json", "**/.*", "**/node_modules/**"
    ],
    "rewrites": [
      { "source": "**", ,"destination": "/index.html"}
    ],
    "headers": [
      {
        "source": "**/*.@(css|js|jpg|jpeg|gif|svg|png|json)",
        "headers": [
          {
            "key": "Cache-control",
            "value": "max-age=7200"
          }
        ]
      }
    ]
  }
}

```

Notes : Liste de fichiers à ignorer, importante, possibilité de rewrite et de gestion de headers. Plus d'infos sur la doc officielle: https://firebase.google.com/docs/hosting/full-config




## Pricing

- Free tier:
  - *10GB* storage.
  - *360MB*/day data transferred.
- After that:
  - *$0.026*/GB of data stored.
  - *$15*/GB downloaded.


Notes : Don't forget this applies after free tier, so everything is paid after free tier has been reached.



<!-- .slide: class="page-tp5" -->
