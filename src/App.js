import React, { Component } from 'react';
import './App.css';
import NavbarFunc from './Navbar';
import 'react-table/react-table.css'
import Homepage from './Homepage';
import TableRankings from './TableRankings';
import GuideRankings from './GuideRankings';
import 'tachyons';

class App extends Component {
  constructor() {
  	super()
  	this.state = {
  		route: 2,
      position: ''
  	}
  } 

  onItemClick = (event, event2) => {
  	this.setState({route: event})
    this.setState({position: event2})
  }

  render() {
  	let mainDisplays = [<TableRankings name={this.state.position}/>, <GuideRankings name={this.state.position}/>, <Homepage onItemClick={this.onItemClick} />]
    return (
    	<div>
	    	<NavbarFunc onItemClick={this.onItemClick} />
    		<div className='fl w-100 mt7 pa2'>
	    		{mainDisplays[this.state.route]}
    		</div>
    	</div>
    );
  }
}

export default App;



    	// <ReactTable 
    	// 	defaultPageSize={alRanks.length}
    	// 	showPagination={false}
	    // 	data={alRanks}
	    // 	columns={columns}
	    // 	style={{height:'90vh'}}
    	// />



// dynamic styling
// <ReactTable
//   getTrProps={(state, rowInfo, column) => {
//     return {
//       style: {
//         background: rowInfo.row.age > 20 ? "green" : "red"
//       }
//     };
//   }}
// />