# Webpack 3.x.x boiler-plate

Repository created for study and creation of a boilerplate using webpack ^ 3.x.x

## Structure

```
src/
    ├── main.js
    ├── main.scss
    ├── img/...
    ├── js/...
    └── scss
        ├── abstracts
        │   ├── __abstracts-dir.scss
        │   ├── _fonts.scss
        │   ├── _mixins.scss
        │   └── _variables.scss
        ├── base
        │   ├── __base-dir.scss
        │   ├── _reset.scss
        │   └── _typography.scss
        ├── components
        │   ├── __components-dir.scss
        │   ├── _button.scss
        │   └── _input.scss
        ├── layouts
        │   ├── __layouts-dir.scss
        │   ├── _footer.scss
        │   ├── _header.scss
        │   └── _main-navigation.scss
        └── vendor
            └── __vendors-dir.scss
```


## Plugins and Loaders

- babel-preset-es2015
- clean-webpack-plugin
- css-loader"
- extract-text-webpack-plugin
- file-loader
- html-webpack-plugin
- img-loader
- node-sass
- purify-css
- purifycss-webpack
- raw-loader
- sass-loader
- style-loader
- uglifyjs-webpack-plugin
- webpack
- webpack-dev-server
- babel-core
- babel-loader

### Prerequisites

What things you need to install the software and how to install them

* node.js
* NPM Package Manager

### Installing


```
npm instal webpack-boilerplate-mr
```
or

Clone this repository

```
git clone https://github.com/mariorodeghiero/webpack-boilerplate.git
```
Installing the dependencies from the NPM Package Manager
```
npm install
```
To start the development environment, run the following command:

```
npm run dev
```
**Note:** This command also performs a clear in the **dist** folder and build again.

```
npm run dev-server
```

After run, open the browser window at http://localhost:8080

## Deployment

Run the command below to deploy, minimizing All Files.
```
npm run prod
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Author

* [Mário Antônio do Amaral Rodeghiero](https://github.com/mariorodeghiero)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
