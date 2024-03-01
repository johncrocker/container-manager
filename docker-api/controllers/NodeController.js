/**
 * The NodeController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NodeService');
const nodeDelete = async (request, response) => {
  await Controller.handleRequest(request, response, service.nodeDelete);
};

const nodeInspect = async (request, response) => {
  await Controller.handleRequest(request, response, service.nodeInspect);
};

const nodeList = async (request, response) => {
  await Controller.handleRequest(request, response, service.nodeList);
};

const nodeUpdate = async (request, response) => {
  await Controller.handleRequest(request, response, service.nodeUpdate);
};


module.exports = {
  nodeDelete,
  nodeInspect,
  nodeList,
  nodeUpdate,
};
