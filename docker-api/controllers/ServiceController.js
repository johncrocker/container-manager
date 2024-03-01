/**
 * The ServiceController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ServiceService');
const serviceCreate = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCreate);
};

const serviceDelete = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceDelete);
};

const serviceInspect = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceInspect);
};

const serviceList = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceList);
};

const serviceLogs = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceLogs);
};

const serviceUpdate = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceUpdate);
};


module.exports = {
  serviceCreate,
  serviceDelete,
  serviceInspect,
  serviceList,
  serviceLogs,
  serviceUpdate,
};
