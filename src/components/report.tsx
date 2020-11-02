import * as React from 'react';
import {Fragment, useState} from 'react'
import { Button, TextField, Checkbox } from "@material-ui/core";
import {useSelector, useDispatch} from 'react-redux'
import { AppState } from './reducers';
import { State } from "./typesinfo"



interface Props {
	onSubmit: () => void;
}

function logsomething():void{

	console.log("yes get some thing here for show i am here");
	
}
type FormElem = React.FormEvent<HTMLFormElement>


export const Report: React.FC<Props> = () =>{

const counterd:State = useSelector((state: AppState) => state.counter)

const dispatch = useDispatch()

	const handleIncrement = (e: FormElem):void => {
				/* not to rerender */
				e.preventDefault()
  			dispatch({ type: 'INCREMENT' })
    }
	const handleDecrement = (e: FormElem):void => {
				/* not to rerender */
				e.preventDefault()
  			dispatch({ type: 'DECREMENT' })
    }


 	function test(text:string):void{
		console.log("in to test", text)
	}
 	function task():void{
		console.log("in to task")
	}
	return (
		<Fragment>	
				<input type='text' value={counterd.count} />

				<form onSubmit={handleIncrement}>
					<button type='submit'> + </button>
				</form>
				<form onSubmit={handleDecrement}>
					<button type='submit'> - </button>
				</form>

	</Fragment>	
				
				)
}

