/**
 * Created by jr1500 on 9/09/15.
 */

import './normalize.scss';
import './fonts.scss';
import './main.scss';
import './print.scss?media=print';
import React from 'react';
import App from './components/App/App.jsx';


main();

function main() {

  if(process.env.NODE_ENV === 'production') {
    React.render(<App />, document.getElementById('app'));
  }
  if(process.env.NODE_ENV !== 'production') {
    const app = document.createElement('div');

    document.body.appendChild(app);

    React.render(<App />, app);
  }
}