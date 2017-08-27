# Custom Elements Polyfill

Provides cross-browser (IE11+) functionality for the web-component's custom elements v1 spec.

This package uses the shims from [the webcomponents repo](https://github.com/webcomponents/custom-elements)
and combines them into a single polyfill that can be added to your project with npm.
This makes it more Webpack friendly, since Webpack does not play well with the deprecated Bower.
This also avoids having to mess around with `document.write`, or asynchronously loaded scripts.

## How it Works

There is a native-shim that Chrome uses so that custom elements will work with transpiled ES5. 
The problem with this polyfill is it uses ES6 which IE11 can't parse.

The solution is the offending ES6 code is stringified, and when in Chrome or Safari, eval'd. When in IE, ignored.

## Installation

    npm install @clubajax/custom-elements-polyfill --save
    
In your app:
```jsx harmony
import '@clubajax/custom-elements-polyfill';
```

It can also be loaded in a script, if you are not using build tools.

### Switches

Without switches, the behavior is:

 * Native support for custom-elements: load native-shim
 * no support for custom-elements: load custom-elements shim

#### no-native-shim

Good for developing with Chrome. If you are running native, untranspiled code, the native-shim should not be loaded. Before loading the polyfill, use:
```jsx harmony
window['no-native-shim'] = true;
```

#### force-ce-shim
If you would like to load the custom-elements shim under any circumstances:
```jsx harmony
window['force-ce-shim'] = true;
```

## FAQ

For a list of helpful tips for loading and parsing custom elements, see [BaseComponent Readme](https://github.com/clubajax/BaseComponent#es6-faq)

This version no longer includes the Promise that was in v0.7. It is recommended to use 
[this very small one.](https://github.com/taylorhakes/promise-polyfill)

## License

[MIT](./LICENSE).