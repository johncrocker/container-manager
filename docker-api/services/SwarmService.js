/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Initialize a new swarm
*
* body SwarmInitRequest 
* returns String
* */
const swarmInit = ({ body }) => new Promise(
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
* Inspect swarm
*
* returns Swarm
* */
const swarmInspect = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Join an existing swarm
*
* body SwarmJoinRequest 
* no response value expected for this operation
* */
const swarmJoin = ({ body }) => new Promise(
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
* Leave a swarm
*
* force Boolean Force leave swarm, even if this is the last manager or that it will break the cluster.  (optional)
* no response value expected for this operation
* */
const swarmLeave = ({ force }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        force,
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
* Unlock a locked manager
*
* body SwarmUnlockRequest 
* no response value expected for this operation
* */
const swarmUnlock = ({ body }) => new Promise(
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
* Get the unlock key
*
* returns UnlockKeyResponse
* */
const swarmUnlockkey = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Update a swarm
*
* version Long The version number of the swarm object being updated. This is required to avoid conflicting writes. 
* body SwarmSpec 
* rotateWorkerToken Boolean Rotate the worker join token. (optional)
* rotateManagerToken Boolean Rotate the manager join token. (optional)
* rotateManagerUnlockKey Boolean Rotate the manager unlock key. (optional)
* no response value expected for this operation
* */
const swarmUpdate = ({ version, body, rotateWorkerToken, rotateManagerToken, rotateManagerUnlockKey }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        version,
        body,
        rotateWorkerToken,
        rotateManagerToken,
        rotateManagerUnlockKey,
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
  swarmInit,
  swarmInspect,
  swarmJoin,
  swarmLeave,
  swarmUnlock,
  swarmUnlockkey,
  swarmUpdate,
};
