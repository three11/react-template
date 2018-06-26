[![GitHub stars](https://img.shields.io/github/stars/three11/react-template.svg?style=social&label=Stars)](https://github.com/three11/react-template)
[![GitHub forks](https://img.shields.io/github/forks/three11/react-template.svg?style=social&label=Fork)](https://github.com/three11/react-template/network#fork-destination-box)
[![GitHub issues](https://img.shields.io/github/issues/three11/react-template.svg)](https://github.com/three11/react-template/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/react-template.svg)](https://github.com/three11/react-template/commits/master)
[![Build Status](https://travis-ci.org/three11/react-template.svg?branch=master)](https://travis-ci.org/three11/react-template)
[![license](https://img.shields.io/github/license/three11/react-template.svg)](https://github.com/three11/react-template)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/three11/react-template/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/three11/react-template/webpack.config.js/graphs/commit-activity)
[![Greenkeeper badge](https://badges.greenkeeper.io/three11/react-template.svg)](https://greenkeeper.io/)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/three11/)

# React Template

Opinionated React starter template using Redux, React Router, Redux Saga and more.

## Dependencies

In order to use this setup you need to have installed the following dependencies:

1.  Node - min v8.9.4
2.  NPM - min v5.6.0
    or
3.  Yarn - min v1.3.2
4.  Bash terminal (Default on OSX/Linux, GitBash or similar on Windows)

## Download

You can download this setup [directly](https://github.com/three11/react-template/archive/master.zip) and extract it.

Then navigate to the `react-template` folder and proceed with the rest of the instructions.

## Install

```console
yarn
```

or

```console
npm i
```

## Develop

```console
yarn start
```

or

```console
npm start
```

## Build

```console
yarn build
```

or

```console
npm run build
```

## Details

### JS

1.  Folder structure:

    *   `components/`
        *   `generic/`
        *   `pages/`
        *   `App.js`
    *   `constants/`
    *   `store/`
        *   `modules/`
            *   `...`
        *   `sagas/`
            *   `...`
            *   `index.js`
    *   `utilities/`
        *   `...`
    *   `bootstrap.js`

2.  Latest EcmaScript support

    *   Usage of the latest features in EcmaScript
    *   Using [Babel](https://github.com/babel/babel) to transpile to ES5
    *   Minification of the bundled file
    *   Source maps

3.  Webpack aliases:

    *   `_sagas`: `'src/js/store/sagas'`
    *   `_store`: `'src/js/store'`
    *   `_styles`: `'src/styles'`
    *   `_images`: `'src/images'`
    *   `_utilities`: `'src/js/utilities'`
    *   `_constants`: `'src/js/constants'`
    *   `_components`: `'src/js/components'`

### CSS

1.  [SASS](http://sass-lang.com/) stylesheets preprocessing

    *   The SASS file/folder structure utilizes the ITCSS pattern as shown and explained [here](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
    *   Glob import in SASS thanks to [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)

2.  [PostCSS](https://github.com/postcss/postcss) stylesheets postprocessing including:

    *   [easy importing](https://github.com/TrySound/postcss-easy-import) of non-sass files
    *   [url rebase](https://github.com/postcss/postcss-url) - locates and copies assets from `node_modules`
    *   [postcss-utilities](https://github.com/ismamz/postcss-utilities) - allows usage of utility mixins such as `clearfix`
    *   [flexbox bugs](https://github.com/luisrudge/postcss-flexbugs-fixes) - fixes common flexbox issues on Internet Explorer
    *   [css minification](http://cssnano.co/) - minifies the bundles stylesheet
    *   [automatic vendor prefixes](https://github.com/postcss/autoprefixer)

        > "Write your CSS rules without vendor prefixes (in fact, forget about them entirely)"

### Assets

Images, Fonts, etc should be placed inside the `src` folder.

The `src/index.html` file is the template file for the HTML of the app. It can be used to add meta, link, script tags, etc.

The bundled stylesheet and javascript files are automatically inserted by Webpack.

## Supported Browsers

This setup uses [Browserslist](https://github.com/browserslist/browserslist) to target browsers.

The default list of supported browsers is listed in the `package.json` file:

```json
"browserslist": ["> 1%", "last 2 versions"]
```

This means that supported browsers vary based on current usage data and current browser versions.

In general, this setup supports the two most recent versions of all browsers.

## LICENSE

MIT
