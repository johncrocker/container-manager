/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get plugin privileges
*
* remote String The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
* returns List
* */
const getPluginPrivileges = ({ remote }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        remote,
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
* Create a plugin
*
* name String The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
* tarContext File Path to tar containing plugin rootfs and manifest (optional)
* no response value expected for this operation
* */
const pluginCreate = ({ name, tarContext }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        tarContext,
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
* Remove a plugin
*
* name String The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
* force Boolean Disable the plugin before removing. This may result in issues if the plugin is in use by a container.  (optional)
* returns Plugin
* */
const pluginDelete = ({ name, force }) => new Promise(
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
* Disable a plugin
*
* name String The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
* force Boolean Force disable a plugin even if still in use.  (optional)
* no response value expected for this operation
* */
const pluginDisable = ({ name, force }) => new Promise(
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
* Enable a plugin
*
* name String The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
* timeout Integer Set the HTTP client timeout (in seconds) (optional)
* no response value expected for this operation
* */
const pluginEnable = ({ name, timeout }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        timeout,
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
* Inspect a plugin
*
* name String The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
* returns Plugin
* */
const pluginInspect = ({ name }) => new Promise(
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
* List plugins
* Returns information about installed plugins.
*
* filters String A JSON encoded value of the filters (a `map[string][]string`) to process on the plugin list.  Available filters:  - `capability=<capability name>` - `enable=<true>|<false>`  (optional)
* returns List
* */
const pluginList = ({ filters }) => new Promise(
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
* Install a plugin
* Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable). 
*
* remote String Remote reference for plugin to install.  The `:latest` tag is optional, and is used as the default if omitted. 
* name String Local name for the pulled plugin.  The `:latest` tag is optional, and is used as the default if omitted.  (optional)
* xRegistryAuth String A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details.  (optional)
* body List  (optional)
* no response value expected for this operation
* */
const pluginPull = ({ remote, name, xRegistryAuth, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        remote,
        name,
        xRegistryAuth,
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
* Push a plugin
* Push a plugin to the registry. 
*
* name String The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
* no response value expected for this operation
* */
const pluginPush = ({ name }) => new Promise(
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
* Configure a plugin
*
* name String The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
* body List  (optional)
* no response value expected for this operation
* */
const pluginSet = ({ name, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
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
* Upgrade a plugin
*
* name String The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
* remote String Remote reference to upgrade to.  The `:latest` tag is optional, and is used as the default if omitted. 
* xRegistryAuth String A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details.  (optional)
* body List  (optional)
* no response value expected for this operation
* */
const pluginUpgrade = ({ name, remote, xRegistryAuth, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        remote,
        xRegistryAuth,
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
