 import { guideColumns, rankColumns } from './Data.js';

export function alterWidth(columns) {
	for (var i = 0; i < columns.length; i++) {
		columns[i]['minWidth'] = 50;
		if (columns[i]['Header']===`Rank`) {
			columns[i]['minWidth'] = 40;
		} else if (columns[i]['Header']===`Name`) {
			columns[i]['minWidth'] = 90
		}
	} 
	return columns;
}

// try without above function?
// 50,40,100

export function rowColor(rowInfo, pageSize) {
		let difVal = rowInfo.row.DIF / (pageSize/50)
		  if (difVal > 12) {
		  	return '#2D882D';
		  } else if (difVal > 8) {
		  	return '#55AA55';
		  } else if (difVal > 4) {
		  	return '#88CC88';
		  } else if (difVal < -12) {
		  	return '#AA3939';
		  } else if (difVal < -8) {
		  	return '#D46A6A';
		  } else if (difVal < -4) {
		  	return '#FFAAAA';
		  }
		if (rowInfo.viewIndex%2===0) {
		  	return 'white'
		  } else {
			return '#CCCCCC';
		  }
	}


 export function alterColumn(event) {
 	if (event==='Select Draft Site') {
 		return rankColumns;
 	} else {
 		const sourceColumn = {'Yahoo': 3, 'CBS': 4, 'ESPN': 5, 'MYF': 6, 'FFC': 7}
	 	let adjguideColumns = guideColumns.map(u => Object.assign({}, u, { approved: true }));
	 	let check = adjguideColumns.splice(sourceColumn[event],1);

	 	adjguideColumns.splice(3,0,check[0]);
	 	adjguideColumns[8]['Header'] = 'AVG w/o ' + event;
  		[3,8,9].forEach(element => {
  			adjguideColumns[element]['headerStyle'] = {backgroundColor: '#606D77', fontWeight: 400, width: '10%', color: 'white'};
  		});
	 	return adjguideColumns;
 	}
 }


 export function alterData(data, event) {
 	if (event==='Select Draft Site') {
 		return data;
 	} else {
 		let avg = 0
	 	let adjdata = data.map(u => Object.assign({}, u, { approved: true }));
	 	let sources = ['YAH', 'CBS', 'ESP', 'MYF', 'FFC'];
	 	const sourceReference = {'Yahoo': 'YAH', 'CBS': 'CBS', 'ESPN': 'ESP', 'MYF': 'MYF', 'FFC': 'FFC'}
	 	sources = sources.filter(e => e !== sourceReference[event]);
	 	  	for(let i = 0; i < adjdata.length; i++){
		  		let total = 0.00;
		  		let count = 0.00;
		  		let std = 0.00;
		  		let stdArr = [];
		  		for(let x = 0; x < sources.length; x++) {
		  			if (!(adjdata[i][sources[x]]==='-')){
			  			total = total + adjdata[i][sources[x]];
			  			count = count + 1;
			  			stdArr.push(adjdata[i][sources[x]]);
			  		}
			  	}
			  	// if (count==0) {
			  	// 	adjdata[i]['AVG'] = '-'
			  	// } else {
				let avg = Math.round((parseFloat(total)/count)*100)/100;
			  	// }
			  	adjdata[i]['AVG'] = avg;
			  	if (stdArr.length > 1){
			  		for(let z = 0; z < stdArr.length; z++){
			  			std = parseFloat(std) + ((parseFloat(stdArr[z]) - parseFloat(avg))**2);
			  		}
			  	}
			  	adjdata[i]['STD'] = Math.round((((parseFloat(std)/(parseFloat(stdArr.length) - 1))**.5)*100),0)/100;
		  		if(adjdata[i][sourceReference[event]] === '-'){
		  			adjdata[i]['DIF'] = '-';
		  		} else {
			  		adjdata[i]['DIF'] = Math.round((adjdata[i][sourceReference[event]] - adjdata[i]['AVG'])*100)/100
		  		}
	  		}
	 	return adjdata;
	}	 	
 }




