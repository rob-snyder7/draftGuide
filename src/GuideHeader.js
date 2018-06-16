import React from 'react';
import DraftsiteDropdown from './DraftsiteDropdown';
import GuideKey from './GuideKey';
import GuideHowTo from './GuideHowTo';


const GuideHeader = ({onDropdownClick, reset, source}) => {

	return (
		<div>
			<DraftsiteDropdown onDropdownClick={onDropdownClick}/>
			{[<GuideHowTo />, <GuideKey source={source}/>][reset]}
		</div>
	)
}


export default GuideHeader;
