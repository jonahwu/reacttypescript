import * as React from 'react';
import {Fragment, useState} from 'react'
import { Button, TextField, Checkbox } from "@material-ui/core";


interface Props {
	onSubmit: () => void;
}

function logsomething():void{

	console.log("yes get some thing here for show i am here");
	
}
type FormElem = React.FormEvent<HTMLFormElement>
export const MyApp: React.FC<Props> = () =>{

	const [inputValue, setInputValue] = useState<string>('')
	const [typeList, setTypeList] = useState<string[]>([])

	const handleSubmit = (e: FormElem): void => {
					e.preventDefault()
					console.log("the input value",inputValue)
				  setInputValue('')
					const newtypeList: string[] = [...typeList, inputValue]
					console.log("the input value list",newtypeList)
					setTypeList(newtypeList)
	}


 	function test(text:string):void{
		console.log("in to test", text)
	}
 	function task():void{
		console.log("in to task")
	}
	return (
					<Fragment>
							<h1> I am here </h1>
					  <form onSubmit={handleSubmit}>
							<input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
							<button type='submit'> Click Me </button>
					{/*<Button type='submit'> Click Me </Button> */}

						</form>
					</Fragment>
				
				)
}

