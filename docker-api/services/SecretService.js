/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a secret
*
* body SecretCreateRequest  (optional)
* returns IdResponse
* */
const secretCreate = ({ body }) => new Promise(
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
* Delete a secret
*
* id String ID of the secret
* no response value expected for this operation
* */
const secretDelete = ({ id }) => new Promise(
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
* Inspect a secret
*
* id String ID of the secret
* returns Secret
* */
const secretInspect = ({ id }) => new Promise(
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
* List secrets
*
* filters String A JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list.  Available filters:  - `id=<secret id>` - `label=<key> or label=<key>=value` - `name=<secret name>` - `names=<secret name>`  (optional)
* returns List
* */
const secretList = ({ filters }) => new Promise(
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
* Update a Secret
*
* id String The ID or name of the secret
* version Long The version number of the secret object being updated. This is required to avoid conflicting writes. 
* body SecretSpec The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values.  (optional)
* no response value expected for this operation
* */
const secretUpdate = ({ id, version, body }) => new Promise(
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
  secretCreate,
  secretDelete,
  secretInspect,
  secretList,
  secretUpdate,
};
