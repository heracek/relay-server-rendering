import {match} from 'react-router';
import Promise from 'promise';
import routes from './routes.js';
import getRootComponent from './getRootComponent.js';

export default function (location, history) {
  return new Promise((fullfill, reject) => {
   match({routes, location, history}, (error, redirectLocation, renderProps) => {
    if (renderProps) {
      fullfill(getRootComponent(renderProps));
    } else if (error) {
      reject(error);
    }
  })
  });
}