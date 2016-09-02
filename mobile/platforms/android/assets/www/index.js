import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import Chat from './components/chat';

ReactDOM.render(
  <Chat/>,
  document.getElementById('react-root')
);

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
