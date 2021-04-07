# Course Review

This app is so that I can review educational resources I and others have found, and share how useful they found them

The idea is to create a catalogue of tutorials, blogs, courses, videos, documentation pieces and more, where each piece is reviewed according to how useful it was for the consumers

# 🚀 Getting Started

## Prerequisites

- [NodeJS](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

## Starting in dev mode

1. To install packages, run:
   ```sh
   yarn install
   ```

1. In one terminal, run:

   ```sh
   yarn fire
   ```

   This will set up a [local emulator for firebase](https://firebase.google.com/docs/emulator-suite), allowing you to develop without affecting the live database

1. In a second terminal, run:

   ```sh
   yarn start
   ```

   This will start NextJS locally and spin up a local web server you can connect to.

1. Open your browser at [localhost:3000](http://localhost:3000)

# 💻 Technology

- [NextJS](https://nextjs.org/)
  > NextJS is used as a build engine - not a runtime. In production, this website is deployed as a static site, so should avoid using NextJS's API feature, as it will not work in production.
- [Firebase](https://firebase.google.com/)
  > Firebase provides all the back-end for the project, including database, authentication, and analytics.

# 🧪 Testing

To run the unit tests, run:
```sh
yarn test
```

You can also run them in watch mode with:
```sh
yarn test --watch
```

## Technology

- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
- [@testing-library/react-hooks](https://react-hooks-testing-library.com/)
  > You should avoid writing tests for all hooks, particularly if you can test the hook by just testing the component that's using it.
- [jest](https://jestjs.io/)
- [ts-jest](https://kulshekhar.github.io/ts-jest/)
