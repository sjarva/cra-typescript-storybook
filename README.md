# Skeleton repo for a design system project using CRA + TypeScript + SCSS + Storybook + GitHub Pages

This repo is meant as a quick start tech set up for a design system's UI component library.

## Why this repo?

As a front end developer who is interested in design systems and their implementations, I've had the privilege of being a team member in projects were we're either creating a proof of concept (PoC) or an actual design system, with one or more component libraries in one or more JavaScript framework (usually React). Especially in PoC projects with limited budget and time, getting the tech stack and set up working seems to be eating unnecessary amount of time and budget. I thought it would be really nice to have a (preferably open source) repo for this, that we all could just start using.

Carlos had written a good [blog post about how he sets up CRA + TS + Storybook](https://medium.com/@carlosthe19916/create-react-app-cra-and-publish-your-library-components-to-npm-typescript-storybook-67ff8fe1599e), and in this repo I've done the start in the similar way as he has, but I've added SCSS support, folders for assets and fonts, and building Storybook to `/docs`folder, so that we can easily have the Storybook instance running on GitHub pages.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start:storybook`

Compiles SCSS files to CSS and start Storybook dev server on localhost port 9009.

### `yarn build:storybook`

Builds the Storybook files to `/docs` folder.

### `yarn build:lib`

Builds the library to `dist` folder, moving all the needed assets, fonts and styles also there.

### `yarn clean`

Empties the `/dist` folder.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
