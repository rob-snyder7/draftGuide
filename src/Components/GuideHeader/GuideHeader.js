import React from 'react';
import DraftsiteDropdown from './DraftsiteDropdown';
import GuideKey from './GuideKey';
import GuideHowTo from './GuideHowTo';
import './GuideHeader.css';


const GuideHeader = ({onDropdownClick, reset, source, name}) => {

	return (
		<div className='guideheader'>
			<div className=''>
				<div className='col-md-2 col-sm-2 col-xs-2'>
					<DraftsiteDropdown onDropdownClick={onDropdownClick} source={source}/>
				</div>
				<div className='col-md-8 col-sm-10 col-xs-10'>
					<h1 className='tc white'>{name} Rankings</h1>
				</div>
				<div className='col-md-2 col-sm-0 col-xs-0'></div>
			</div>
			<div className=''>
			{[<GuideHowTo />, <GuideKey source={source}/>][reset]}
			</div>
		</div>
	)
}


export default GuideHeader;
