import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Match, Miss} from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import store from './store';
import TeamPicker from './components/TeamPicker';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={TeamPicker} />
        <Match pattern="/team/:teamId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Provider store={store}><Root/></Provider>, document.querySelector('#main'));
