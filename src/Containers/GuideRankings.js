import React, {Component} from 'react';
import ReactTable from "react-table";
import GuideHeader from '../Components/GuideHeader/GuideHeader';
import { rankColumns } from '../Utils/Data';
import { alterColumn, alterData } from '../Utils/GuideFunctions';



class GuideRankings extends Component {
	constructor(props) {
		super(props)
		this.state = {
			source: 'Select Draft Site',
			reset: 0,
			columns: rankColumns,
			data: this.props.data
		}
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({data: nextProps['data']})
	}


	onDropdownClick = (event) => {
		let hold = 1
		if (event==='Reset') { 
			hold = 0 
			event='Select Draft Site' } 
		this.setState({reset: hold})
		this.setState({source: event});
		this.setState({columns: alterColumn(event)})
		this.setState({data: alterData(this.state.data, event)})
	}



	render() {
		return (
			<div>
				<GuideHeader onDropdownClick={this.onDropdownClick} reset={this.state.reset} source={this.state.source} name={this.props.name}/>

		    	<ReactTable 
		    		defaultPageSize={this.state.data.length}
		    		showPagination={false}
			    	data={this.state.data}
			    	columns={this.state.columns}
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