import React, { Component } from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';
import {
    PersonList,
    PersonDetails
} from '../sw-components';

export default class PeoplePage extends Component {
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
        const personList = (
            <PersonList
                onItemSelected={this.onItemSelected}>
                {({ name, gender }) => (
                    `${name} / (${gender})`
                )}
            </PersonList>
        );

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails itemId={this.state.selectedItem} />
            </ErrorBoundry>
        );

        return (
            <Row left={personList} right={personDetails} />
        );
    }
}