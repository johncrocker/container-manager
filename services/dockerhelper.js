var settings = require('../settings');
var Docker = require('dockerode');

module.exports={
createConnection: function() {
  var connectConfig = settings.get('docker');
  var instance = new Docker(connectConfig);
  return instance;
}
};
