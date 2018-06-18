import React from 'react';


const Homepage = ({ onItemClick }) => {

	// move to data?
	const positions = ['All','Quarterbacks','Running Backs', 'Wide Receivers', 'Tight Ends', 'Defenses']
	const pageLinks = [0,1]

	pageLinks.forEach(function(element) {
		pageLinks[element] = positions.map((position) => <p className='homeText' key={position} onClick={()=>onItemClick(element, position)}>{position}</p> ); 
	})

	return (

			<article className="homepage tc white">
			  <div className="fl w-100 w-50-ns">
			    <h1 className='homeHeader'>Rankings</h1>
			    {pageLinks[0]}
			  </div>
			  <div className="fl w-100 w-50-ns ph4-l">
			    <h1 className='homeHeader'>Draft Guide</h1>
			    {pageLinks[1]}
			  </div>
			</article>
	)
}

export default Homepage;


