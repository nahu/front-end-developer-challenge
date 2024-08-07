# TitanStar Legends

## Install

> This project uses [node](http://nodejs.org) and a package manager ([npm](https://npmjs.com), [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)).

Use your package manager to install dependecies:

```sh
$ yarn install

# or
# npm install
# pnpm install
```

## Usage

Run in development mode

```sh
$ yarn dev

# or
# npm run dev
# pnpm run dev
```

### App

Players of TitanStar Legends can spend talent points that they’ve collected on runes within a tree. We need to write a js application that simulates the rune tree within the game so players can replicate their in-game loadouts to share with the TitanStar Legends community.

- Left click to add points.
- Right click to remove points.
- The user may only use up to 6 points.
- Each item only accounts for one point.
- Displays current point total
- The user must select the items in order. For example: The user may not put a point in the cake without first having put points in the chevrons and the silverware (in that order).

## Available commands

<p>In this project, you can run the following scripts:</p>

| Script     | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| dev        | Runs the app in the development mode.                                       |
| build      | Builds the app for production to the `dist` folder.                         |
| lint       | Runs the Eslint and show code problems                                      |
| format     | Runs the Prettier and fix code style                                        |
| preview    | Builds the app for production to the `dist` folder, and run locally server. |
| test       | Run the app tests.                                                          |
| test:watch | Run the app tests in watch mode.                                            |

## Related Docs

- [Vite 5](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Styled Components](https://styled-components.com/) - CSS in JS while building custom components in React
- [TypeScript](https://www.typescriptlang.org/) - Why not?!
- [EsLint](https://eslint.org/) - Pluggable JavaScript linter
- [Prettier](https://prettier.io) - Opinionated Code Formatter
- [Vitest](https://vitest.dev/guide/) - Testing library
- [Commitlint](https://commitlint.js.org/) - Linting your commits based on commit convention
