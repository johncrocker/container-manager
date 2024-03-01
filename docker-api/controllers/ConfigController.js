/**
 * The ConfigController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ConfigService');
const configCreate = async (request, response) => {
  await Controller.handleRequest(request, response, service.configCreate);
};

const configDelete = async (request, response) => {
  await Controller.handleRequest(request, response, service.configDelete);
};

const configInspect = async (request, response) => {
  await Controller.handleRequest(request, response, service.configInspect);
};

const configList = async (request, response) => {
  await Controller.handleRequest(request, response, service.configList);
};

const configUpdate = async (request, response) => {
  await Controller.handleRequest(request, response, service.configUpdate);
};


module.exports = {
  configCreate,
  configDelete,
  configInspect,
  configList,
  configUpdate,
};
