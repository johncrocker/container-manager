/**
 * The ContainerController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ContainerService');
const containerArchive = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerArchive);
};

const containerArchiveInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerArchiveInfo);
};

const containerAttach = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerAttach);
};

const containerAttachWebsocket = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerAttachWebsocket);
};

const containerChanges = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerChanges);
};

const containerCreate = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerCreate);
};

const containerDelete = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerDelete);
};

const containerExport = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerExport);
};

const containerInspect = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerInspect);
};

const containerKill = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerKill);
};

const containerList = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerList);
};

const containerLogs = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerLogs);
};

const containerPause = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerPause);
};

const containerPrune = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerPrune);
};

const containerRename = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerRename);
};

const containerResize = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerResize);
};

const containerRestart = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerRestart);
};

const containerStart = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerStart);
};

const containerStats = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerStats);
};

const containerStop = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerStop);
};

const containerTop = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerTop);
};

const containerUnpause = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerUnpause);
};

const containerUpdate = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerUpdate);
};

const containerWait = async (request, response) => {
  await Controller.handleRequest(request, response, service.containerWait);
};

const putContainerArchive = async (request, response) => {
  await Controller.handleRequest(request, response, service.putContainerArchive);
};


module.exports = {
  containerArchive,
  containerArchiveInfo,
  containerAttach,
  containerAttachWebsocket,
  containerChanges,
  containerCreate,
  containerDelete,
  containerExport,
  containerInspect,
  containerKill,
  containerList,
  containerLogs,
  containerPause,
  containerPrune,
  containerRename,
  containerResize,
  containerRestart,
  containerStart,
  containerStats,
  containerStop,
  containerTop,
  containerUnpause,
  containerUpdate,
  containerWait,
  putContainerArchive,
};
