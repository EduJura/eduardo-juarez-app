# My Personal Profile with React

This repository includes a set of React component and Pages to build an SPA which shows in different sections (_HOME, SKILLS, PROJECTS, CONTACT_) a bit of my professional expererience as Web Developer.

The application is integrated with a Nodejs backend server and a Mongodb collection to store and consume a JSON object with the Projects information, this server side environment is mounted in a docker container.

On the other hand, this application is hosted in Github Pages automated with CI/CD workflow actions pipeline to **build**, **perform unit testing**, **e2e testing** and **deployment**.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start:front-end`

Runs the react app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start:back-end`

Starts the Nodejs and Mongodb servers into a Docker container.
> [!Note]
> Is required to install docker locally to run this script

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn local:test:e2e`

Runs the E2E testing locally, using [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/). 

### `yarn prod:test:e2e`

Runs the same E2E testing in production by running this script in the CI/CD pipiline.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn test:act:ci-cd`

Run the CI/CD workflow action pipeline locally
> [!NOTE]
> The workflow action pipeline local testing requires act nektos installation [act nektos](https://github.com/nektos/act/blob/master/README.md).

> [!NOTE]
> It is also required to create a PAT (Personal Access Token) and set it as a environemnt variable as GITHUB_TOKEN to be able to test the deployment job.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).