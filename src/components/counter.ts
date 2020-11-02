import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

type Action = { type: 'reset' } | { type: 'INCREMENT' } | { type: 'DECREMENT' };


const counter = (state = 0, action: Action) => {
			console.log('show state number:',state)
      switch(action.type){
          case "INCREMENT":
							console.log('receive increment command:',state)
              return state+1
          case "DECREMENT":
							console.log('receive increment command:',state)
              return state-1
          default:
							console.log('not receive command:',state)
              return state
      }
  }

export default counter
