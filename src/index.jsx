import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.css';

ReactDOM.render(<App />, document.getElementById('root'));

// включить режим hot module replacement
if (module.hot) {
  module.hot.accept();
}
