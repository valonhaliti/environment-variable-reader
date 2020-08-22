require('dotenv').config();

let defaultEnvironmentVariables = [];

function getEnvironmentVariable(envKey, defaultValue = null) {
  const envVal = process.env[envKey];
  if (envVal) {
    return envVal;
  } else if (defaultValue !== null) {
    defaultEnvironmentVariables.push(envKey);
    return defaultValue;
  } else {
    throw new Error(`Missing environment variable: ${envKey}`);
  }
}

module.exports = {
  getEnvironmentVariable,
  defaultEnvironmentVariables,
};
