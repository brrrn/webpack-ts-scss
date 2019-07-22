# Webpack with typescript and scss

`yarn run dev`
Generates js + css files, including map-files) in watch mode

`yarn run dev-server`
Same as `dev` but with a dev-server (http://localhost:8080/)
Due to a Firefox bug in webpack.config.js following lines has to be commented out:

```
    'css-hot-loader',
    {
        loader: MiniCssExtractPlugin.loader,
    },
```

following line has to commented in

```
    'style-loader',
```

`yarn run build`
generates files in productive mode.

# Further information
The project provides the possibilty to lazy load JS files with following pattern:

```
<div data-component="Foo" data-component-params='{"text": "I am generated"}'></div>
```

`utils/loader.ts` checks DOM for initializing the necessary components.
