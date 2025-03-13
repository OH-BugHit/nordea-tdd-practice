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

## 2. Prerequisites

### Install required tools
Before you can build the application, you have to install some required tools. These tools are required:
* [Nodejs](https://nodejs.org/en) JavaScript runtime environment
* [Git](https://git-scm.com/) Version Control System
* Some code editor such as [Visual Studio Code](https://code.visualstudio.com/)

These tools are not required, but highly recommended:
* [Angular CLI](https://angular.dev/tools/cli) allows you to use Angular commands from command line

### Clone project
You can clone the project by running:

```bash
git clone https://github.com/NordeaOSS/nordea-tdd-practice.git
```

### Install required dependencies
Before you can run the application, you have to install some required dependencies. Do this once after cloning the project!

You can install dependencies by running:
```bash
npm install
```

## 3. Run tests
Project is covered with unit tests. Unit tests are written by using [Jasmine](https://jasmine.github.io/) and executed by using [Karma](https://karma-runner.github.io/latest/index.html).

You can execute unit tests by running:
```bash
npm run test
```

## 4. Launch application
You can launch the application locally by running:
```bash
npm start
```

### Additional materials
* [TDD](https://tidyfirst.substack.com/p/canon-tdd)
* [Unit tests](https://martinfowler.com/bliki/UnitTest.html)
* [Test pyramid](https://martinfowler.com/bliki/TestPyramid.html)
* [Testing Angular](https://testing-angular.com/)
