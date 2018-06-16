import React from 'react';
import { DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';

const DraftsiteDropdown = ({onDropdownClick}) => {

		let options = ['YAHOO', 'CBS', 'ESPN', 'FOX', 'NFL', 'Reset']
		const dropdownOptions = options.map((option) => <MenuItem key={option} onClick={()=>{onDropdownClick(option)}}>{option}</MenuItem> ); 
		// const dropdownOptions = options.map((option) => <MenuItem key={option} onClick={()=>onDropdownClick(option)}>{option}</MenuItem> ); 
		dropdownOptions.splice(5,0,<MenuItem key='divider' divider/>)

	return (

		<div>
						<ButtonToolbar>
						  	<DropdownButton id='key' title="Draft website">
						 	   {dropdownOptions}
						    </DropdownButton>
						</ButtonToolbar>
		</div>
	)
}

export default DraftsiteDropdown;
							 


