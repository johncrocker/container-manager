/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get image information from the registry
* Return image digest and platform information by contacting the registry. 
*
* name String Image name or id
* returns DistributionInspect
* */
const distributionInspect = ({ name }) => new Promise(
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

module.exports = {
  distributionInspect,
};
