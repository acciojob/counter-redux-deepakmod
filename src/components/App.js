import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { increment , decrement , reset } from './ActionCreation/CounterActionCreation.js';

function App(props) {

    let counter = useSelector(state=>state.a)
    let dispatch = useDispatch()

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>{dispatch(increment(1))}}> Increment </button>
            <button onClick={()=>{dispatch(decrement(1))}}> Decrement </button>
            <button onClick={()=>{dispatch(reset())}}> Reset </button>
        </div>
    );
}

export default App;