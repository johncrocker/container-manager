/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete a node
*
* id String The ID or name of the node
* force Boolean Force remove a node from the swarm (optional)
* no response value expected for this operation
* */
const nodeDelete = ({ id, force }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
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
* Inspect a node
*
* id String The ID or name of the node
* returns Node
* */
const nodeInspect = ({ id }) => new Promise(
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
* List nodes
*
* filters String Filters to process on the nodes list, encoded as JSON (a `map[string][]string`).  Available filters: - `id=<node id>` - `label=<engine label>` - `membership=`(`accepted`|`pending`)` - `name=<node name>` - `node.label=<node label>` - `role=`(`manager`|`worker`)`  (optional)
* returns List
* */
const nodeList = ({ filters }) => new Promise(
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
* Update a node
*
* id String The ID of the node
* version Long The version number of the node object being updated. This is required to avoid conflicting writes. 
* body NodeSpec  (optional)
* no response value expected for this operation
* */
const nodeUpdate = ({ id, version, body }) => new Promise(
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
  nodeDelete,
  nodeInspect,
  nodeList,
  nodeUpdate,
};
