
//The goal of this component is to practice the useReducer hook. It is an alternative to the useState and effective if the state transitions depend on a previous state.
//It is like something is being updated rather then overwritten.

//importing what I need
import React,{useReducer} from "react";

function UseReducerCounter(){//Initialization by defining an intial state and a reducer function and a reducer function that decides how the state will update.

    const initialState = {count:0}

    const reducer = (state,action) =>{
        switch(action.type){
            case 'INCREMENT':
                return{count: state.count + .25}
            case 'DECREMENT':
                return{count: state.count - .25}
            default:
                return state;
        }
    }

    // the useReducer will take the initialState and reducer function that was built.
    // It will then return a current state and a dispatch function to dispatch actions that trigger an update.

    const[state, dispatch]= useReducer(reducer, initialState);

    //To update the state, one must use a dispatching action with a type property.
    return(<div>
        <p>useReducer state count:{state.count}</p>
        <button onClick={()=>{dispatch({type:"INCREMENT"})}} >Increment</button>
        <button onClick={()=>{dispatch({type:"DECREMENT"})}} >decrement</button>
    </div>)

  }
export default UseReducerCounter;





