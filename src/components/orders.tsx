import * as React from 'react';
import {Button, TextField, Checkbox } from "@material-ui/core";
import GroupedSelect from "./groupselect";
import CustomizedTables from "./tables";
import FreeSolo from "./autocomplete";

interface Props {
	onSubmit: () => void;
}

export const MyForm: React.FC<Props> = () =>{
	return (
					<div style={{ textAlign: "center" }}> 
						<TextField />

					<Button variant="contained">Default</Button>

					<Checkbox
					value="checkedA"
					inputProps={{ 'aria-label': 'Checkbox A' }}
				/>


				<Button onClick={() => { alert('clicked haha') }} variant="contained" color="primary" >Click me</Button>

				<GroupedSelect />
				<CustomizedTables />
				<FreeSolo />

				
				</div>
				)
}
//LOVE YOU BUNNY
