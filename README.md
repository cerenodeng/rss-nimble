# RSS Nimble

RSS Nimble is an easy and handy open source RSS reader.

## Developing

Once you've cloned the code and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

RSS Nimble is based on [Solid](https://www.solidjs.com) and [SolidStart](https://start.solidjs.com) that are built with adapters to optimise the code for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.
