// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC-X4FNGrAngi7sy_6RA99pFpziB4pKrBI",
    authDomain: "my-blog-app-27b09.firebaseapp.com",
    databaseURL: "https://my-blog-app-27b09.firebaseio.com",
    projectId: "my-blog-app-27b09",
    storageBucket: "my-blog-app-27b09.appspot.com",
    messagingSenderId: "57867251549"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
