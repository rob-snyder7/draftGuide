import React from 'react';
import './Homepage.css';

const Homepage = ({ onItemClick }) => {

	const positions = ['Top 300','Quarterbacks','Running Backs', 'Wide Receivers', 'Tight Ends', 'Defenses']
	const pageLinks = [0,1]

	pageLinks.forEach(function(element) {
		pageLinks[element] = positions.map((position) => <p className='homeText' key={position} onClick={()=>onItemClick(element, position)}>{position}</p> ); 
	})

	return (

			<div style={{backgroundImage: 'url(' + require('../background.jpg') + ')'}} className="homepage tc">
			  <div className="fl w-100 w-50-ns group">
			    <h1 className='homeHeader'>PPR</h1>
			    {pageLinks[0]}
			  </div>
			  <div className="fl w-100 w-50-ns group">
			    <h1 className='homeHeader'>Standard</h1>
			    {pageLinks[1]}
			  </div>
			</div>
	)
}

export default Homepage;


