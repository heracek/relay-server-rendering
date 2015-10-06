import fs from 'fs';
import path from 'path';
import {schema} from '../src/server/graphql/schema.js';
import {graphql}  from 'graphql';
import {introspectionQuery, printSchema} from 'graphql/utilities';

// Save JSON of full schema introspection for Babel Relay Plugin to use
async () => {
  let result = await (graphql(schema, introspectionQuery));
  if (result.errors) {
    console.error(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2)
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, '../src/server/graphql/schema.json'),
      JSON.stringify(result, null, 2)
    );
  }
}();

// Save user readable type system shorthand of schema
fs.writeFileSync(
  path.join(__dirname, '../src/server/graphql/schema.graphql'),
  printSchema(schema)
);
