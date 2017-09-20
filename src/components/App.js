import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500);
    }

    render() {

        if(this.state.loading) {
            return null; // render null when app is not ready
        }

        return (
            <div>I'm the app</div>
        );
    }
}

