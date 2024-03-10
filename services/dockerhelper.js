var setting = require('../setting');
var Docker = require('docker');

module.exports={
createConnection: function() {
  var connectConfig = config.get('docker');
  var instance = new Docker(connectConfig);
  return instance;
}
};
