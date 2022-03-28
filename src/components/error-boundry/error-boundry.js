import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/';

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(err) {
        return { hasError: true };
    }

    componentDidCatch(err, errInfo) {
        console.log('Error: ' + err);
        console.log('Error Info: ', errInfo);
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return this.props.children;
    }
}