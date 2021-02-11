## Lab 1: Create your first firebase project

For this lab, you will need a google account, make sure to have one available or create one.

Open [Firebase Console](https://console.firebase.google.com/) and create your first project.

Once you created the project, create your first web application in applications, and copy the configuration JSON
to the Angular environment file located in `<poject folder>/apps/quacker/src/environments/environment.ts`.

The configuration should look like this:

```json
{
  "apiKey": "AIzaSyD8aO...",
  "authDomain": "quacker-XXXXXXXXX.firebaseapp.com",
  "databaseURL": "https://quacker-XXXXXXXXX-default-rtdb.firebaseio.com",
  "projectId": "quacker-XXXXXXXXX",
  "storageBucket": "quacker-XXXXXXXXX.appspot.com",
  "messagingSenderId": "123456798",
  "appId": "1:123456789:web:5c4d66e87441...."
}
```
