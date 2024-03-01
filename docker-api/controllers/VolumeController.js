/**
 * The VolumeController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/VolumeService');
const volumeCreate = async (request, response) => {
  await Controller.handleRequest(request, response, service.volumeCreate);
};

const volumeDelete = async (request, response) => {
  await Controller.handleRequest(request, response, service.volumeDelete);
};

const volumeInspect = async (request, response) => {
  await Controller.handleRequest(request, response, service.volumeInspect);
};

const volumeList = async (request, response) => {
  await Controller.handleRequest(request, response, service.volumeList);
};

const volumePrune = async (request, response) => {
  await Controller.handleRequest(request, response, service.volumePrune);
};

const volumeUpdate = async (request, response) => {
  await Controller.handleRequest(request, response, service.volumeUpdate);
};


module.exports = {
  volumeCreate,
  volumeDelete,
  volumeInspect,
  volumeList,
  volumePrune,
  volumeUpdate,
};
