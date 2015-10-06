require('babel/register')({
  stage: 0,
  plugins: [
    require('./plugins/babelRelay')
  ]
});

require('./src/server/index.js');