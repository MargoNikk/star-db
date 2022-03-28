import React, { Component } from 'react';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';

const withRenderFunc = (renderFn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {renderFn}
            </Wrapped>
        );
    };
};

const withData = (View) => {
    return class extends Component {
        constructor() {
            super();

            this.state = {
                data: null,
                error: false,
                loading: true
            };

            this.onError = this.onError.bind(this);
            this.onUpdate = this.onUpdate.bind(this);
        }

        componentDidMount() {
            this.onUpdate();
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.onUpdate();
            }
        }

        onUpdate() {
            this.props.getData()
                .then((data) => {
                    this.setState({ data, loading: false });
                })
                .catch(this.onError);
        }

        onError = (err) => {
            this.setState({ error: true, loading: false });
        }


        render() {
            const { data, error, loading } = this.state;
            if (error) {
                return <ErrorIndicator />;
            }

            if (loading) {
                return <Spinner />;
            }

            return <View {...this.props} data={data} />
        }
    }
};

export { withRenderFunc };

export default withData;