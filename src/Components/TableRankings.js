import React from 'react';
import ReactTable from "react-table";
import { rankColumns } from '../Utils/Data';

const TableRankings = ({name, data}) => {	
	return (
		<div className=''>
			<h1 className='rankheader tc near-white vh-25 ma0'>{name} Rankings</h1>
	    	<ReactTable 
	    		pageSize={data.length}
	    		showPagination={false}
		    	data={data}
		    	defaultSorted={[{id: 'AVG', asc: true}]}
		    	columns={rankColumns}
		    	defaultSortMethod={(a,b,order) => {if (a==='-'){a = 999;} if (b==='-'){b = 999;} if (order === 'asc') {return b - a;}return a - b;}}
		    	style={{height: '75vh', background: 'white'}}
		    	getTrProps={(state, rowInfo) => {
		    		return {style: {background: rowInfo.viewIndex % 2 === 0 ? 'white' : '#CCCCCC'}}}}
	    	/>
		</div>
	)
}

export default TableRankings;

