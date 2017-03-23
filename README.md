# Custom Elements Polyfill

This package uses the shims from https://github.com/webcomponents/custom-elements
and combines them into a single polyfill that can be added to your project with npm.
This makes it more Webpack friendly, since Webpack does not play well with Bower.

## Installation

    npm install clubajax/custom-elements-polyfill
    
In your app:
```javascript
import 'custom-elements-polyfill';
```
    
## License

[Free as in beer](./LICENSE).