# Print Jobs

# Commands to run

```
npm install -g typescript
ng new printjobs
cd printjobs
npm install angularfire2 firebase --save
npm install promise-polyfill --save-exact
npm install @angular/material --save
npm install --save @angular/animations
npm install --save hammerjs
ng serve
```

## Checking Typescript

Check version of Typescript with `tsc -v`.  Currently using 2.3.4.

## Other notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

Uses [AngularFire](https://github.com/angular/angularfire2).
[Angular Material](https://material.angular.io/)

## Setup Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create new project
3. Setup Sign-In Method
4. Enable Google -> Save
3. Copy `src/app/firebaseconfig.ts-template` to `src/app/firebaseconfig.ts`
4. In the Firebase console for the project, go to Authentication -> Web Setup
5. Copy keys to `src/app/firebaseconfig.ts`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
