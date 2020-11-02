import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import { State, initialState } from "./typesinfo"

type Action = { type: 'reset' } | { type: 'INCREMENT' } | { type: 'DECREMENT' }| { type: 'INCREMENT_ASYNC' }| { type: 'DECREMENT_ASYNC' };



const counter = (state = initialState, action: Action) => {
			console.log('show state number:',state.count)
      switch(action.type){
					// if we use async we need to ignore case of INCREMENT or it will eat increment case and without delay
					/*
          case "INCREMENT":
							console.log('receive increment command:',state.count)
							const newstate:State= {count:state.count+1}
									return newstate
					*/
          case "INCREMENT_ASYNC":
							console.log('receive increment command:',state.count)
							const newstateAsync:State= {count:state.count+1}
									return newstateAsync
          case "DECREMENT":
							console.log('receive increment command:',state)
									const newstatede:State= {count:state.count-1}
									return newstatede
          default:
							console.log('not receive command:',state)
              return state
      }
  }

export default counter
