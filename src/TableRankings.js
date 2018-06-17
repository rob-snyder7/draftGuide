import React from 'react';
import ReactTable from "react-table";
import { rankColumns } from './Data';

const TableRankings = ({name, data}) => {	
	return (
		<div>
			<h1 className='tc'>{name} Rankings</h1>
	    	<ReactTable 
	    		defaultPageSize={data.length}
	    		showPagination={false}
		    	data={data}
		    	columns={rankColumns}
		    	style={{height:'90vh'}}
	    	/>
		</div>
	)
}

export default TableRankings;