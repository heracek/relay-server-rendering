var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../src/server/graphql/schema.json');

module.exports = getBabelRelayPlugin(schema.data);