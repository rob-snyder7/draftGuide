import React from 'react';
import ReactTable from "react-table";
import { alRanks, qbRanks, rbRanks, teRanks, wrRanks, deRanks, kiRanks, columns } from './Data';

const TableRankings = ({name}) => {
	const positionDataReference = {'All': alRanks, 'Quarterbacks': qbRanks, 'Running Backs': rbRanks,'Wide Receivers': wrRanks, 'Tight Ends': teRanks, 'Defenses': deRanks, 'Kickers': kiRanks}
	
	return (
		<div>
			<h1 className='tc'>{name} Rankings</h1>
	    	<ReactTable 
	    		defaultPageSize={positionDataReference[name].length}
	    		showPagination={false}
		    	data={positionDataReference[name]}
		    	columns={columns}
		    	style={{height:'90vh'}}
	    	/>
		</div>
	)
}

export default TableRankings;