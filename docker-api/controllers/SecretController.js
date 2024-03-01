/**
 * The SecretController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SecretService');
const secretCreate = async (request, response) => {
  await Controller.handleRequest(request, response, service.secretCreate);
};

const secretDelete = async (request, response) => {
  await Controller.handleRequest(request, response, service.secretDelete);
};

const secretInspect = async (request, response) => {
  await Controller.handleRequest(request, response, service.secretInspect);
};

const secretList = async (request, response) => {
  await Controller.handleRequest(request, response, service.secretList);
};

const secretUpdate = async (request, response) => {
  await Controller.handleRequest(request, response, service.secretUpdate);
};


module.exports = {
  secretCreate,
  secretDelete,
  secretInspect,
  secretList,
  secretUpdate,
};
