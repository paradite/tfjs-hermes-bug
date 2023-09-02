# tfjs hermes bug

## Reproduction

- Install dependencies with `yarn` (it is not necessary to setup tfjs git submodule)
- Run `npm run tfjs:node`
  - Runs tfjs code with Nodejs, prints "result 2" without error
- Run `npm run tfjs:buildrun`
  - Bundles tfjs code with metro, runs with Hermes, gives the error "Uncaught Error: Argument 'x' passed to 'argMax' must be a Tensor or TensorLike, but got 'e'"

We can probably get more readable build output by tweaking the metro config.

## Hermes binary

https://github.com/facebook/hermes/releases/tag/v0.11.0
