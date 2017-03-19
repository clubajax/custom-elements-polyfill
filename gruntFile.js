'use strict';

let
	fs = require('fs'),
	path = require('path');

module.exports = function (grunt) {


	grunt.initConfig({
		uglify:{
			main: {
				files: {
					'./temp.js': ['./node_modules/@webcomponents/custom-elements/src/native-shim.js']
				}
			},
			options: {
				mangle: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('create', function () {
		//getNativeShim(grunt);
		//console.log(getCustomElementsShim());
		createFile();
	});
};



function createFile() {
	let file = `
const supportsV1 = 'customElements' in window;
const fce = localStorage.getItem('force-custom-elements-shim');
const fns = localStorage.getItem('force-native-shim');
if(fns || fce){
	if(fns){nativeShim();}
	if(fce){customElements();}
}else{
	if(supportsV1){
		nativeShim();
	}else{
		customElements();
	}
}
`;

	file += license + getNativeShim() + getCustomElementsShim();

	fs.writeFileSync('index.js', file);
}

function getNativeShim() {
	let filename = './node_modules/@webcomponents/custom-elements/src/native-shim.js';
	let lines = fs.readFileSync(filename).toString().split('\n').filter(function (line) {
		line = line.trim();
		if(line.indexOf('/*') === 0 || line.indexOf('*') === 0 || line.indexOf('//') === 0){
			// comment
			return false;
		}
		return !!line;
	}).map(function (line) {
		return line.trim();
	});
	let file = lines.join('\n');

	file = 'function nativeShim() {\n' + file + '\n}\n';

	return file;
}
function getCustomElementsShim(){
	let filename = './node_modules/@webcomponents/custom-elements/custom-elements.min.js';
	let file = fs.readFileSync(filename).toString();
	// strips license (adding it elsewhere)
	file = file.substring(0, file.indexOf('/*')) + file.substring(file.indexOf('*/')+2);
	// strips off sourceMap
	file = file.substring(0, file.indexOf('//#'));
	file = 'function customElements() {\n' + file + '\n}\n';
	return file;
}

const license = `/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
`;