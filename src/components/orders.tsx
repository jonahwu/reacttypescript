import * as React from 'react';
import {Button, TextField, Checkbox } from "@material-ui/core";

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
				
				</div>
				)
}
