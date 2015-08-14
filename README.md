# webpack-babel-jest
Jest plugin for working with Webpack and Babel

It leverages [Babel-Jest](https://github.com/babel/babel-jest), and ignores any css, scss, or less file during test execution.

[Webpack](https://github.com/webpack/webpack) [Babel](https://github.com/babel/babel) [jest](https://github.com/facebook/jest) plugin

## Usage

Make the following changes to `package.json`:

```json
{
  "devDependencies": {
    "webpack-babel-jest": "*",
    "jest-cli": "*"
  },
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/webpack-babel-jest",
    "testFileExtensions": ["es6", "js"],
    "moduleFileExtensions": ["js", "json", "es6"]
  }
}
```

And run:

    $ npm install

**And you're good to go!**