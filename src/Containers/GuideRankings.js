import React, {Component} from 'react';
import ReactTable from "react-table";
import GuideHeader from '../Components/GuideHeader/GuideHeader';
import { rankColumns } from '../Utils/Data';
import { alterColumn, alterData, alterWidth, rowColor, rowClickColor } from '../Utils/GuideFunctions';



class GuideRankings extends Component {
	constructor(props) {
		super(props)
		this.state = {
			source: 'Draft Site',
			reset: 0,
			columns: rankColumns,
			data: this.props.data,
			sorted: [{id: 'AVG', asc: true}],
			selected: []
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
			event='Draft Site' } 

		this.setState({reset: hold});
		this.setState({source: event});
		this.setState({columns: alterColumn(event, this.props.name)});
		this.setState({data: alterData(this.state.data, event)});	
		this.setState({ sorted: [{id: 'AVG', asc: true}] });
		this.setState({ selected: []});
	}


	render() {
		return (
			<div className='tableFrame'>
				<GuideHeader route={this.props.route} onDropdownClick={this.onDropdownClick} reset={this.state.reset} source={this.state.source} name={this.props.name}/>
		
		    	<ReactTable 
		    		pageSize={this.state.data.length}
		    		showPagination={false}
			    	data={this.state.data}
			    	sorted={this.state.sorted}
			    	// defaultSortMethod={(a,b,order) => {if (a==='-'){a = 999;} if (b==='-'){b = 999;} if (order === 'asc') {return b - a;}return a - b;}}
			    	columns={alterWidth(this.state.columns, this.props.name, this.state.source)}
			    	style={{height:'67vh', background: '#CCCCCC'}}
			    	getTrProps={(state, rowInfo, row, column) => {
			    		return {
			    			onClick: (e) => {
			    				if (this.state.selected.includes(rowInfo.index)) {
			    					let holdArr = this.state.selected
			    					holdArr.splice(this.state.selected.indexOf(rowInfo.index), 1)
			    					this.setState({selected: holdArr})
			    				} else {
				    				this.setState({ selected: this.state.selected.concat(rowInfo.index)})
			    				}
			    			},
			    			style: {
			    				background: rowColor(rowInfo, this.state.data.length),
								textDecoration: rowClickColor(rowInfo, this.state.selected)	    
			    	}}}}

			    	onSortedChange={sorted=>{this.setState({ sorted });}}
		    	/>
		    	<p className='fr pt3 f5'>*MFL - My Fantasy League,  FFC - Fantasy Football Calculator</p>
			</div>
		)
	}
}	



export default GuideRankings;