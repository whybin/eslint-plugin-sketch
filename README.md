# eslint-plugin-sketch

Lint files for Sketch plugins.

## Features

* Removes `@import` directives prior to linting (one `@import` directive per line)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-sketch`:

**Note:** This plugin is not a published `npm` package. Later versions may be published.

```
$ cd <path to wherever>
$ git clone https://github.com/whybin/eslint-plugin-sketch.git
$ npm link
$ cd <path to your project>
$ npm link eslint-plugin-sketch
```

## Usage

Add `sketch` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "sketch"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "sketch/rule-name": 2
    }
}
```

## Supported Rules

## Uninstallation

Same as for uninstalling registered `npm` packages:

```
$ cd <path to project>
$ npm uninstall eslint-plugin-sketch
```
