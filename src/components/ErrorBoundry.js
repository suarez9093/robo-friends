import React, { Component } from 'react';

class ErrorBoundry extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }
    render() {
        return this.setState.hasError ? <h1>Error</h1> : this.props.children
    }
}
export default ErrorBoundry;