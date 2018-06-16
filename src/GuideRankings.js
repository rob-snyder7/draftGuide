import React, {Component} from 'react';
import ReactTable from "react-table";
import GuideHeader from './GuideHeader';
import { alRanks, qbRanks, rbRanks, teRanks, wrRanks, deRanks, kiRanks, columns } from './Data';


class GuideRankings extends Component {
	constructor() {
		super()
		this.state = {
			source: '',
			reset: 0
		}
	}

	onDropdownClick = (event) => {
		let hold = 1
		if (event==='Reset') { hold = 0 } 
		this.setState({reset: hold})
		this.setState({source: event});
	}


	render() {
		const positionDataReference = {'All': alRanks, 'Quarterbacks': qbRanks, 'Running Backs': rbRanks,'Wide Receivers': wrRanks, 'Tight Ends': teRanks, 'Defenses': deRanks, 'Kickers': kiRanks}
		return (
			<div>

				<GuideHeader onDropdownClick={this.onDropdownClick} reset={this.state.reset} source={this.state.source}/>

				<h1 className='tc'>{this.props.name} Rankings</h1>
		    	<ReactTable 
		    		defaultPageSize={positionDataReference[this.props.name].length}
		    		showPagination={false}
			    	data={positionDataReference[this.props.name]}
			    	columns={columns}
			    	style={{height:'90vh'}}
		    	/>
			</div>
		)
	}
}	
	// onDropdownClick changes state (create state for columns, and metrics)
	// 		calls componenet to return columns 
	// 		calls componenet to return updated data rankings with metrics added 

	// -Guide Instructions 
	// 		-dropdown component (changing dropdown changes state in this part)
	// 		-instruction component
	//      -arrange header componenets (draw out and plan)


export default GuideRankings;