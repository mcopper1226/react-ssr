import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';;

const app = express();

app.use(express.static('public'));

app.use('/api', proxy('https://restsims.com/wp-json/wp/v2/posts'));
app.get('*', (req, res) => {

  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route, match }) => {
    return route.loadData ? route.loadData(store, match.params) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  })
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
