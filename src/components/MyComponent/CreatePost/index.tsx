import React, {useState} from 'react';
import CreatePost from "./CreatePost";
import UIButton from "../../UI/UIButton/UIButton";
import UIModal from "../../UI/UIModal/UIModal";

const ControlsCreatePost = () => {
	const [showCreateForm, setShowCreateForm] = useState<boolean>(false)

	const showCreateFormHandler = () => {
		setShowCreateForm(prevState => !prevState)
	}
	return (
		<div>
			<UIButton onClick={showCreateFormHandler}>Создать пост</UIButton>
			{showCreateForm && <UIModal><CreatePost closeModal={showCreateFormHandler}/></UIModal>}
		</div>
	);
};

export default ControlsCreatePost;