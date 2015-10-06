import React, {DOM, Component} from 'react';
import {RoutingContext} from 'react-router';
import {renderToStaticMarkup, renderToString} from 'react-dom/server.js';

let {body, div, script} = DOM;

export default function (renderProps) {
  let reactCmp = <RoutingContext {...renderProps} />;
  let str = '';

  try {
    str = renderToString(reactCmp);
  } catch (err) {
    console.log('renderToString err', JSON.stringify(err, null, 4));
  }

  return renderToStaticMarkup(
    body(
      null,
      div({
        id: 'app', 
        dangerouslySetInnerHTML: {
          __html: str
        }
      })
    )
  );
}