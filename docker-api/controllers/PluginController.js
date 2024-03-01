/**
 * The PluginController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PluginService');
const getPluginPrivileges = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPluginPrivileges);
};

const pluginCreate = async (request, response) => {
  await Controller.handleRequest(request, response, service.pluginCreate);
};

const pluginDelete = async (request, response) => {
  await Controller.handleRequest(request, response, service.pluginDelete);
};

const pluginDisable = async (request, response) => {
  await Controller.handleRequest(request, response, service.pluginDisable);
};

const pluginEnable = async (request, response) => {
  await Controller.handleRequest(request, response, service.pluginEnable);
};

const pluginInspect = async (request, response) => {
  await Controller.handleRequest(request, response, service.pluginInspect);
};

const pluginList = async (request, response) => {
  await Controller.handleRequest(request, response, service.pluginList);
};

const pluginPull = async (request, response) => {
  await Controller.handleRequest(request, response, service.pluginPull);
};

const pluginPush = async (request, response) => {
  await Controller.handleRequest(request, response, service.pluginPush);
};

const pluginSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.pluginSet);
};

const pluginUpgrade = async (request, response) => {
  await Controller.handleRequest(request, response, service.pluginUpgrade);
};


module.exports = {
  getPluginPrivileges,
  pluginCreate,
  pluginDelete,
  pluginDisable,
  pluginEnable,
  pluginInspect,
  pluginList,
  pluginPull,
  pluginPush,
  pluginSet,
  pluginUpgrade,
};
