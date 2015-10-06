# Relay + GraqhQL server rendering issues

#I did no delete ```node_modules``` because I changed few packages manualy 

###This repository is an example of how I am triyng to run Relay + GraphQL on server

###Issues which I reached and resolved:
- changed fbjs fetch to isomorphic-fetch
- changed fbjs getActiveElement 
- add Default network layer

###Issues which I did not resolve:
- [Cannot read property 'firstChild' of undefined](https://github.com/facebook/react/issues/2402), but I did not find one more React version

###What is working:
- fetch data by graphql, you can check it if check in console ```this.props.viewer.list``` (Home/index.js)

###How to run:
- ```nvm use 4.x.x```
- ```npm run start```


