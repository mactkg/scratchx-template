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
