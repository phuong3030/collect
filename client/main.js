import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../imports/ui/app';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
