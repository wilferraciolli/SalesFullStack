# SalesUI

To run this project successfully the following need to be run

  npm install primeng primeicons --save
  npm install --save @angular/cdk

Then add the following to the styles section on hte anglar.json
     "styles": [
                "node_modules/primeicons/primeicons.css",
                "node_modules/primeng/resources/themes/omega/theme.css",
                "node_modules/primeng/resources/primeng.min.css",
                "src/styles.css"
              ]
  
Then run the normal ng serve

Next add the currency mask
  npm install ng2-currency-mask --save





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
