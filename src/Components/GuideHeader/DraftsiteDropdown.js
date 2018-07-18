import React, {Component} from 'react';
import { DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';

class DraftsiteDropdown extends Component {

	render () {

		let options = ['Yahoo', 'CBS', 'ESPN', 'MYF', 'FFC', 'Reset']
		const dropdownOptions = options.map((option) => <MenuItem key={option} onClick={()=>{this.props.onDropdownClick(option)}}>{option}</MenuItem> ); 
		dropdownOptions.splice(5,0,<MenuItem key='divider' divider/>)

		return (

			<div>
				<ButtonToolbar className='pa1'>
				  	<DropdownButton id='key' title={this.props.source}>
				 	   {dropdownOptions}
				    </DropdownButton>
				</ButtonToolbar>
			</div>
		)
	}
}

export default DraftsiteDropdown;
							 


