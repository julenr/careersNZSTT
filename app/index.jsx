/**
 * Created by jr1500 on 9/09/15.
 */

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