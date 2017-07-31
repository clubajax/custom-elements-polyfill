# Custom Elements Polyfill +Promise

This package uses the shims from [the webcomponents repo](https://github.com/webcomponents/custom-elements)
and combines them into a single polyfill that can be added to your project with npm.
This makes it more Webpack friendly, since Webpack does not play well with the deprecated Bower.

## Installation

    npm install clubajax/custom-elements-polyfill --save
    
In your app:
```jsx harmony
import 'custom-elements-polyfill';
```
### Usage without Babel

If you are running native, untranspiled code, the native-shim should not be loaded. Before loading the polyfill, use:
```jsx harmony
window['no-native-shim'] = true;
```

## How it Works

There is a native-shim that Chrome uses so that custom elements will work with transpiled ES5. 
The problem with this polyfill is it uses ES6 which IE can't parse.

The result is that the offending ES6 code is stringified, and when in Chrome or Safari, eval'd. When in IE, ignored.

## FAQ

For a list of helpful tips, see [BaseComponent Readme](https://github.com/clubajax/BaseComponent#es6-faq)

Version v0.8 no longer includes the Promise that was in v0.7. It is reccomended to use 
[this very small one.](https://github.com/taylorhakes/promise-polyfill)

## License

[MIT](./LICENSE).