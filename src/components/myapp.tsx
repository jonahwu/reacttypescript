import * as React from 'react';
import {useState} from 'react'
import {Button, TextField, Checkbox } from "@material-ui/core";
import GroupedSelect from "./groupselect";
import CustomizedTables from "./tables";
import FreeSolo from "./autocomplete";
import { makeStyles } from '@material-ui/core/styles'
import {buttonStyles} from "./zvstyle"
import {useStyles} from "./zvstyle"
import clsx from 'clsx'


interface Props {
	onSubmit: () => void;
}

function logsomething():void{

	console.log("yes get some thing here for show i am here");
	
}
type FormElem = React.FormEvent<HTMLFormElement>
export const MyApp: React.FC<Props> = () =>{

	const [inputValue, setInputValue] = useState<string>('')

	const handleSubmit = (e: FormElem): void => {
					e.preventDefault()
					console.log("the input value",inputValue)
				  setInputValue('')
	}


 	function test(text:string):void{
		console.log("in to test", text)
	}
 	function task():void{
		console.log("in to task")
	}
	return (
					  <form onSubmit={handleSubmit}>
							<h1> I am here </h1>
							<input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
							<button type='submit'> Click Me </button>
						</form>
				
				)
}

