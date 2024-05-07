# Welcome to Assetnest-remix!

THIS README needs to be finished

## Setup

How to setup this project

- local Postgress db
- commands to make prisma work
- anything else 🤷 to make it work

## Working with emails

We use react email to crete our email templates. To see what they look like you need to run a new project
To set it up you need to run the script

```sh
npx create-email@latest
```

bump the number in package.json of react-email to 1.9.4 then run npm i and npm run dev

You will also need to place the emails you wish to see in the emails folder in the created project

## Development process

Do code reviews, use branches, etc

If making db changes they need to be in their own separate PRs as non dev or main branches don't update the db

## Scripts

Need add more for (prisma pull push) , (for cypress)

### Development

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

```sh
npm run clear-db
```

This runs a script that clears your connected database. This should never be run on production

This npm route script should be removed once we have customers using our system

```sh
npm run lint
```

This runs a script runs prettier over the codebase and will point out prettier errors that need fixing

```sh
npm run lint-fix
```

This runs a script runs prettier over the codebase and will automatically try and fix any style based issues

```sh
npm run storybook
```

Starts Storybook. We use storybook to show off what we have in our component library

### Deployment

```sh
npm run build
```

Builds the app for production

```sh
npm start
```

Runs the app as if it was in production
