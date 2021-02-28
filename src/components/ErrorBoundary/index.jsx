import React from 'react';
import { element } from 'prop-types';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong...</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: element.isRequired,
};
