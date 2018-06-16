import React from 'react';

const GuideKey = ({source}) => {
	return (
  		<div className=''>
  			<p> 
  				Use the Dif column to see the draft value of players on {source} site. A large DIF value means that player is undervalued by {source}, while a negative DIF value means the player is overvalued. Target undervalued players. Avoid overvalued players. 
  			</p>
      	</div>
	)
}

export default GuideKey;