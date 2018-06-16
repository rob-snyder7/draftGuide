import React, {Component} from 'react';
import { DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';

class DraftsiteDropdown extends Component {
	constructor (props) {
		super(props)
		this.state = {
			title: "Draft website"
		}
	}

	render () {

		let options = ['YAHOO', 'CBS', 'ESPN', 'FOX', 'NFL', 'Reset']
		const dropdownOptions = options.map((option) => <MenuItem key={option} onClick={()=>{this.props.onDropdownClick(option)}}>{option}</MenuItem> ); 
		dropdownOptions.splice(5,0,<MenuItem key='divider' divider/>)

		return (

			<div>
				<ButtonToolbar>
				  	<DropdownButton id='key' title={this.props.source}>
				 	   {dropdownOptions}
				    </DropdownButton>
				</ButtonToolbar>
			</div>
		)
	}
}

export default DraftsiteDropdown;
							 


