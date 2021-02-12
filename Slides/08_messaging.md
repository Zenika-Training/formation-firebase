# Messaging

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
- [Storage](#/7)
- **[Messaging](#/8)**
- [To go further](#/9)

Notes :



## Presentation

- Used to send notifications to applications.
- FCM backend provided by Google.
- Can use topics to register multiple users to the same notification type.
- Integrates easily with C++, Unity, Mobile and Web, with the same code to send a notification in the background.

<img src="resources/cloud_messaging_logo.png" height="300">

Notes :


## Architectural overview

<img src="resources/diagram-FCM.png" height="300">

Notes :


## Lifecycle flow
**Draft (todo a schema)**
Scenario: Login & Followed by another user

Login to the app.
          ⬇️
Device registers with FCM.
          ⬇️
FCM send token to device & store it.
          ⬇️
Subscribe to the topic : "When I have a new follower".
          ⬇️
Another user is following me.
          ⬇️
Update the user in the database (Firestore) `Write /users/{uid}/followers/{id}`.
          ⬇️
Triggers the cloud function that listens when the user has new followers.
          ⬇️
This cloud function sends a notification to the user with a new follower using his device token.



Notes :


## Using it for web

In main UI code:
```js
  messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
  });
```

In a service worker:
```js
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
```

Notes : No pricing slide because it's entirely free.

No TP neither because setting up messaging is very dependant on platform, better spend more time explaining it deeply.
