# Print Jobs

# Commands to run

```
sudo npm install -g firebase-tools
sudo npm install -g typescript
sudo npm install -g @angular/cli
ng new printjobs
cd printjobs
npm install angularfire2 firebase --save
npm install promise-polyfill --save-exact
npm install @angular/material --save
npm install --save @angular/animations
npm install --save hammerjs
npm install @swimlane/ngx-datatable --save
ng serve
```

## Checking Typescript

Check version of Typescript with `tsc -v`.  Currently using 2.4.1.
Use `sudo npm update -g typescript` to update as needed.

## Angular Notes

If updating Angular, you need to update both global and local.  Use `ng version` to 
check the CLI.  If it complains about version mismatch, then update the `package.json`
as needed.

```
    "@angular/cli": "1.2.0",
```

Then update the local with `npm install @angular/cli`.

For greater detail, see [Updating Angular CLI](https://github.com/angular/angular-cli#updating-angular-cli)

## Other notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

Uses::
- [AngularFire](https://github.com/angular/angularfire2)
- [Angular Material](https://material.angular.io/)
- [ngx-datatable](https://github.com/swimlane/ngx-datatable) [documentation](https://swimlane.gitbooks.io/ngx-datatable/)

## Setup Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create new project
3. Setup Sign-In Method
4. Enable Google -> Save
3. Copy `src/app/firebaseconfig.ts-template` to `src/app/firebaseconfig.ts`
4. In the Firebase console for the project, go to Authentication -> Web Setup
5. Copy keys to `src/app/firebaseconfig.ts`

### Handy Firebase CLI

```
firebase list
firebase -P print-jobs-id database:get /jobs
```
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
