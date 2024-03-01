/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a config
*
* body ConfigCreateRequest  (optional)
* returns IdResponse
* */
const configCreate = ({ body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        body,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete a config
*
* id String ID of the config
* no response value expected for this operation
* */
const configDelete = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Inspect a config
*
* id String ID of the config
* returns Config
* */
const configInspect = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List configs
*
* filters String A JSON encoded value of the filters (a `map[string][]string`) to process on the configs list.  Available filters:  - `id=<config id>` - `label=<key> or label=<key>=value` - `name=<config name>` - `names=<config name>`  (optional)
* returns List
* */
const configList = ({ filters }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        filters,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update a Config
*
* id String The ID or name of the config
* version Long The version number of the config object being updated. This is required to avoid conflicting writes. 
* body ConfigSpec The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values.  (optional)
* no response value expected for this operation
* */
const configUpdate = ({ id, version, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        version,
        body,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  configCreate,
  configDelete,
  configInspect,
  configList,
  configUpdate,
};
