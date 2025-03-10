# Savings app

Simple [Angular](https://angular.dev/) application for practising test-driven development (TDD).

## 1. Application structure

### UI
* AppComponent: Combines all the parts together
* InputComponent: UI & logic to listen user inputs
* ChartComponent: UI & logic to display data
  * [Chart.js](https://www.chartjs.org/) library is used to display charts

Components communicate with each other by using [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) API.

### Domain
* All business logic is located under domain directory

## 2. Installing required dependencies
Before you can run the application, you have to install some required dependencies. Do this once after cloning the project!

You can install dependencies by running:
```bash
npm install
```

## 3. Running the application
You can launch application locally by running:
```bash
npm run start
```

## 4. Testing
Project is covered with unit tests. Unit tests are written by using [Jasmine](https://jasmine.github.io/) and executed by using [Karma](https://karma-runner.github.io/latest/index.html).

You can execute unit tests by running:
```bash
npm run test
```

### Additional materials
* [TDD](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
* [Unit tests](https://martinfowler.com/bliki/UnitTest.html)
* [Test pyramid](https://martinfowler.com/bliki/TestPyramid.html)
* [Testing Angular](https://testing-angular.com/)
