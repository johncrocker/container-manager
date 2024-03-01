/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create an exec instance
* Run a command inside a running container.
*
* id String ID or name of container
* execConfig ExecConfig Exec configuration
* returns IdResponse
* */
const containerExec = ({ id, execConfig }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        execConfig,
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
* Inspect an exec instance
* Return low-level information about an exec instance.
*
* id String Exec instance ID
* returns ExecInspectResponse
* */
const execInspect = ({ id }) => new Promise(
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
* Resize an exec instance
* Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance. 
*
* id String Exec instance ID
* h Integer Height of the TTY session in characters (optional)
* w Integer Width of the TTY session in characters (optional)
* no response value expected for this operation
* */
const execResize = ({ id, h, w }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        h,
        w,
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
* Start an exec instance
* Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 
*
* id String Exec instance ID
* execStartConfig ExecStartConfig  (optional)
* no response value expected for this operation
* */
const execStart = ({ id, execStartConfig }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        execStartConfig,
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
  containerExec,
  execInspect,
  execResize,
  execStart,
};
