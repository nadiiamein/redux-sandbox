import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as action from '../action';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div  className ="jumbotron">
        <h2 id="counter">{counter}</h2>
        <button 
        onClick={inc}
        className="btn btn-primary btn-lg">INC</button>
        <button 
        onClick={dec}
        className="btn btn-primary btn-lg">DEC</button>
        <button 
        onClick={rnd}
        className="btn btn-primary btn-lg">RND</button>
    </div>
    );
};
const mapStateToProps = (state) => {
    return {
        counter: state
    };
};



export default connect(mapStateToProps, action)(Counter);