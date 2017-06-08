# Custom Elements Polyfill +Promise

This package uses the shims from https://github.com/webcomponents/custom-elements
and combines them into a single polyfill that can be added to your project with npm.
This makes it more Webpack friendly, since Webpack does not play well with Bower.

It also uses the small Promise from https://github.com/taylorhakes/promise-polyfill. If you 
don't want to use this Promise, include yours before calling this package.

## Installation

    npm install clubajax/custom-elements-polyfill --save
    
In your app:
```jsx harmony
import 'custom-elements-polyfill';
```
## How I did it

There is a native-shim that Chrome uses so that custom elements will work with transpiled ES5. 
The problem with this polyfill is it uses ES6 which IE can't parse.

After a number of alternatives, the result is that the offending ES6 code is stringified, and 
when in Chrome eval'd. 

## License

[Free as in beer](./LICENSE).