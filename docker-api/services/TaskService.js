/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Inspect a task
*
* id String ID of the task
* returns Task
* */
const taskInspect = ({ id }) => new Promise(
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
* List tasks
*
* filters String A JSON encoded value of the filters (a `map[string][]string`) to process on the tasks list.  Available filters:  - `desired-state=(running | shutdown | accepted)` - `id=<task id>` - `label=key` or `label=\"key=value\"` - `name=<task name>` - `node=<node id or name>` - `service=<service name>`  (optional)
* returns List
* */
const taskList = ({ filters }) => new Promise(
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
* Get task logs
* Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
*
* id String ID of the task
* details Boolean Show task context and extra details provided to logs. (optional)
* follow Boolean Keep connection after returning logs. (optional)
* stdout Boolean Return logs from `stdout` (optional)
* stderr Boolean Return logs from `stderr` (optional)
* since Integer Only return logs since this time, as a UNIX timestamp (optional)
* timestamps Boolean Add timestamps to every log line (optional)
* tail String Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.  (optional)
* returns File
* */
const taskLogs = ({ id, details, follow, stdout, stderr, since, timestamps, tail }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        details,
        follow,
        stdout,
        stderr,
        since,
        timestamps,
        tail,
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
  taskInspect,
  taskList,
  taskLogs,
};
