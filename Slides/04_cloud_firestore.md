# Cloud Firestore

<!-- .slide: class="page-title" -->

Notes :



## Summary

<!-- .slide: id = "master-toc" class="toc" -->

- [Presentation](#/1)
- [Getting Started](#/2)
- [Authentication](#/3)
- **[Cloud Firestore](#/4)**
- [Realtime Database](#/5)
- [Hosting](#/6)
- [Storage](#/7)
- [Messaging](#/8)
- [To go further](#/9)

Notes :



## Reminder: NoSQL document-oriented databases

 - Collections containing documents.
 - Better at reading than writing.
 - Not designed for aggregation queries (count, filter, etc).
 - *Schemaless*.
 - Offline persistence.

<div style="display:flex">
<img src="resources/mongodb-logo.png" height="200"><img src="resources/elastic-logo.png" height="200"><img src="resources/couchbase-logo.png" height="200">
</div>

Notes :



## Data modeling

<!-- .element class="fragment" -->
- *UI first*.

<!-- .element class="fragment" -->
- Do not worry about data replication (at least not too much).

<!-- .element class="fragment" -->
- Design your data the way you want to get it.

<!-- .element class="fragment" -->
- Use other solutions for search indexing

Notes :



## Data modeling

<img src="resources/cloud_firestore_data_modeling.png" height="500px">
  

Notes :



## Limits and optimizations

- 1 write operation per second per document.
- 1MB max document size.
- No `.` or `..` document ids.
- No `/` in document ids.
- Avoid using auto-increment composed properties (like `user1`, `user2`, `user3`, etc).
- No `.`,`]`,`[`,`*`,` in field names.
- Limit indexes to what you absolutely need, too many indexes can cause performance issues.
- https://cloud.google.com/firestore/docs/best-practices

Notes :



## Indexes

 - Helps with search operations.
 - Are created from the client library when it detects an index is needed.

Notes :



## Security

<!-- .slide: class="page-demo" -->

Notes : small tour of the rules system.



### The rules

  - Operation permissions:
    - read, write.
    - create, update, delete.
  - Functions.
  - Can get data from the database or the request.
  - Auth context inside the request.

Notes : Do not forget to explain that getting a document in a function costs an operation.



## Pricing

  - Free tier:
    - *20k* write operations per day.
    - *50k* read operations per day.
    - *20k* delete operations per day.
  - After that:
    - *$0.036* / 100k read operations.
    - *$0.108* / 100k write operations.
    - *$0.012* / 100k delete operations.

Notes :



## To go further

https://firebase.google.com/docs/firestore

Notes :



<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp3" -->



<!-- .slide: class="page-tp4" -->
