import React from 'react';
import DraftsiteDropdown from './DraftsiteDropdown';
import GuideKey from './GuideKey';
import GuideHowTo from './GuideHowTo';


const GuideHeader = ({onDropdownClick, reset, source, name}) => {

	return (
		<div className='vh-25 pt5'>
			<div className='row'>
				<DraftsiteDropdown onDropdownClick={onDropdownClick} source={source}/>
				<h1 className='fl w-70 tc ma0 white'>{name} Rankings</h1>
			</div>
			<div className='row'>
			{[<GuideHowTo />, <GuideKey source={source}/>][reset]}
			</div>
		</div>
	)
}


export default GuideHeader;
