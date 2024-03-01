/**
 * The ImageController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ImageService');
const buildPrune = async (request, response) => {
  await Controller.handleRequest(request, response, service.buildPrune);
};

const imageBuild = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageBuild);
};

const imageCommit = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageCommit);
};

const imageCreate = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageCreate);
};

const imageDelete = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageDelete);
};

const imageGet = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageGet);
};

const imageGetAll = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageGetAll);
};

const imageHistory = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageHistory);
};

const imageInspect = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageInspect);
};

const imageList = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageList);
};

const imageLoad = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageLoad);
};

const imagePrune = async (request, response) => {
  await Controller.handleRequest(request, response, service.imagePrune);
};

const imagePush = async (request, response) => {
  await Controller.handleRequest(request, response, service.imagePush);
};

const imageSearch = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageSearch);
};

const imageTag = async (request, response) => {
  await Controller.handleRequest(request, response, service.imageTag);
};


module.exports = {
  buildPrune,
  imageBuild,
  imageCommit,
  imageCreate,
  imageDelete,
  imageGet,
  imageGetAll,
  imageHistory,
  imageInspect,
  imageList,
  imageLoad,
  imagePrune,
  imagePush,
  imageSearch,
  imageTag,
};
