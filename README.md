## Installation
```npm init```
``` npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-env webpack-cli babel-plugin-transform-object-rest-spread```
Then need to add ``` "plugins": ["transform-object-rest-spread"] ``` on .babelrc file inside existing object.
Finally run ```npm run build```
