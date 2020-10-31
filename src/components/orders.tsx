import * as React from 'react';
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

export const MyForm: React.FC<Props> = () =>{
	const classes = useStyles()
	const bclasses = buttonStyles()
	return (
					<div style={{ textAlign: "center" }}> 
						<TextField />

					<div style={{ textAlign: "left" }}>
									<Button variant="contained">Default</Button>
					</div>
					{/*
					<div className={clsx('App', classes.root)}>
					<div>
						*/}
					<div className={classes.root}>
									<Checkbox
									value="checkedA"
									inputProps={{ 'aria-label': 'Checkbox A' }}
								/>
					</div>


					<div className={bclasses.root}>
{/*<Button onClick={() => { alert('clicked haha') }} variant="contained" color="primary" >Click me</Button> */}
				<Button onClick={logsomething} variant="contained" color="primary" >Click me</Button>
					</div>

					<div>
				<GroupedSelect />
					</div>

					<div>
				<CustomizedTables />
					</div>

					<div>
				<FreeSolo />
					</div>

				
				</div>
				)
}

