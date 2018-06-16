import React from 'react';

const GuideKey = ({source}) => {
	return (
      	
		<div className="mw9 center ph3-ns h-25">
		  <div className="cf ph2-ns">
		    <div className="fl w-100 w-third-ns pa2">
		      <div className="outline bg-white pv4 pa2">
		      	Use the Dif column to see the draft value of players on {source} site. A large DIF value means that player is undervalued by {source}, while a negative DIF value means the player is overvalued. Target undervalued players. Avoid overvalued players.
		      </div>
		    </div>
		    <div className="fl w-100 w-third-ns pa2">
		      <div className="outline bg-white pv4 pa2">
					<table>
				      <tbody>
				        <tr>
				          <td  className="pv3 pr3 ba w-20" style={{backgroundColor: "#2D882D"}}></td>
				          <td  className="pv3 pr3">Highly undervalued - Draft Priority!</td>
				        </tr>
				        <tr>
				          <td  className="pv3 pr3 ba" style={{backgroundColor: "#55AA55"}}></td>
				          <td  className="pv3 pr3">Moderately undervalued - Target this player</td>
				        </tr>
				        <tr>
				          <td  className="pv3 pr3 ba" style={{backgroundColor: "#88CC88"}}></td>
				          <td  className="pv3 pr3">Slightly undervalued - Good pick</td>
				        </tr>
				      </tbody>
				    </table>
		      </div>
		    </div>
		    <div className="fl w-100 w-third-ns pa2">
		      <div className="outline bg-white pv4 pa2">
		      		<table>
				      <tbody>
				        <tr>
				          <td  className="pv3 pr3 ba w-20" style={{backgroundColor: "#AA3939"}}></td>
				          <td  className="pv3 pr3">Highly overvalued - Do Not Draft!</td>
				        </tr>
				        <tr>
				          <td  className="pv3 pr3 ba" style={{backgroundColor: "#D46A6A"}}></td>
				          <td  className="pv3 pr3">Moderately overvalued - Avoid this player</td>
				        </tr>
				        <tr>
				          <td  className="pv3 pr3 ba" style={{backgroundColor: "#FFAAAA"}}></td>
				          <td  className="pv3 pr3">Slightly overvalued - Bad pick</td>
				        </tr>
				      </tbody>
				   	</table>
		      </div>
		    </div>
		  </div>
		</div>
	)
}

export default GuideKey;
		  //     	<div className='dt'>
				//    <div class="dtc">woo</div>
				//    <div class="dtc">hoo</div>
				// </div>
		  //     	<div className='dt'>
				//    <div class="dtc">woo</div>
				//    <div class="dtc">hoo</div>
				// </div>
				// <div className='dt'>
				//    <div class="dtc">woo</div>
				//    <div class="dtc">hoo</div>
				// </div>