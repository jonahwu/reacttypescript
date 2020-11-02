import * as React from 'react';
import {Fragment, useState} from 'react'
import { Button, TextField, Checkbox } from "@material-ui/core";
import {useSelector, useDispatch} from 'react-redux'
import { AppState } from './reducers';



interface Props {
	onSubmit: () => void;
}

function logsomething():void{

	console.log("yes get some thing here for show i am here");
	
}
type FormElem = React.FormEvent<HTMLFormElement>


export const Report1: React.FC<Props> = () =>{


const counterd: number = useSelector((state: AppState) => state.counter)
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
				<input type='text' value={counterd} />

				<form onSubmit={handleDecrement}>
					<button type='submit'> - </button>
				</form>

	</Fragment>	
				
				)
}

