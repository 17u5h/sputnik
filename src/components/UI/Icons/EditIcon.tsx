import React from 'react';
import {IconContainer} from "../../../GlobalStyle";
import {PropsOnClick} from "../../../types/types";

const EditIcon = ({onClick}: PropsOnClick) => {
	return (
		<IconContainer onClick={() => onClick()}>
		<svg xmlns="http://www.w3.org/2000/svg" fill="#555555" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"/></svg>
		</IconContainer>
			);
};

export default EditIcon;