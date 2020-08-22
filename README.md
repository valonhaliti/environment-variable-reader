# Environment Variable Reader

## Install

```
npm i environment-variable-reader
```

## Usage

Create a file named `.env`. And fill it with content like:

```
DB_NAME=thedb
DB_HOST=localhost
```

Then in your code you can access `DB_NAME` like so:

```javascript
const { getEnvironmentVariable } = require('environment-variable-reader');

const dbName = getEnvironmentVariable('DB_NAME');
```

### Default value

If your `.env` file does not have `DB_USER` and we want `DB_USER` to have a default value than we can do it like this:

```javascript
const dbUser = getEnvironmentVariable('DB_USER', 'root');
```

Otherwise if we don't specify a default value and that environment variable does not not exist, then `getEnvironmentVariable` will throw error.
