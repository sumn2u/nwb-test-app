import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <div className="App">
                Is this workinfg? <Home txt={this.props.stateReady} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stateReady: state.baseReducer.working
    };
};

export default connect(mapStateToProps)(App);
