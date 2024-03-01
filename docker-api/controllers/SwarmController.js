/**
 * The SwarmController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SwarmService');
const swarmInit = async (request, response) => {
  await Controller.handleRequest(request, response, service.swarmInit);
};

const swarmInspect = async (request, response) => {
  await Controller.handleRequest(request, response, service.swarmInspect);
};

const swarmJoin = async (request, response) => {
  await Controller.handleRequest(request, response, service.swarmJoin);
};

const swarmLeave = async (request, response) => {
  await Controller.handleRequest(request, response, service.swarmLeave);
};

const swarmUnlock = async (request, response) => {
  await Controller.handleRequest(request, response, service.swarmUnlock);
};

const swarmUnlockkey = async (request, response) => {
  await Controller.handleRequest(request, response, service.swarmUnlockkey);
};

const swarmUpdate = async (request, response) => {
  await Controller.handleRequest(request, response, service.swarmUpdate);
};


module.exports = {
  swarmInit,
  swarmInspect,
  swarmJoin,
  swarmLeave,
  swarmUnlock,
  swarmUnlockkey,
  swarmUpdate,
};
