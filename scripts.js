(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=// definition of blocks
{
  title: "scratchx-template",
  descriptor: {
    en: {
      blocks: [
        [' ', 'my first block: %n', 'myFirstBlock', 'val1']
      ]
    },
    ja: {
      blocks: [
        [' ', '最初のブロック: %n', 'myFirstBlock', '値1']
      ]
    }
  }
}

},{}],2:[function(require,module,exports){
// write down codes here...
module.exports = {
  _shutdown: function() {
  },

  _getStatus: function() {
    return {status: 2, msg: 'Ready'};
  },

  myFirstBlock: function(val) {
    console.log("called myFirstBlock! val:", val);
  }
};

},{}],3:[function(require,module,exports){
var ext = require('./ext.js');
var data = require('./data.json');

(function(e) {
  // Check for GET param 'lang'
  // codes from https://github.com/khanning/scratch-arduino-extension/blob/da1ab317a215a8c1c5cda1b9db756b9edc14ba68/arduino_extension.js#L533-L541
  var paramString = window.location.search.replace(/^\?|\/$/g, '');
  var vars = paramString.split("&");
  var lang = 'en';
  for (var i=0; i<vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair.length > 1 && pair[0]=='lang')
      lang = pair[1];
  }
  
  // merge objects
  for (var attrname in ext) {
    if (ext.hasOwnProperty(attrname)) {
      e[attrname] = ext[attrname];
    }
  }

  // register exention
  ScratchExtensions.register(data.title, data.descriptor[lang], e);
})({});

},{"./data.json":1,"./ext.js":2}]},{},[3]);
