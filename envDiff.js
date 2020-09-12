const fs = require('fs');

function compareFiles(envFilename, envExampleFilename) {
  try {
    compareKeys(
      getKeysFromFile(envFilename),
      getKeysFromFile(envExampleFilename)
    );
  } catch (err) {
    console.error(err);
  }
}

function compareKeys(keysOfEnv, keysOfExample) {
  for (const key of keysOfEnv) {
    if (!keysOfExample.includes(key)) {
      console.error(`Missing ${key} in .env.example.`);
    }
  }
}

function getKeysFromFile(filename) {
  const file = fs.readFileSync(filename, 'utf-8');
  const rows = file.split('\n');
  return getKeysFromRows(rows);
}

function getKeysFromRows(rows) {
  let keys = [];
  for (const row of rows) {
    let rowSplitted = row.split('=');
    if (rowSplitted.length > 1) {
      keys.push(rowSplitted[0]);
    }
  }
  return keys;
}

module.exports = {
  compareFiles,
};
