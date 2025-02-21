import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  // This method gets triggered when an error occurs in a child component
  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true };
  }

  // This method logs error details (e.g., to an external service)
  componentDidCatch(error, info) {
    // You could also log the error to an external service here
    console.error('Error caught by error boundary: ', error);
    console.error('Error info: ', info);
    this.setState({ errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      // Display a fallback UI in case of error
      return <h2>Something went wrong! {this.state.errorMessage}</h2>;
    }
console.log("test");
    // If no error, render the children components
    return this.props.children;
  }
}

export default ErrorBoundary;