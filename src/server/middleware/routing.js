import {createLocation} from 'history'
import createMemoryHistory from 'history/lib/createMemoryHistory.js';
import router from '../../shared/router';

const history = createMemoryHistory();

export default function (req, res) {
  let location = createLocation(req.url);

  router(location, history)
    .then((reactStr) => {
      res.status(200).send(reactStr);
    }, (err = {}) => {
      console.error('router error', err);

      res.status(500).send(JSON.strigify(err, null, 4));
    });
}
