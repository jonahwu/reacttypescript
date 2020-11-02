import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

type Action = { type: 'reset' } | { type: 'INCREMENT' } | { type: 'DECREMENT' };

interface State {
  count: number;
}
let initialState={
	count: 0
}


const counter = (state = initialState, action: Action) => {
			console.log('show state number:',state.count)
      switch(action.type){
          case "INCREMENT":
							console.log('receive increment command:',state.count)
							const newstate:State= {count:state.count+1}
									return newstate
          case "DECREMENT":
							console.log('receive increment command:',state)
									const newstatede:State= {count:state.count+1}
									return newstatede
          default:
							console.log('not receive command:',state)
              return state
      }
  }

export default counter
