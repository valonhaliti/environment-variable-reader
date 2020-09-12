const assert = require('assert');
const { getEnvironmentVariable, defaultEnvironmentVariables } = require('.');

it('should throw error when accessing inexistent key', () => {
  try {
    getEnvironmentVariable('DOES_NOT_EXIST');
  } catch (err) {
    assert.ok(err.message.startsWith('Missing environment variable'));
  }
});

it('should return default value that is set when accessing inexistent key', () => {
  const dbHost = getEnvironmentVariable('DB_HOST', 'localhost');
  assert.strictEqual(dbHost, 'localhost');
});

it('should return environment variable value of an existing environment key (see .env file)', () => {
  const val = getEnvironmentVariable('KEY');
  assert.strictEqual(val, 'VAL123');
});

it('should return all default environment variables keys set by this app', () => {
  assert.deepStrictEqual(defaultEnvironmentVariables, ['DB_HOST']);
});
