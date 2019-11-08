# Repo List

After running `yarn` you can:

- `yarn start` or `yarn start:env` to start the app. It runs at `http://localhost:43127/`, please start the gateway first
- `yarn build` to run the production build
- `yarn build:analyze` to run the production build and analyze the bundle
- `yarn component:new <componentName>` to create a new component, just for fun...

Some environment variables can be set on `.env` to control some things, but there are default values so you don't have to.

Libraries and tooling:

- `typescript` as type system, not everything is typed...
- `webpack` as build system
- `babel` as transpiler
- `prettier` as formatter
- `emotion` as styled-components library
- `reach-router` for routing, waiting for the new React Router API...
- `eslint` as linter

Some things to have in mind:

- The components architecture is somewhat inspired on [this awesome talk](https://www.youtube.com/watch?v=bo0u9402OXU) from React Alicante
  - Pages have a layout and components
  - Folders as components not attached to their domain in order to avoid moving files as much as possible

- To get the graphQL schema from the gateway and generate the types I use the awesome `apollo client:codegen` tool (`yarn schema:types`)
