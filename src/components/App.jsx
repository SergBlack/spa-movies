import React, { PureComponent } from 'react';
import WebpackImage from '../assets/images/webpack.jpg';
import logger from '../helpers/logger';

logger('Hello World!');

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <p>Hello from React!!!</p>
        <p>Webpack</p>
        <img src={WebpackImage} alt="WebpackImage" />
      </div>
    );
  }
}
