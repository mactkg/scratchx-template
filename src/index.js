var ext = require('./ext.js');
var data = require('./data.json');

(function(e) {
  debugger;
  // merge objects
  for (var attrname in ext) {
    if (ext.hasOwnProperty(attrname)) {
      e[attrname] = ext[attrname];
    }
  }

  // register exention
  ScratchExtensions.register(data.title, data.descriptor, e);
})({});
