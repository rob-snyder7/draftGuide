import React, {Component} from 'react';
import ReactTable from "react-table";
import GuideHeader from '../Components/GuideHeader/GuideHeader';
import { rankColumns } from '../Utils/Data';
import { alterColumn, alterData, alterWidth, rowColor } from '../Utils/GuideFunctions';



class GuideRankings extends Component {
	constructor(props) {
		super(props)
		this.state = {
			source: 'Select Draft Site',
			reset: 0,
			columns: rankColumns,
			data: this.props.data,
			sorted: [{id: 'AVG', asc: true}]
		}
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({data: alterData(nextProps['data'], this.state.source)})
		this.setState({ sorted: [{id: 'AVG', asc: true}] });
	}


	onDropdownClick = (event) => {
		let hold = 1
		if (event==='Reset') { 
			hold = 0 
			event='Select Draft Site' } 

		this.setState({reset: hold});
		this.setState({source: event});
		this.setState({columns: alterColumn(event)});
		this.setState({data: alterData(this.state.data, event)});	
		this.setState({ sorted: [{id: 'AVG', asc: true}] });
	}


	render() {
		return (
			<div className='tableFrame'>
				<GuideHeader onDropdownClick={this.onDropdownClick} reset={this.state.reset} source={this.state.source} name={this.props.name}/>

		    	<ReactTable 
		    		pageSize={this.state.data.length}
		    		showPagination={false}
			    	data={this.state.data}
			    	sorted={this.state.sorted}
			    	defaultSortMethod={(a,b,order) => {if (a==='-'){a = 999;} if (b==='-'){b = 999;} if (order === 'asc') {return b - a;}return a - b;}}
			    	columns={alterWidth(this.state.columns)}
			    	style={{height:'70vh', background: '#CCCCCC'}}
			    	getTrProps={(state, rowInfo, row, column) => {
			    		return {
			    			style: {
			    				background: rowColor(rowInfo, this.state.data.length)
			    	}}}}
			    	onSortedChange={sorted=>{this.setState({ sorted });}}
		    	/>
			</div>
		)
	}
}	



export default GuideRankings;