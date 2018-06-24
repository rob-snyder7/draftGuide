import React from 'react';
import ReactTable from "react-table";
import { rankColumns } from '../Utils/Data';
import { alterWidth } from '../Utils/GuideFunctions';



const TableRankings = ({name, data}) => {	
	
	return (
		<div>
			<h1 className='rankheader white tc'>{name} Rankings</h1>
	    	<ReactTable
	    		pageSize={data.length}
	    		showPagination={false}
		    	data={data}
		    	defaultSorted={[{id: 'AVG', asc: true}]}
		    	// columns={alterWidth(rankColumns)}
		    	columns={rankColumns}
		    	defaultSortMethod={(a,b,order) => {if (a==='-'){a = 999;} if (b==='-'){b = 999;} if (order === 'asc') {return b - a;}return a - b;}}
		    	style={{height: '85vh', background: '#CCCCCC'}}
		    	getTrProps={(state, rowInfo) => {
		    		return {style: {background: rowInfo.viewIndex % 2 === 0 ? 'white' : '#CCCCCC'}}}}
	    	/>
		</div>
	)
}

export default TableRankings;

