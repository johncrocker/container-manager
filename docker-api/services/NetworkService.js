/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Connect a container to a network
* The network must be either a local-scoped network or a swarm-scoped network with the `attachable` option set. A network cannot be re-attached to a running container
*
* id String Network ID or name
* container NetworkConnectRequest 
* no response value expected for this operation
* */
const networkConnect = ({ id, container }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        container,
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
* Create a network
*
* networkConfig NetworkCreateRequest Network configuration
* returns NetworkCreateResponse
* */
const networkCreate = ({ networkConfig }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        networkConfig,
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
* Remove a network
*
* id String Network ID or name
* no response value expected for this operation
* */
const networkDelete = ({ id }) => new Promise(
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
* Disconnect a container from a network
*
* id String Network ID or name
* container NetworkDisconnectRequest 
* no response value expected for this operation
* */
const networkDisconnect = ({ id, container }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        container,
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
* Inspect a network
*
* id String Network ID or name
* verbose Boolean Detailed inspect output for troubleshooting (optional)
* scope String Filter the network by scope (swarm, global, or local) (optional)
* returns Network
* */
const networkInspect = ({ id, verbose, scope }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        verbose,
        scope,
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
* List networks
* Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect).  Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up. 
*
* filters String JSON encoded value of the filters (a `map[string][]string`) to process on the networks list.  Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), returns all    networks that are not in use by a container. When set to `false`    (or `0`), only networks that are in use by one or more    containers are returned. - `driver=<driver-name>` Matches a network's driver. - `id=<network-id>` Matches all or part of a network ID. - `label=<key>` or `label=<key>=<value>` of a network label. - `name=<network-name>` Matches all or part of a network name. - `scope=[\"swarm\"|\"global\"|\"local\"]` Filters networks by scope (`swarm`, `global`, or `local`). - `type=[\"custom\"|\"builtin\"]` Filters networks by type. The `custom` keyword returns all user-defined networks.  (optional)
* returns List
* */
const networkList = ({ filters }) => new Promise(
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
* Delete unused networks
*
* filters String Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.  (optional)
* returns NetworkPruneResponse
* */
const networkPrune = ({ filters }) => new Promise(
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

module.exports = {
  networkConnect,
  networkCreate,
  networkDelete,
  networkDisconnect,
  networkInspect,
  networkList,
  networkPrune,
};
