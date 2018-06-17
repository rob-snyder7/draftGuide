import React from 'react';


const Homepage = ({ onItemClick }) => {

	const positions = ['All','Quarterbacks','Running Backs', 'Wide Receivers', 'Tight Ends', 'Defenses']
	const pageLinks = [0,1]

	pageLinks.forEach(function(element) {
		pageLinks[element] = positions.map((position) => <p key={position} onClick={()=>onItemClick(element, position)}>{position}</p> ); 
	})

	return (
		<article className="cf">
		  <div className="fl w-100 w-50-ns bg-near-white tc">
		    <h1>Rankings</h1>
		    {pageLinks[0]}
		  </div>
		  <div className="fl w-100 w-50-ns bg-light-gray tc">
		    <h1>Draft Guide</h1>
		    {pageLinks[1]}
		  </div>
		</article>
	)
}

export default Homepage;