import React from 'react';

const GuideKey = ({source}) => {
	return (
			<div className='row white keyText'>
				          		<div className='col-md-4 col-sm-4 col-xs-12'>
					         		<span>
					         				The table compares {source} to average of other sites. Use DIF column to determine value of players. 
					         		</span>
					          	</div>
				          		<div className='col-md-8 col-sm-8 col-xs-12'>
					          		<div className="">
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#2D882D"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Highly undervalued - Draft Priority!
					          			</div>
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#AA3939"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Highly overvalued - Do Not Draft!
					          			</div>
					          		</div>
					          		<div className="">
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#55AA55"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Moderately undervalued - Target this player
					          			</div>
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#D46A6A"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Moderately overvalued - Avoid this player
					          			</div>
					          		</div>
					          		<div className="">
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#88CC88"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Slightly undervalued - Good pick
					          			</div>
					          			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#FFAAAA"}}>
					          			</div>
					          			<div className='col-md-5 col-sm-5 col-xs-5'>
					          				Slightly overvalued - Bad pick
					          			</div>
					          		</div>
					          	</div>
				          	</div>
	)
}

export default GuideKey;






				     //      	<div className='row pt3 white draftGuideText'>
				     //      		<div className='col-md-4 col-sm-2 col-xs-2 keyText'>
									// <p>
					    //      				You have selected {source} as your 					         		
					    //      				The AVG w/o {source} column swithout {source}					         			
					    //      				DIF shows w/o {source} and {source}
									// </p>
					         			
					         			
					          // 	</div>
				          	// 	<div className='col-md-8 col-sm-10 col-xs-10 draftGuideText'>
					          // 		<div className="insideRow">
					          // 			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#2D882D"}}>
					          // 			</div>
					          // 			<div className='col-md-5 col-sm-5 col-xs-5 keyText'>
					          // 				Highly undervalued - Draft Priority!
					          // 			</div>
					          // 			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#AA3939"}}>
					          // 			</div>
					          // 			<div className='col-md-5 col-sm-5 col-xs-5 keyText'>
					          // 				Highly overvalued - Do Not Draft!
					          // 			</div>
					          // 		</div>
					          // 		<div className="insideRow">
					          // 			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#55AA55"}}>
					          // 			</div>
					          // 			<div className='col-md-5 col-sm-5 col-xs-5 keyText'>
					          // 				Moderately undervalued - Target this player
					          // 			</div>
					          // 			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#D46A6A"}}>
					          // 			</div>
					          // 			<div className='col-md-5 col-sm-5 col-xs-5 keyText'>
					          // 				Moderately overvalued - Avoid this player
					          // 			</div>
					          // 		</div>
					          // 		<div className="insideRow">
					          // 			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#88CC88"}}>
					          // 			</div>
					          // 			<div className='col-md-5 col-sm-5 col-xs-5 keyText'>
					          // 				Slightly undervalued - Good pick
					          // 			</div>
					          // 			<div className='col-md-1 col-sm-1 col-xs-1 color' style={{backgroundColor: "#FFAAAA"}}>
					          // 			</div>
					          // 			<div className='col-md-5 col-sm-5 col-xs-5 keyText'>
					          // 				Slightly overvalued - Bad pick
					          // 			</div>
					          // 		</div>
					          // 	</div>
				          	// </div>









			  	//   <div class="fl w-50">
				  //   				<div className=" row insideRow draftGuideText pv1">
				  //   					<div className='fl w-40 pa1'></div>
					 //          			<div className='fl w-10 color' style={{backgroundColor: "#2D882D"}}>
					 //          			</div>
					 //          			<div className='fl ml2'>
					 //          				Highly undervalued - Draft Priority!
					 //          			</div>
				  //         			</div>
				  //   				<div className=" row insideRow draftGuideText pv1">
					 //    				<div className='fl w-40 pa1'></div>
					 //          			<div className='fl w-10 color' style={{backgroundColor: "#2D882D"}}>
					 //          			</div>
					 //          			<div className='fl ml2'>
					 //          				Highly undervalued - Draft Priority!
					 //          			</div>
				  //         			</div>
				  //   				<div className=" row insideRow draftGuideText pv1">
				  //   					<div className='fl w-40 pa1'></div>
					 //          			<div className='fl w-10 color' style={{backgroundColor: "#2D882D"}}>
					 //          			</div>
					 //          			<div className='fl ml2'>
					 //          				Highly undervalued - Draft Priority!
					 //          			</div>				          			
				  //         			</div>
				  // </div>
			  	//   <div class="fr w-50">
				  //   				<div className="row insideRow draftGuideText pv1">
				  //   					<div className='fr w-40 pa1'></div>
					 //          			<div className='fl w-10 color' style={{backgroundColor: "#2D882D"}}>
					 //          			</div>
					 //          			<div className='fl ml2'>
					 //          				Highly undervalued - Draft Priority!
					 //          			</div>
				  //         			</div>
				  //   				<div className="row insideRow draftGuideText pv1">
				  //   					<div className='fr w-40 pa1'></div>
					 //          			<div className='fl w-10 color' style={{backgroundColor: "#2D882D"}}>
					 //          			</div>
					 //          			<div className='fl ml2'>
					 //          				Highly undervalued - Draft Priority!
					 //          			</div>
				  //         			</div>
				  //   				<div className="row insideRow draftGuideText pv1">
				  //   					<div className='fr w-40 pa1'></div>
					 //          			<div className='fl w-10 color' style={{backgroundColor: "#2D882D"}}>
					 //          			</div>
					 //          			<div className='fl ml2'>
					 //          				Highly undervalued - Draft Priority!
					 //          			</div>
				  //         			</div>
				  // </div>
					          		// <div className="row insideRow draftGuideText pv1">
					          		// 	<div className='fl w-10 color mr2' style={{backgroundColor: "#2D882D"}}>
					          		// 	</div>
					          		// 	<div className='fl'>
					          		// 		Highly undervalued - Draft Priority!
					          		// 	</div>
					          		// 	<div className='fr'>
					          		// 		Highly undervalued - Draft Priority!
					          		// 	</div>
					          		// 	<div className='fr w-10 color mr2' style={{backgroundColor: "#2D882D"}}>
					          		// 	</div>
					          		// </div>
					          		// <div className="row insideRow draftGuideText pv1">
					          		// 	<div className='fl w-10 color mr2' style={{backgroundColor: "#2D882D"}}>
					          		// 	</div>
					          		// 	<div className='fl'>
					          		// 		Highly undervalued - Draft Priority!
					          		// 	</div>
					          		// 	<div className='fr'>
					          		// 		Highly undervalued - Draft Priority!
					          		// 	</div>
					          		// 	<div className='fr w-10 color mr2' style={{backgroundColor: "#2D882D"}}>
					          		// 	</div>
					          		// </div>
					          		// <div className="row insideRow draftGuideText pv1">
					          		// 	<div className='fl w-10 color mr2' style={{backgroundColor: "#2D882D"}}>
					          		// 	</div>
					          		// 	<div className='fl'>
					          		// 		Highly undervalued - Draft Priority!
					          		// 	</div>
					          		// 	<div className='fr'>
					          		// 		Highly undervalued - Draft Priority!
					          		// 	</div>
					          		// 	<div className='fr w-10 color mr2' style={{backgroundColor: "#2D882D"}}>
					          		// 	</div>
					          		// </div>


		    // <div class="fl w-100 w-third-ns pa2">
		    //   <div class="outline pv4"></div>
		    // </div>

		// <div className="mw9 center ph3-ns guideKey">
		//   <div className="cf ph2-ns">
		//     <div className="fl w-100 w-third-ns pa2">
		//       <div className="outline bg-white pv4 pa2">
		//       	Use the Dif column to see the draft value of players on {source} site. A large DIF value means that player is undervalued by {source}, while a negative DIF value means the player is overvalued. Target undervalued players. Avoid overvalued players.
		//       </div>
		//     </div>
		//     <div className="fl w-100 w-third-ns pa2">
		//       <div className="outline bg-white pv4 pa2">
		// 			<table>
		// 		      <tbody>
		// 		        <tr>
		// 		          <td  className="ba w-20 h2" style={{backgroundColor: "#2D882D"}}></td>
		// 		          <td  className=" w-70">Highly undervalued - Draft Priority!</td>
		// 		        </tr>
		// 		        <tr>
		// 		          <td  className=" ba h2" style={{backgroundColor: "#55AA55"}}></td>
		// 		          <td  className="">Moderately undervalued - Target this player</td>
		// 		        </tr>
		// 		        <tr>
		// 		          <td  className=" ba h2" style={{backgroundColor: "#88CC88"}}></td>
		// 		          <td  className="">Slightly undervalued - Good pick</td>
		// 		        </tr>
		// 		      </tbody>
		// 		    </table>
		//       </div>
		//     </div>
		//     <div className="fl w-100 w-third-ns pa2">
		//       <div className="outline bg-white pv4 pa2">
		//       		<table>
		// 		      <tbody>
		// 		        <tr>
		// 		          <td  className="pv3 pr3 ba w-20" style={{backgroundColor: "#AA3939"}}></td>
		// 		          <td  className="pv3 pr3">Highly overvalued - Do Not Draft!</td>
		// 		        </tr>
		// 		        <tr>
		// 		          <td  className="pv3 pr3 ba" style={{backgroundColor: "#D46A6A"}}></td>
		// 		          <td  className="pv3 pr3">Moderately overvalued - Avoid this player</td>
		// 		        </tr>
		// 		        <tr>
		// 		          <td  className="pv3 pr3 ba" style={{backgroundColor: "#FFAAAA"}}></td>
		// 		          <td  className="pv3 pr3">Slightly overvalued - Bad pick</td>
		// 		        </tr>
		// 		      </tbody>
		// 		   	</table>
		//       </div>
		//     </div>
		//   </div>
		// </div>