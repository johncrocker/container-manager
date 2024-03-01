/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a volume
*
* volumeConfig VolumeCreateOptions Volume configuration
* returns Volume
* */
const volumeCreate = ({ volumeConfig }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        volumeConfig,
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
* Remove a volume
* Instruct the driver to remove the volume.
*
* name String Volume name or ID
* force Boolean Force the removal of the volume (optional)
* no response value expected for this operation
* */
const volumeDelete = ({ name, force }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
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
* Inspect a volume
*
* name String Volume name or ID
* returns Volume
* */
const volumeInspect = ({ name }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
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
* List volumes
*
* filters String JSON encoded value of the filters (a `map[string][]string`) to process on the volumes list. Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), returns all    volumes that are not in use by a container. When set to `false`    (or `0`), only volumes that are in use by one or more    containers are returned. - `driver=<volume-driver-name>` Matches volumes based on their driver. - `label=<key>` or `label=<key>:<value>` Matches volumes based on    the presence of a `label` alone or a `label` and a value. - `name=<volume-name>` Matches all or part of a volume name.  (optional)
* returns VolumeListResponse
* */
const volumeList = ({ filters }) => new Promise(
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
* Delete unused volumes
*
* filters String Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune volumes with (or without, in case `label!=...` is used) the specified labels. - `all` (`all=true`) - Consider all (local) volumes for pruning and not just anonymous volumes.  (optional)
* returns VolumePruneResponse
* */
const volumePrune = ({ filters }) => new Promise(
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
* \"Update a volume. Valid only for Swarm cluster volumes\" 
*
* name String The name or ID of the volume
* version Long The version number of the volume being updated. This is required to avoid conflicting writes. Found in the volume's `ClusterVolume` field. 
* body VolumeUpdateRequest The spec of the volume to update. Currently, only Availability may change. All other fields must remain unchanged.  (optional)
* no response value expected for this operation
* */
const volumeUpdate = ({ name, version, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
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
  volumeCreate,
  volumeDelete,
  volumeInspect,
  volumeList,
  volumePrune,
  volumeUpdate,
};
