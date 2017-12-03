import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader'

import Root from './containers/Root';
import configureStore from './store/configureStore'

// Disable Electron App Drop File
document.addEventListener('dragover', function (event) {
  event.preventDefault();
  return false;
}, false);

document.addEventListener('drop', function (event) {
  event.preventDefault();
  return false;
}, false);


// Material-UI use react-tap-event-plugin to listen for touch / tap / clickevents.
// http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin();
const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root);

if (module.hot) module.hot.accept('./containers/Root', () => {
  render(Root)
});
