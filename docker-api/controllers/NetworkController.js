/**
 * The NetworkController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NetworkService');
const networkConnect = async (request, response) => {
  await Controller.handleRequest(request, response, service.networkConnect);
};

const networkCreate = async (request, response) => {
  await Controller.handleRequest(request, response, service.networkCreate);
};

const networkDelete = async (request, response) => {
  await Controller.handleRequest(request, response, service.networkDelete);
};

const networkDisconnect = async (request, response) => {
  await Controller.handleRequest(request, response, service.networkDisconnect);
};

const networkInspect = async (request, response) => {
  await Controller.handleRequest(request, response, service.networkInspect);
};

const networkList = async (request, response) => {
  await Controller.handleRequest(request, response, service.networkList);
};

const networkPrune = async (request, response) => {
  await Controller.handleRequest(request, response, service.networkPrune);
};


module.exports = {
  networkConnect,
  networkCreate,
  networkDelete,
  networkDisconnect,
  networkInspect,
  networkList,
  networkPrune,
};
