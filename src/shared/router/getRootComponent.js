import React, {DOM, Component} from 'react';
import {createElement} from 'react-router-relay';
import {RoutingContext} from 'react-router';
import {renderToStaticMarkup, renderToString} from 'react-dom/server.js';

let {body, div, script} = DOM;

export default function (renderProps) {
  let reactCmp = <RoutingContext createElement={createElement} {...renderProps} />;
  let str = '';

  try {
    str = renderToString(reactCmp);
  } catch (err) {
    console.log('renderToString err', err);
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