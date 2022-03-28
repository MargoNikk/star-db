import React, { Component } from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';
import {
    PlanetList,
    PlanetDetails
} from '../sw-components';

export default class PlanetPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null
        };

        this.onItemSelected = this.onItemSelected.bind(this);
    }

    onItemSelected(id) {
        this.setState({
            selectedItem: id
        });
    }

    render() {
        const planetList = (
            <PlanetList onItemSelected={this.onItemSelected} />
        );

        const planetDetails = (
            <ErrorBoundry>
                <PlanetDetails itemId={this.state.selectedItem} />
            </ErrorBoundry>
        );

        return (
            <Row left={planetList} right={planetDetails} />
        );
    }
}