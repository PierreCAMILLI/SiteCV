/**
 * Created by Pierre Camilli on 26/06/2016.
 */

console.log("main.js");

var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['jquery', 'underscore', 'backbone'],
    function($, _, Backbone){
        console.log("Start");
});