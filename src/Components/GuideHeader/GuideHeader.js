import React from 'react';
import DraftsiteDropdown from './DraftsiteDropdown';
import GuideKey from './GuideKey';
import GuideHowTo from './GuideHowTo';


const GuideHeader = ({onDropdownClick, reset, source, name}) => {

	return (
		<div>
			<h1 className='tc'>{name} Rankings</h1>
			<DraftsiteDropdown onDropdownClick={onDropdownClick} source={source}/>
			{[<GuideHowTo />, <GuideKey source={source}/>][reset]}
		</div>
	)
}


export default GuideHeader;
