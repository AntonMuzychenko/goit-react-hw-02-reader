import React from 'react';
import ReactDOM from 'react-dom';
import Reader from './components/Reader';
import publication from './assets/publication.json';

ReactDOM.render(
  <Reader items={publication} />,
  document.getElementById('root'),
);
