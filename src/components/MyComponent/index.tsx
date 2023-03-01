import React, {useState} from 'react';
import Filters from "./Filters";
import ControlsCreatePost from "./CreatePost";
import PostsField from "./Posts/PostsField";
import SwitchDisplayStyleControls from "./SwitchDisplayStyleControls";
import {displayEnum} from "../../enum/displayEnum";
import * as S from './style'

const MyComponent = () => {
	const [displayStyle, setDisplayStyle] = useState<string>(displayEnum.cardStyle)

	return (
		<S.Wrapper>
			<Filters/>
			<ControlsCreatePost/>
			<SwitchDisplayStyleControls setDisplayStyle={setDisplayStyle}/>
			<PostsField displayStyle={displayStyle}/>
		</S.Wrapper>
	);
};

export default MyComponent;